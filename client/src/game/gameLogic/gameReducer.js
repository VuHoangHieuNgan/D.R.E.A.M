import { ACTIONS, INTERACTION_TYPES, GAME_CONFIG, PHASES } from './constants';
import { calculateDCS } from './leaderboardSystem';

export function gameReducer(state, action) {
  switch (action.type) {
    // ==========================================
    // ONBOARDING ACTIONS
    // ==========================================
    case ACTIONS.AGREE_ALL_TERMS:
      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          tokens: state.playerStats.tokens + GAME_CONFIG.AGREE_ALL_REWARD,
          privacyScore: state.playerStats.privacyScore + GAME_CONFIG.AGREE_ALL_PRIVACY_PENALTY,
        },
        decisionsHistory: [
          ...state.decisionsHistory,
          {
            day: 0,
            phase: 'ONBOARDING',
            decision: 'Đồng ý tất cả điều khoản',
            impact: `+${GAME_CONFIG.AGREE_ALL_REWARD} tokens, ${GAME_CONFIG.AGREE_ALL_PRIVACY_PENALTY} privacy`
          }
        ],
        gameFlow: {
          ...state.gameFlow,
          day: 1,
          phase: PHASES.FEED
        }
      };

    case ACTIONS.CUSTOMIZE_TERMS:
      return {
        ...state,
        decisionsHistory: [
          ...state.decisionsHistory,
          {
            day: 0,
            phase: 'ONBOARDING',
            decision: 'Tùy chỉnh quyền riêng tư',
            impact: 'Giữ nguyên quyền riêng tư'
          }
        ],
        gameFlow: {
          ...state.gameFlow,
          day: 1,
          phase: PHASES.FEED
        }
      };

    // ==========================================
    // FEED INTERACTIONS
    // ==========================================
    case ACTIONS.INTERACT_WITH_POST: {
      const { post, interactionType } = action.payload;
      const interaction = INTERACTION_TYPES[interactionType.toUpperCase()];
      
      if (!interaction) return state;

      // Update interest based on post category
      const newInterests = { ...state.aiProfile.interests };
      if (post.category && interactionType !== 'skip') {
        newInterests[post.category] = (newInterests[post.category] || 0) + 1;
      }

      // Calculate new profile value
      const totalInterests = Object.values(newInterests).reduce((sum, val) => sum + val, 0);
      const newProfileValue = totalInterests * GAME_CONFIG.PROFILE_VALUE_MULTIPLIER;

      // Calculate platform revenue and profit
      const platformRevenue = interaction.platformRevenue;
      const platformProfit = platformRevenue - interaction.tokens;

      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          tokens: state.playerStats.tokens + interaction.tokens,
          privacyScore: Math.max(0, Math.min(100, 
            state.playerStats.privacyScore + interaction.privacyImpact
          )),
          totalDataPointsGenerated: state.playerStats.totalDataPointsGenerated + interaction.dataPoints,
        },
        platformStats: {
          ...state.platformStats,
          totalRevenueFromPlayer: state.platformStats.totalRevenueFromPlayer + platformRevenue,
          totalProfitFromPlayer: state.platformStats.totalProfitFromPlayer + platformProfit,
        },
        aiProfile: {
          interests: newInterests,
          profileValue: newProfileValue,
        },
        decisionsHistory: [
          ...state.decisionsHistory,
          {
            day: state.gameFlow.day,
            phase: 'FEED',
            decision: `${interaction.label}: ${post.title}`,
            impact: `+${interaction.tokens} tokens, ${interaction.privacyImpact} privacy, +${interaction.dataPoints} data points`
          }
        ],
      };
    }

    // ==========================================
    // EVENT RESPONSES
    // ==========================================
    case ACTIONS.RESPOND_TO_EVENT: {
      const { event, choice } = action.payload;
      let newState = { ...state };

      switch (event.type) {
        case 'SELL_DATA':
          if (choice === 'accept') {
            const offerPrice = event.offerPrice || 0;
            const realValue = event.profileValue || 0;
            const platformProfit = realValue - offerPrice;

            newState.playerStats = {
              ...newState.playerStats,
              tokens: newState.playerStats.tokens + offerPrice,
              privacyScore: Math.max(0, newState.playerStats.privacyScore - 20),
            };
            newState.platformStats = {
              ...newState.platformStats,
              totalRevenueFromPlayer: newState.platformStats.totalRevenueFromPlayer + realValue,
              totalProfitFromPlayer: newState.platformStats.totalProfitFromPlayer + platformProfit,
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Bán dữ liệu cá nhân',
                impact: `+${offerPrice} tokens, -20 privacy, Platform profit: ${platformProfit}`
              }
            ];
          } else {
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Từ chối bán dữ liệu',
                impact: 'Giữ nguyên quyền riêng tư'
              }
            ];
          }
          break;

        case 'TARGETED_AD':
          if (choice === 'watch') {
            newState.playerStats = {
              ...newState.playerStats,
              tokens: newState.playerStats.tokens + 3,
              totalDataPointsGenerated: newState.playerStats.totalDataPointsGenerated + 5,
            };
            newState.platformStats = {
              ...newState.platformStats,
              totalRevenueFromPlayer: newState.platformStats.totalRevenueFromPlayer + 20,
              totalProfitFromPlayer: newState.platformStats.totalProfitFromPlayer + 17,
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Xem quảng cáo được nhắm mục tiêu',
                impact: '+3 tokens, +5 data points'
              }
            ];
          }
          break;

        case 'CONTENT_WARNING':
          if (choice === 'self_delete') {
            newState.playerStats = {
              ...newState.playerStats,
              privacyScore: Math.max(0, newState.playerStats.privacyScore - 5),
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Tự xóa nội dung nhạy cảm',
                impact: '-5 privacy (tự kiểm duyệt)'
              }
            ];
          } else {
            newState.playerStats = {
              ...newState.playerStats,
              privacyScore: Math.max(0, newState.playerStats.privacyScore - 15),
              tokens: Math.max(0, newState.playerStats.tokens - 10),
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Giữ nguyên nội dung - bị phạt',
                impact: '-15 privacy, -10 tokens'
              }
            ];
          }
          break;

        case 'SUSPICIOUS_ACTIVITY':
          if (choice === 'verify') {
            newState.playerStats = {
              ...newState.playerStats,
              privacyScore: Math.max(0, newState.playerStats.privacyScore - 10),
            };
            newState.platformStats = {
              ...newState.platformStats,
              totalRevenueFromPlayer: newState.platformStats.totalRevenueFromPlayer + 15,
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Xác minh danh tính',
                impact: '-10 privacy (cung cấp thêm thông tin)'
              }
            ];
          } else {
            newState.playerStats = {
              ...newState.playerStats,
              tokens: Math.max(0, newState.playerStats.tokens - 5),
            };
            newState.decisionsHistory = [
              ...newState.decisionsHistory,
              {
                day: newState.gameFlow.day,
                phase: 'EVENT',
                decision: 'Bỏ qua xác minh - bị hạn chế',
                impact: '-5 tokens (hạn chế tính năng)'
              }
            ];
          }
          break;

        case 'DATA_BREACH':
          newState.playerStats = {
            ...newState.playerStats,
            privacyScore: Math.max(0, newState.playerStats.privacyScore - 15),
          };
          newState.decisionsHistory = [
            ...newState.decisionsHistory,
            {
              day: newState.gameFlow.day,
              phase: 'EVENT',
              decision: 'Chịu ảnh hưởng từ rò rỉ dữ liệu',
              impact: '-15 privacy (không thể kiểm soát)'
            }
          ];
          break;

        case 'LUCKY_BONUS':
          newState.playerStats = {
            ...newState.playerStats,
            tokens: newState.playerStats.tokens + 20,
          };
          newState.decisionsHistory = [
            ...newState.decisionsHistory,
            {
              day: newState.gameFlow.day,
              phase: 'EVENT',
              decision: 'Nhận phần thưởng may mắn',
              impact: '+20 tokens'
            }
          ];
          break;

        default:
          break;
      }

      newState.currentEvent = null;
      return newState;
    }

    // ==========================================
    // GAME FLOW CONTROL
    // ==========================================
    case ACTIONS.SET_FEED:
      return {
        ...state,
        currentFeed: action.payload,
      };

    case ACTIONS.SET_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
        gameFlow: {
          ...state.gameFlow,
          phase: action.payload ? PHASES.EVENT : state.gameFlow.phase
        }
      };

    case ACTIONS.NEXT_PHASE: {
      const currentPhase = state.gameFlow.phase;
      let nextPhase = currentPhase;

      if (currentPhase === PHASES.FEED) {
        nextPhase = PHASES.EVENT;
      } else if (currentPhase === PHASES.EVENT) {
        nextPhase = PHASES.SUMMARY;
      } else if (currentPhase === PHASES.SUMMARY) {
        if (state.gameFlow.day >= GAME_CONFIG.TOTAL_DAYS) {
          nextPhase = PHASES.ENDGAME;
        } else {
          nextPhase = PHASES.FEED;
        }
      }

      return {
        ...state,
        gameFlow: {
          ...state.gameFlow,
          phase: nextPhase
        }
      };
    }

    case ACTIONS.START_DAY:
      return {
        ...state,
        currentFeed: [], // Reset feed for new day
        currentEvent: null, // Clear any lingering events
        gameFlow: {
          ...state.gameFlow,
          day: state.gameFlow.day + 1,
          phase: PHASES.FEED
        }
      };

    case ACTIONS.END_DAY: {
      // Calculate current DCS
      const currentDCS = calculateDCS(state.playerStats, state.platformStats);
      
      return {
        ...state,
        playerDCS: currentDCS,
        gameFlow: {
          ...state.gameFlow,
          phase: PHASES.SUMMARY
        }
      };
    }

    // ==========================================
    // LEADERBOARD
    // ==========================================
    case ACTIONS.UPDATE_LEADERBOARD: {
      const newLeaderboard = action.payload || state.leaderboard;
      
      // Update player's position in leaderboard
      const playerIndex = newLeaderboard.findIndex(p => p.id === 'player');
      if (playerIndex !== -1) {
        newLeaderboard[playerIndex] = {
          ...newLeaderboard[playerIndex],
          dcs: state.playerDCS,
          tokens: state.playerStats.tokens,
          privacyScore: state.playerStats.privacyScore,
        };
      }

      // Sort by DCS
      const sortedLeaderboard = [...newLeaderboard].sort((a, b) => b.dcs - a.dcs);

      return {
        ...state,
        leaderboard: sortedLeaderboard
      };
    }

    default:
      return state;
  }
}
