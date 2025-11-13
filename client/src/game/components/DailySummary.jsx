import { useGame } from '../contexts/GameContext';
import { ACTIONS, GAME_CONFIG } from '../gameLogic/constants';
import { calculateEfficiencyMetrics } from '../gameLogic/leaderboardSystem';

export default function DailySummary() {
  const { state, dispatch } = useGame();
  const { playerStats, platformStats, gameFlow, playerDCS, decisionsHistory } = state;

  const metrics = calculateEfficiencyMetrics(playerStats, platformStats);
  
  // Get today's decisions
  const todayDecisions = decisionsHistory.filter(d => d.day === gameFlow.day);

  const handleContinue = () => {
    if (gameFlow.day >= GAME_CONFIG.TOTAL_DAYS) {
      dispatch({ type: ACTIONS.NEXT_PHASE }); // Go to ENDGAME
    } else {
      dispatch({ type: ACTIONS.START_DAY }); // Start next day
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            📊 Tổng Kết Ngày {gameFlow.day}
          </h1>
          <p className="text-xl text-blue-300">
            Hãy xem lại những gì đã xảy ra hôm nay
          </p>
        </div>

        {/* Main Stats Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl mb-6">
          {/* DCS Score - Prominent */}
          <div className="text-center mb-8 p-6 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-xl border border-purple-400/50">
            <p className="text-gray-300 mb-2">Điểm Công Dân Số của bạn</p>
            <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {playerDCS.toFixed(1)}
            </p>
            <p className="text-sm text-gray-400 mt-2">DCS Score</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
              <p className="text-yellow-400 text-sm mb-1">💰 Tokens</p>
              <p className="text-3xl font-bold text-yellow-300">{playerStats.tokens}</p>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
              <p className="text-blue-400 text-sm mb-1">🛡️ Privacy</p>
              <p className="text-3xl font-bold text-blue-300">{playerStats.privacyScore}</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
              <p className="text-purple-400 text-sm mb-1">📈 Data Points</p>
              <p className="text-3xl font-bold text-purple-300">{playerStats.totalDataPointsGenerated}</p>
            </div>
          </div>

          {/* Economic Analysis */}
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>💹</span>
              <span>Phân tích Kinh tế</span>
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Thu nhập của bạn:</span>
                <span className="text-yellow-400 font-bold">{metrics.playerTokens} tokens</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Doanh thu nền tảng:</span>
                <span className="text-green-400 font-bold">{metrics.platformRevenue} tokens</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Lợi nhuận nền tảng:</span>
                <span className="text-red-400 font-bold">{metrics.platformProfit} tokens</span>
              </div>
              
              <div className="pt-3 border-t border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Phần của bạn:</span>
                  <span className={`font-bold ${metrics.playerShare > 40 ? 'text-green-400' : 'text-red-400'}`}>
                    {metrics.playerShare}%
                  </span>
                </div>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-green-500"
                    style={{ width: `${metrics.playerShare}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {metrics.playerShare > 40 
                    ? '✓ Bạn đang nhận được giá trị tương xứng'
                    : '⚠️ Nền tảng đang kiếm lợi nhiều hơn bạn'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Today's Decisions */}
          <div className="bg-black/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📝</span>
              <span>Quyết định hôm nay</span>
            </h3>
            
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {todayDecisions.length > 0 ? (
                todayDecisions.map((decision, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-300 text-sm">{decision.decision}</p>
                    <p className="text-xs text-gray-500 mt-1">{decision.impact}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">Không có quyết định nào được ghi nhận</p>
              )}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                     rounded-xl font-bold text-white text-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            {gameFlow.day >= GAME_CONFIG.TOTAL_DAYS ? '🏁 Xem Kết Quả Cuối Cùng' : '▶️ Tiếp Tục Ngày Tiếp Theo'}
          </button>
          
          <p className="text-gray-400 mt-4 text-sm">
            {gameFlow.day >= GAME_CONFIG.TOTAL_DAYS 
              ? 'Game sắp kết thúc!' 
              : `Còn ${GAME_CONFIG.TOTAL_DAYS - gameFlow.day} ngày nữa`
            }
          </p>
        </div>
      </div>
    </div>
  );
}
