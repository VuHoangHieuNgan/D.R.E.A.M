import { createContext, useContext, useReducer, useEffect } from 'react';
import { gameReducer } from '../gameLogic/gameReducer';
import { GAME_CONFIG, BOT_STRATEGIES } from '../gameLogic/constants';

// Initial game state
export const initialGameState = {
  // Game flow control
  gameFlow: {
    day: 0,           // 0: Onboarding, 1-7: Playing, 8: Endgame
    phase: 'ONBOARDING', // ONBOARDING, FEED, EVENT, SUMMARY, ENDGAME
  },

  // Player statistics
  playerStats: {
    tokens: GAME_CONFIG.INITIAL_TOKENS,
    privacyScore: GAME_CONFIG.INITIAL_PRIVACY_SCORE,
    totalDataPointsGenerated: 0,
  },

  // Platform statistics (for calculating efficiency)
  platformStats: {
    totalRevenueFromPlayer: 0,
    totalProfitFromPlayer: 0,
  },

  // AI-built user profile
  aiProfile: {
    interests: {
      shopping: 0,
      entertainment: 0,
      politics: 0,
      social: 0,
    },
    profileValue: 0,
  },
  
  // Current game data
  currentFeed: [],
  currentEvent: null,
  
  // Leaderboard data
  leaderboard: [],
  playerDCS: 0,
  
  // Player decisions history
  decisionsHistory: [],
};

// Create context
const GameContext = createContext();

// Provider component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  // Initialize leaderboard with bots on mount
  useEffect(() => {
    const initializeLeaderboard = () => {
      const bots = Object.entries(BOT_STRATEGIES).map(([key, strategy]) => ({
        id: `bot_${key}`,
        name: strategy.name,
        isBot: true,
        strategy: strategy.behavior,
        dcs: 50 + Math.random() * 20, // Random initial DCS between 50-70
        tokens: Math.floor(Math.random() * 100),
        privacyScore: Math.floor(50 + Math.random() * 50),
      }));

      const player = {
        id: 'player',
        name: '👤 Bạn',
        isBot: false,
        dcs: 50, // Initial DCS
        tokens: state.playerStats.tokens,
        privacyScore: state.playerStats.privacyScore,
      };

      dispatch({
        type: 'UPDATE_LEADERBOARD',
        payload: [...bots, player].sort((a, b) => b.dcs - a.dcs)
      });
    };

    initializeLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use game context
export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
