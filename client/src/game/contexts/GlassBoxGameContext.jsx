import { createContext, useContext, useState } from 'react';

const GlassBoxGameContext = createContext();

export const useGlassBoxGame = () => {
  const context = useContext(GlassBoxGameContext);
  if (!context) {
    throw new Error('useGlassBoxGame must be used within a GlassBoxGameProvider');
  }
  return context;
};

export const GlassBoxGameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    currentScreen: 'onboarding', // 'onboarding', 'permissions', 'feed', 'analysis'
    permissions: {
      personalizeAds: true,
      trackDwellTime: true,
      analyzeComments: true,
      shareWithPartners: true
    },
    userInteractions: []
  });

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'feed',
      userInteractions: []
    }));
  };

  const setPermissionsAndStart = (permissionsObj) => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'feed',
      permissions: permissionsObj,
      userInteractions: []
    }));
  };

  const navigateToPermissions = () => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'permissions'
    }));
  };

  const addInteraction = (interaction) => {
    setGameState(prev => ({
      ...prev,
      userInteractions: [...prev.userInteractions, interaction]
    }));
  };

  const endGame = () => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'analysis'
    }));
  };

  const resetGame = () => {
    setGameState({
      currentScreen: 'onboarding',
      permissions: {
        personalizeAds: true,
        trackDwellTime: true,
        analyzeComments: true,
        shareWithPartners: true
      },
      userInteractions: []
    });
  };

  const value = {
    gameState,
    startGame,
    setPermissionsAndStart,
    navigateToPermissions,
    addInteraction,
    endGame,
    resetGame
  };

  return <GlassBoxGameContext.Provider value={value}>{children}</GlassBoxGameContext.Provider>;
};
