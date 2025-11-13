import { useGame } from '../contexts/GameContext';
import { ACTIONS, INTERACTION_TYPES } from '../gameLogic/constants';

export default function Feed() {
  const { state, dispatch } = useGame();
  const { currentFeed } = state;

  const handleInteraction = (post, interactionType) => {
    dispatch({
      type: ACTIONS.INTERACT_WITH_POST,
      payload: { post, interactionType }
    });
  };

  if (!currentFeed || currentFeed.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>Đang tải bảng tin...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">📱 Bảng tin của bạn</h2>
        <p className="text-gray-400">AI đã chọn những nội dung này dành riêng cho bạn</p>
      </div>

      {currentFeed.map((post) => (
        <div 
          key={post.id} 
          className={`bg-gradient-to-br rounded-2xl p-6 shadow-xl border-2 transition-all duration-300
            ${post.isTrap 
              ? 'from-red-900/20 to-orange-900/20 border-red-500/30 hover:border-red-400/50' 
              : 'from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600'
            }`}
        >
          {/* Post Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-300">{post.content}</p>
            </div>
            {post.isTrap && (
              <span className="ml-4 px-3 py-1 bg-red-500/20 border border-red-400 rounded-full text-xs text-red-300">
                ⚠️ Giá trị cao
              </span>
            )}
          </div>

          {/* Post Metadata */}
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
            <span className="px-2 py-1 bg-gray-700/50 rounded">
              {post.category}
            </span>
            <span>• Được đề xuất bởi AI</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {post.availableActions.map(actionId => {
              const action = INTERACTION_TYPES[actionId.toUpperCase()];
              if (!action) return null;

              const isSkip = actionId === 'skip';
              const isSurvey = actionId === 'survey';

              return (
                <button
                  key={actionId}
                  onClick={() => handleInteraction(post, actionId)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${isSkip 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : isSurvey
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white'
                    }
                    ${!isSkip && 'hover:shadow-xl hover:scale-105'}
                  `}
                >
                  <span className="text-lg">{action.icon}</span>
                  <span>{action.label}</span>
                  {!isSkip && (
                    <span className="ml-1 px-2 py-0.5 bg-black/30 rounded text-xs">
                      +{action.tokens} 💰
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Impact Preview (for non-skip actions) */}
          {post.isTrap && (
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-xs text-yellow-300">
                ⚠️ Lưu ý: Tương tác này có thể thu thập nhiều dữ liệu cá nhân của bạn
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Hint */}
      <div className="text-center pt-6">
        <p className="text-sm text-gray-500">
          Chọn hành động để tiếp tục...
        </p>
      </div>
    </div>
  );
}
