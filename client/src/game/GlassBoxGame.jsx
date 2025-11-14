import { GlassBoxGameProvider, useGlassBoxGame } from './contexts/GlassBoxGameContext';
import OnboardingScreen from './components/OnboardingScreen';
import PermissionsScreen from './components/PermissionsScreen';
import FeedScreen from './components/FeedScreen';
import AnalysisScreen from './components/AnalysisScreen';
import { Link } from 'react-router-dom';

function GameNavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔒</span>
            </div>
            <h1 className="font-grotesk text-xl font-black tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
              D.R.E.A.M
            </h1>
          </Link>

          {/* Title */}
          <div className="flex-1 text-center hidden md:block">
            <h2 className="text-lg font-bold text-white">
              🔒 90 Giây Trong Lồng Kính
            </h2>
            <p className="text-xs text-gray-400">Trò chơi giáo dục về quyền riêng tư</p>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-medium transition-all duration-300 text-sm flex items-center gap-2"
          >
            <span>←</span>
            <span className="hidden sm:inline">Trang chủ</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function GlassBoxGameContent() {
  const { gameState } = useGlassBoxGame();

  return (
    <div className="min-h-screen bg-gray-900">
      <GameNavBar />
      <div className="pt-20">
        {gameState.currentScreen === 'onboarding' && <OnboardingScreen />}
        {gameState.currentScreen === 'permissions' && <PermissionsScreen />}
        {gameState.currentScreen === 'feed' && <FeedScreen />}
        {gameState.currentScreen === 'analysis' && <AnalysisScreen />}
      </div>
    </div>
  );
}

export default function GlassBoxGame() {
  return (
    <GlassBoxGameProvider>
      <GlassBoxGameContent />
    </GlassBoxGameProvider>
  );
}
