import { useGame } from '../contexts/GameContext';
import { getPlayerRank } from '../gameLogic/leaderboardSystem';

export default function Leaderboard() {
  const { state } = useGame();
  const { leaderboard, playerDCS } = state;

  const playerRank = getPlayerRank(leaderboard);

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-2xl border border-indigo-700">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">🏆 Bảng Xếp Hạng</h2>
        <p className="text-purple-300">Điểm Công Dân Số (DCS)</p>
      </div>

      {/* Player's Rank Highlight */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-yellow-300">Thứ hạng của bạn</p>
            <p className="text-3xl font-bold text-yellow-400">#{playerRank}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-yellow-300">DCS hiện tại</p>
            <p className="text-3xl font-bold text-yellow-400">{playerDCS.toFixed(1)}</p>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {leaderboard.map((entry, index) => {
          const isPlayer = entry.id === 'player';
          const rank = index + 1;
          
          // Medal for top 3
          const getMedal = (rank) => {
            if (rank === 1) return '🥇';
            if (rank === 2) return '🥈';
            if (rank === 3) return '🥉';
            return `#${rank}`;
          };

          return (
            <div
              key={entry.id}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                ${isPlayer 
                  ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 border-2 border-blue-400 shadow-lg scale-102' 
                  : 'bg-white/5 hover:bg-white/10'
                }
              `}
            >
              {/* Rank */}
              <div className="w-12 text-center">
                <span className="text-xl font-bold text-white">
                  {getMedal(rank)}
                </span>
              </div>

              {/* Player Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`font-semibold truncate ${isPlayer ? 'text-blue-300' : 'text-white'}`}>
                    {entry.name}
                  </p>
                  {entry.isBot && (
                    <span className="px-2 py-0.5 bg-gray-700 rounded text-xs text-gray-400">
                      BOT
                    </span>
                  )}
                </div>
                <div className="flex gap-4 mt-1 text-xs text-gray-400">
                  <span>💰 {entry.tokens}</span>
                  <span>🛡️ {entry.privacyScore}</span>
                </div>
              </div>

              {/* DCS Score */}
              <div className="text-right">
                <p className={`text-2xl font-bold ${isPlayer ? 'text-blue-300' : 'text-purple-300'}`}>
                  {entry.dcs.toFixed(1)}
                </p>
                <p className="text-xs text-gray-400">DCS</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* DCS Formula Explanation */}
      <div className="mt-6 p-4 bg-black/30 rounded-xl border border-gray-700">
        <p className="text-xs text-gray-400 mb-2">📊 Công thức DCS:</p>
        <div className="text-xs text-gray-300 space-y-1">
          <p>• Tự chủ (Privacy) × 50%</p>
          <p>• Hiệu quả (Tokens/Platform Revenue) × 35%</p>
          <p>• Tác động (Participation) × 15%</p>
        </div>
      </div>
    </div>
  );
}
