import { DCS_WEIGHTS } from './constants';

// ============================================
// CALCULATE DIGITAL CITIZENSHIP SCORE (DCS)
// ============================================
export function calculateDCS(playerStats, platformStats) {
  const { privacyScore, tokens } = playerStats;
  const { totalRevenueFromPlayer } = platformStats;

  // Component 1: Autonomy (Privacy Score)
  // Direct score from 0-100
  const autonomyScore = privacyScore;

  // Component 2: Economic Efficiency
  // How much of the platform's revenue does the player capture?
  // Higher is better - means player gets fair value
  let efficiencyScore = 0;
  if (totalRevenueFromPlayer > 0) {
    const playerShare = tokens / totalRevenueFromPlayer;
    efficiencyScore = Math.min(100, playerShare * 100);
  } else {
    // No revenue yet, start at neutral 50
    efficiencyScore = 50;
  }

  // Component 3: Impact (Participation)
  // Based on total economic activity (revenue generated)
  // Uses logarithmic scale to reward participation but with diminishing returns
  const impactScore = totalRevenueFromPlayer > 0
    ? Math.min(100, 10 * Math.log10(totalRevenueFromPlayer + 1))
    : 0;

  // Calculate weighted DCS
  const dcs = 
    (autonomyScore * DCS_WEIGHTS.AUTONOMY) +
    (efficiencyScore * DCS_WEIGHTS.EFFICIENCY) +
    (impactScore * DCS_WEIGHTS.IMPACT);

  return Math.round(dcs * 10) / 10; // Round to 1 decimal
}

// ============================================
// UPDATE LEADERBOARD WITH CURRENT SCORES
// ============================================
export function updateLeaderboard(currentLeaderboard, playerDCS, playerStats) {
  const updatedLeaderboard = currentLeaderboard.map(entry => {
    if (entry.id === 'player') {
      return {
        ...entry,
        dcs: playerDCS,
        tokens: playerStats.tokens,
        privacyScore: playerStats.privacyScore
      };
    }
    return entry;
  });

  // Sort by DCS descending
  return updatedLeaderboard.sort((a, b) => b.dcs - a.dcs);
}

// ============================================
// UPDATE BOT SCORES (simulate bot progress)
// ============================================
export function updateBotScores(leaderboard, day) {
  return leaderboard.map(entry => {
    if (!entry.isBot) return entry;

    const { strategy } = entry;
    
    // Simulate bot progress based on their strategy
    const dayProgress = day / 7; // Normalize to 0-1
    
    // Privacy decreases based on awareness (inverse)
    const privacyLoss = (1 - strategy.privacyAwareness) * 15 * dayProgress;
    const newPrivacy = Math.max(0, 100 - privacyLoss);
    
    // Tokens increase based on interaction rate
    const tokenGain = strategy.interactionRate * 100 * dayProgress;
    const newTokens = Math.floor(tokenGain);
    
    // Calculate revenue (tokens player gets is always less than what platform earns)
    const platformRevenue = newTokens / (0.3 + strategy.privacyAwareness * 0.4);
    
    // Recalculate DCS for bot
    const botStats = {
      privacyScore: newPrivacy,
      tokens: newTokens
    };
    const botPlatformStats = {
      totalRevenueFromPlayer: platformRevenue
    };
    const newDCS = calculateDCS(botStats, botPlatformStats);

    return {
      ...entry,
      dcs: newDCS,
      tokens: newTokens,
      privacyScore: Math.round(newPrivacy)
    };
  });
}

// ============================================
// GET PLAYER RANK
// ============================================
export function getPlayerRank(leaderboard) {
  const playerIndex = leaderboard.findIndex(entry => entry.id === 'player');
  return playerIndex + 1; // 1-indexed rank
}

// ============================================
// GET ACHIEVEMENT BASED ON DCS
// ============================================
export function getAchievement(dcs, achievements) {
  for (const achievement of achievements) {
    const minDCS = achievement.minDCS || 0;
    const maxDCS = achievement.maxDCS || 100;
    
    if (dcs >= minDCS && dcs <= maxDCS) {
      return achievement;
    }
  }
  
  // Default fallback
  return achievements[achievements.length - 1];
}

// ============================================
// GENERATE LEADERBOARD INSIGHTS
// ============================================
export function generateLeaderboardInsights(leaderboard, playerDCS) {
  const playerRank = getPlayerRank(leaderboard);
  const totalPlayers = leaderboard.length;
  const percentile = Math.round((1 - (playerRank - 1) / totalPlayers) * 100);
  
  const topPlayer = leaderboard[0];
  const dcsGap = topPlayer.dcs - playerDCS;
  
  const insights = {
    rank: playerRank,
    totalPlayers,
    percentile,
    dcsGap: Math.round(dcsGap * 10) / 10,
    isTopPlayer: playerRank === 1,
    message: ''
  };

  if (insights.isTopPlayer) {
    insights.message = '🏆 Tuyệt vời! Bạn đang dẫn đầu bảng xếp hạng!';
  } else if (percentile >= 75) {
    insights.message = '⭐ Bạn đang ở top 25%! Tiếp tục phát huy!';
  } else if (percentile >= 50) {
    insights.message = '👍 Bạn đang ở giữa bảng xếp hạng. Còn nhiều cơ hội!';
  } else if (percentile >= 25) {
    insights.message = '💪 Hãy cân nhắc chiến lược của bạn!';
  } else {
    insights.message = '🤔 Dữ liệu của bạn đang bị khai thác quá nhiều!';
  }

  return insights;
}

// ============================================
// CALCULATE EFFICIENCY METRICS
// ============================================
export function calculateEfficiencyMetrics(playerStats, platformStats) {
  const { tokens } = playerStats;
  const { totalRevenueFromPlayer, totalProfitFromPlayer } = platformStats;

  return {
    playerTokens: tokens,
    platformRevenue: totalRevenueFromPlayer,
    platformProfit: totalProfitFromPlayer,
    playerShare: totalRevenueFromPlayer > 0 
      ? Math.round((tokens / totalRevenueFromPlayer) * 100) 
      : 0,
    platformShare: totalRevenueFromPlayer > 0
      ? Math.round((totalProfitFromPlayer / totalRevenueFromPlayer) * 100)
      : 0,
    exploitationRatio: tokens > 0
      ? Math.round((totalProfitFromPlayer / tokens) * 10) / 10
      : 0
  };
}
