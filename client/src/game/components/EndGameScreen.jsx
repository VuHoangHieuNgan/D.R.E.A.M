import { useGame } from '../contexts/GameContext';
import { ACHIEVEMENTS } from '../gameLogic/constants';
import { 
  getPlayerRank, 
  getAchievement, 
  calculateEfficiencyMetrics,
  generateLeaderboardInsights 
} from '../gameLogic/leaderboardSystem';

export default function EndGameScreen() {
  const { state } = useGame();
  const { playerStats, platformStats, playerDCS, leaderboard, decisionsHistory } = state;

  const achievement = getAchievement(playerDCS, ACHIEVEMENTS);
  const rank = getPlayerRank(leaderboard);
  const metrics = calculateEfficiencyMetrics(playerStats, platformStats);
  const insights = generateLeaderboardInsights(leaderboard, playerDCS);

  const handlePlayAgain = () => {
    window.location.reload(); // Simple restart
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            🏁 Game Kết Thúc
          </h1>
          <p className="text-2xl text-purple-300">
            Thế Giới Dữ Liệu: Cuộc Đua Công Dân Số
          </p>
        </div>

        {/* Achievement Card */}
        <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-2 border-yellow-500 rounded-2xl p-8 mb-8 text-center">
          <p className="text-6xl mb-4">{achievement.title.split(' ')[0]}</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            {achievement.title.substring(2)}
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            {achievement.description}
          </p>
          <div className="flex justify-center items-center gap-8">
            <div>
              <p className="text-gray-400 text-sm">Điểm DCS</p>
              <p className="text-5xl font-bold text-yellow-400">{playerDCS.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Xếp hạng</p>
              <p className="text-5xl font-bold text-blue-400">#{rank}</p>
            </div>
          </div>
          <p className="text-purple-300 mt-4">{insights.message}</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Final Stats */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📊</span>
              <span>Thống Kê Cuối Cùng</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg">
                <span className="text-gray-300">💰 Tổng Tokens:</span>
                <span className="text-2xl font-bold text-yellow-400">{playerStats.tokens}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg">
                <span className="text-gray-300">🛡️ Privacy Score:</span>
                <span className="text-2xl font-bold text-blue-400">{playerStats.privacyScore}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-500/20 rounded-lg">
                <span className="text-gray-300">📈 Data Points:</span>
                <span className="text-2xl font-bold text-purple-400">{playerStats.totalDataPointsGenerated}</span>
              </div>
            </div>
          </div>

          {/* Economic Analysis */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>💹</span>
              <span>Phân Tích Kinh Tế</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Thu nhập của bạn</span>
                  <span className="text-yellow-400">{metrics.playerTokens} tokens</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Doanh thu nền tảng</span>
                  <span className="text-green-400">{metrics.platformRevenue} tokens</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>Lợi nhuận nền tảng</span>
                  <span className="text-red-400">{metrics.platformProfit} tokens</span>
                </div>
                
                {/* Visual Comparison */}
                <div className="relative h-64 bg-gray-800 rounded-lg p-4">
                  <div className="flex items-end justify-around h-full">
                    <div className="text-center flex-1">
                      <div 
                        className="bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t-lg mx-auto transition-all duration-1000"
                        style={{ 
                          width: '60px',
                          height: `${Math.min((metrics.playerTokens / metrics.platformRevenue) * 100, 100)}%` 
                        }}
                      />
                      <p className="text-xs text-yellow-400 mt-2">Bạn</p>
                      <p className="text-sm font-bold text-white">{metrics.playerTokens}</p>
                    </div>
                    <div className="text-center flex-1">
                      <div 
                        className="bg-gradient-to-t from-red-500 to-red-300 rounded-t-lg mx-auto transition-all duration-1000"
                        style={{ 
                          width: '60px',
                          height: '100%' 
                        }}
                      />
                      <p className="text-xs text-red-400 mt-2">Nền tảng</p>
                      <p className="text-sm font-bold text-white">{metrics.platformRevenue}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-500/20 border border-red-400/50 rounded-lg">
                  <p className="text-sm text-red-300">
                    ⚠️ Tỷ lệ khai thác: <strong>{metrics.exploitationRatio}x</strong>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Nền tảng kiếm được {metrics.exploitationRatio} lần so với bạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Decisions Review */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🔍</span>
            <span>Những Quyết Định Quan Trọng</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {decisionsHistory.slice(0, 10).map((decision, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">
                    {decision.phase === 'ONBOARDING' && '🚀'}
                    {decision.phase === 'FEED' && '📱'}
                    {decision.phase === 'EVENT' && '⚡'}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">Ngày {decision.day} - {decision.phase}</p>
                    <p className="text-gray-300 font-medium">{decision.decision}</p>
                    <p className="text-xs text-gray-400 mt-1">{decision.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Message */}
        <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500 rounded-2xl p-8 mb-8">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>Bài Học Về Địa Tô Dữ Liệu</span>
          </h3>
          
          <div className="space-y-4 text-gray-200">
            <p className="text-lg">
              Trong thế giới thực, dữ liệu cá nhân của bạn là tài sản có giá trị. Các nền tảng lớn 
              thu thập, phân tích và kiếm lợi nhuận từ dữ liệu này, thường mà không trả cho bạn 
              một phần công bằng.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xl mb-2">🛡️</p>
                <p className="font-bold mb-2">Bảo Vệ Quyền Riêng Tư</p>
                <p className="text-sm text-gray-300">
                  Đọc kỹ điều khoản, giới hạn quyền truy cập, sử dụng công cụ bảo mật
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xl mb-2">⚖️</p>
                <p className="font-bold mb-2">Yêu Cầu Công Bằng</p>
                <p className="text-sm text-gray-300">
                  Ủng hộ các chính sách yêu cầu nền tảng chia sẻ lợi nhuận với người dùng
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xl mb-2">🎯</p>
                <p className="font-bold mb-2">Tham Gia Có Ý Thức</p>
                <p className="text-sm text-gray-300">
                  Hiểu giá trị dữ liệu của bạn và đưa ra quyết định sáng suốt
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlePlayAgain}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 
                     rounded-xl font-bold text-white text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            🔄 Chơi Lại
          </button>
          
          <button
            onClick={() => window.close()}
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 
                     rounded-xl font-bold text-white text-lg shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            🏠 Thoát Game
          </button>
        </div>

        {/* Credits */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Game giáo dục về quyền riêng tư dữ liệu và địa tô dữ liệu</p>
          <p className="mt-2">Được phát triển với React và Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
