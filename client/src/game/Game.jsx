import { useEffect, useState } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import { PHASES, ACTIONS } from './gameLogic/constants';
import { generateFeedHybrid, coordinateEvent } from './gameLogic/aiSystem';
import { calculateDCS, updateBotScores } from './gameLogic/leaderboardSystem';

// Components
import OnboardingScreen from './components/OnboardingScreen';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';
import EventModal from './components/EventModal';
import Leaderboard from './components/Leaderboard';
import DailySummary from './components/DailySummary';
import EndGameScreen from './components/EndGameScreen';

// Game Controller Component
function GameController() {
  const { state, dispatch } = useGame();
  const { gameFlow, aiProfile, currentFeed, currentEvent, playerStats, platformStats, leaderboard } = state;
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

  // Generate feed when entering FEED phase
  useEffect(() => {
    if (gameFlow.phase === PHASES.FEED && currentFeed.length === 0 && !isLoadingFeed) {
      setIsLoadingFeed(true);
      
      // Use async function to call AI generator
      generateFeedHybrid(aiProfile, gameFlow.day)
        .then(feed => {
          dispatch({ type: ACTIONS.SET_FEED, payload: feed });
          setIsLoadingFeed(false);
        })
        .catch(error => {
          console.error('Failed to generate feed:', error);
          setIsLoadingFeed(false);
        });
    }
  }, [gameFlow.phase, gameFlow.day, currentFeed.length, aiProfile, dispatch, isLoadingFeed]);

  // Event generation is now handled manually by user clicking "End Day" button
  // This useEffect is removed to give players full control over when to end the day

  // Update DCS and leaderboard when ending day
  useEffect(() => {
    if (gameFlow.phase === PHASES.SUMMARY) {
      // Calculate current DCS
      const newDCS = calculateDCS(playerStats, platformStats);
      
      // Update bot scores
      const updatedLeaderboard = updateBotScores(leaderboard, gameFlow.day);
      
      // Update player's position
      const finalLeaderboard = updatedLeaderboard.map(entry => {
        if (entry.id === 'player') {
          return {
            ...entry,
            dcs: newDCS,
            tokens: playerStats.tokens,
            privacyScore: playerStats.privacyScore
          };
        }
        return entry;
      }).sort((a, b) => b.dcs - a.dcs);
      
      dispatch({ type: ACTIONS.UPDATE_LEADERBOARD, payload: finalLeaderboard });
    }
  }, [gameFlow.phase, gameFlow.day, playerStats, platformStats, leaderboard, dispatch]);

  // Render appropriate screen based on phase
  switch (gameFlow.phase) {
    case PHASES.ONBOARDING:
      return <OnboardingScreen />;
      
    case PHASES.FEED:
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4">
          <div className="max-w-7xl mx-auto py-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                Ngày {gameFlow.day} / 7
              </h1>
              <p className="text-gray-400">Buổi sáng - Bảng tin cá nhân</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left: Dashboard */}
              <div className="lg:col-span-1">
                <Dashboard />
              </div>

              {/* Center: Feed */}
              <div className="lg:col-span-2 space-y-6">
                {isLoadingFeed ? (
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-12 text-center border border-purple-500/30">
                    <div className="animate-pulse space-y-4">
                      <div className="text-6xl mb-4">🤖</div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        AI đang tạo nội dung...
                      </h3>
                      <p className="text-gray-400">
                        Curator AI đang phân tích sở thích của bạn và tạo bảng tin cá nhân hóa
                      </p>
                      <div className="flex justify-center items-center gap-2 mt-6">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Feed />
                    
                    {/* End Day Button */}
                    <div className="text-center pt-6">
                      <button
                        onClick={() => {
                          const event = coordinateEvent(state);
                          if (event) {
                            dispatch({ type: ACTIONS.SET_EVENT, payload: event });
                          } else {
                            dispatch({ type: ACTIONS.END_DAY });
                          }
                        }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 
                                 rounded-xl font-bold text-white text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
                      >
                        ⏭️ Kết thúc ngày
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Event Modal */}
          {currentEvent && <EventModal />}
        </div>
      );
      
    case PHASES.EVENT:
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4">
          <div className="max-w-7xl mx-auto py-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Dashboard />
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-2xl p-8 text-center">
                  <p className="text-gray-400">Đang xử lý sự kiện...</p>
                </div>
              </div>
            </div>
          </div>
          <EventModal />
        </div>
      );
      
    case PHASES.SUMMARY:
      return <DailySummary />;
      
    case PHASES.ENDGAME:
      return <EndGameScreen />;
      
    default:
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      );
  }
}

// Main Game Component with Provider
export default function Game() {
  return (
    <GameProvider>
      <div className="font-sans">
        <GameController />
        
        {/* Global Leaderboard (Mini) - Always visible except on Onboarding and Endgame */}
        <GameLeaderboardWidget />
      </div>
    </GameProvider>
  );
}

// Mini Leaderboard Widget
function GameLeaderboardWidget() {
  const { state } = useGame();
  const { gameFlow } = state;

  // Don't show on onboarding or endgame
  if (gameFlow.phase === PHASES.ONBOARDING || gameFlow.phase === PHASES.ENDGAME) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <details className="bg-gray-900/95 backdrop-blur-lg rounded-xl border border-purple-500/50 shadow-2xl">
        <summary className="cursor-pointer p-4 font-bold text-white hover:bg-purple-900/50 rounded-xl transition-colors">
          🏆 Xem Bảng Xếp Hạng
        </summary>
        <div className="p-4 max-h-96 overflow-y-auto">
          <Leaderboard />
        </div>
      </details>
    </div>
  );
}
