import { useGame } from '../contexts/GameContext';

export default function Dashboard() {
  const { state } = useGame();
  const { playerStats, aiProfile, gameFlow, playerDCS } = state;

  // Calculate privacy status
  const getPrivacyStatus = (score) => {
    if (score >= 80) return { text: 'Rất Tốt', color: 'text-green-400', bg: 'bg-green-500' };
    if (score >= 60) return { text: 'Tốt', color: 'text-blue-400', bg: 'bg-blue-500' };
    if (score >= 40) return { text: 'Trung Bình', color: 'text-yellow-400', bg: 'bg-yellow-500' };
    if (score >= 20) return { text: 'Kém', color: 'text-orange-400', bg: 'bg-orange-500' };
    return { text: 'Rất Kém', color: 'text-red-400', bg: 'bg-red-500' };
  };

  const privacyStatus = getPrivacyStatus(playerStats.privacyScore);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">📊 Dashboard</h2>
        <div className="text-right">
          <div className="text-sm text-gray-400">Ngày {gameFlow.day}/{7}</div>
          <div className="text-lg font-bold text-purple-400">
            DCS: {playerDCS.toFixed(1)}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Tokens */}
        <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-xl p-4 border border-yellow-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-yellow-400 text-2xl">💰</span>
            <span className="text-xs text-yellow-400/70">Thu nhập</span>
          </div>
          <div className="text-3xl font-bold text-yellow-300">
            {playerStats.tokens}
          </div>
          <div className="text-xs text-yellow-400/80 mt-1">Tokens</div>
        </div>

        {/* Privacy Score */}
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-4 border border-blue-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-400 text-2xl">🛡️</span>
            <span className={`text-xs ${privacyStatus.color}`}>
              {privacyStatus.text}
            </span>
          </div>
          <div className="flex items-end gap-2">
            <div className="text-3xl font-bold text-blue-300">
              {playerStats.privacyScore}
            </div>
            <div className="text-sm text-blue-400/80 mb-1">/100</div>
          </div>
          {/* Privacy Bar */}
          <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${privacyStatus.bg} transition-all duration-500`}
              style={{ width: `${playerStats.privacyScore}%` }}
            />
          </div>
        </div>

        {/* Data Points */}
        <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-4 border border-purple-600/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-400 text-2xl">📈</span>
            <span className="text-xs text-purple-400/70">Dữ liệu</span>
          </div>
          <div className="text-3xl font-bold text-purple-300">
            {playerStats.totalDataPointsGenerated}
          </div>
          <div className="text-xs text-purple-400/80 mt-1">Data Points</div>
        </div>
      </div>

      {/* AI Profile Analysis */}
      <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <span>🤖</span>
          <span>Hồ sơ AI đã xây dựng về bạn</span>
        </h3>

        {/* Demographic Information (NEW) */}
        <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <div className="text-xs font-semibold text-red-400 mb-2">⚠️ Thông tin đã suy luận:</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <div className="text-gray-400">Độ tuổi</div>
              <div className={`font-bold mt-1 ${aiProfile.inferredAge !== 'unknown' ? 'text-red-400' : 'text-gray-600'}`}>
                {aiProfile.inferredAge === 'unknown' ? '?' : aiProfile.inferredAge}
              </div>
            </div>
            <div className="text-center border-l border-r border-gray-700">
              <div className="text-gray-400">Giới tính</div>
              <div className={`font-bold mt-1 ${aiProfile.inferredGender !== 'unknown' ? 'text-red-400' : 'text-gray-600'}`}>
                {aiProfile.inferredGender === 'unknown' ? '?' : aiProfile.inferredGender}
              </div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">Tính cách</div>
              <div className={`font-bold mt-1 ${aiProfile.inferredPersonality !== 'unknown' ? 'text-red-400' : 'text-gray-600'}`}>
                {aiProfile.inferredPersonality === 'unknown' ? '?' : 
                 aiProfile.inferredPersonality === 'Cautious' ? '🛡️ Cẩn thận' :
                 aiProfile.inferredPersonality === 'Risk-taker' ? '🎲 Liều lĩnh' : '⚖️ Cân bằng'}
              </div>
            </div>
          </div>
          {(aiProfile.inferredAge !== 'unknown' || aiProfile.inferredGender !== 'unknown' || aiProfile.inferredPersonality !== 'unknown') && (
            <div className="mt-2 text-xs text-red-400/80">
              💡 AI đã "đọc vị" bạn dựa trên hành vi tương tác!
            </div>
          )}
        </div>
        
        {/* Interests */}
        <div className="space-y-2">
          {Object.entries(aiProfile.interests).map(([key, value]) => {
            const labels = {
              shopping: '🛍️ Mua sắm',
              entertainment: '🎬 Giải trí',
              politics: '📰 Chính trị',
              social: '👥 Mạng xã hội'
            };
            
            const maxValue = Math.max(...Object.values(aiProfile.interests), 1);
            const percentage = (value / maxValue) * 100;

            return (
              <div key={key}>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{labels[key]}</span>
                  <span>{value}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Profile Value */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Giá trị hồ sơ:</span>
            <span className="text-sm font-bold text-cyan-400">
              {aiProfile.profileValue} tokens
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Giá mà nền tảng có thể bán dữ liệu của bạn
            {aiProfile.profileValue > 100 && (
              <span className="text-red-400"> (+{Math.floor((aiProfile.profileValue - 100) / 130 * 100)}% vì có thông tin nhân khẩu học)</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
