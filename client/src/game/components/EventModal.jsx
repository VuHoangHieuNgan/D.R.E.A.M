import { useGame } from '../contexts/GameContext';
import { ACTIONS } from '../gameLogic/constants';

export default function EventModal() {
  const { state, dispatch } = useGame();
  const { currentEvent } = state;

  if (!currentEvent) return null;

  const handleChoice = (choiceId) => {
    dispatch({
      type: ACTIONS.RESPOND_TO_EVENT,
      payload: {
        event: currentEvent,
        choice: choiceId
      }
    });
  };

  // Get event style based on type
  const getEventStyle = (type) => {
    switch (type) {
      case 'SELL_DATA':
      case 'TARGETED_AD':
        return {
          gradient: 'from-yellow-600 to-orange-600',
          icon: '💰',
          borderColor: 'border-yellow-500'
        };
      case 'CONTENT_WARNING':
      case 'SUSPICIOUS_ACTIVITY':
        return {
          gradient: 'from-red-600 to-pink-600',
          icon: '⚠️',
          borderColor: 'border-red-500'
        };
      case 'DATA_BREACH':
        return {
          gradient: 'from-red-700 to-red-900',
          icon: '🚨',
          borderColor: 'border-red-600'
        };
      case 'LUCKY_BONUS':
        return {
          gradient: 'from-green-600 to-emerald-600',
          icon: '🎁',
          borderColor: 'border-green-500'
        };
      default:
        return {
          gradient: 'from-blue-600 to-purple-600',
          icon: '📢',
          borderColor: 'border-blue-500'
        };
    }
  };

  const eventStyle = getEventStyle(currentEvent.type);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-2xl w-full">
        {/* Event Card */}
        <div className={`bg-gradient-to-br ${eventStyle.gradient} rounded-2xl p-1 shadow-2xl animate-slideUp`}>
          <div className="bg-gray-900 rounded-xl p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{eventStyle.icon}</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {currentEvent.title}
              </h2>
              <div className={`inline-block px-4 py-1 border ${eventStyle.borderColor} rounded-full text-sm text-gray-300 mb-4`}>
                {currentEvent.type === 'SELL_DATA' && '🤖 AI Quảng Cáo'}
                {currentEvent.type === 'TARGETED_AD' && '🤖 AI Quảng Cáo'}
                {currentEvent.type === 'CONTENT_WARNING' && '🤖 AI Giám Sát'}
                {currentEvent.type === 'SUSPICIOUS_ACTIVITY' && '🤖 AI Giám Sát'}
                {(currentEvent.type === 'DATA_BREACH' || currentEvent.type === 'LUCKY_BONUS') && '🎲 Sự kiện ngẫu nhiên'}
              </div>
            </div>

            {/* Content */}
            <div className="bg-black/40 rounded-lg p-6 mb-6">
              <p className="text-gray-200 text-lg leading-relaxed">
                {currentEvent.content}
              </p>
              
              {/* Additional Info for Sell Data */}
              {currentEvent.type === 'SELL_DATA' && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Giá trị thực:</p>
                      <p className="text-xl font-bold text-green-400">
                        {currentEvent.profileValue} tokens
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Đề nghị trả:</p>
                      <p className="text-xl font-bold text-yellow-400">
                        {currentEvent.offerPrice} tokens
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-red-400 mt-2">
                    ⚠️ Nền tảng sẽ kiếm lợi nhuận {currentEvent.profileValue - currentEvent.offerPrice} tokens từ bạn
                  </p>
                </div>
              )}
            </div>

            {/* Choices */}
            <div className="space-y-3">
              {currentEvent.choices.map((choice) => {
                const isPositive = choice.id === 'accept' || choice.id === 'watch' || choice.id === 'claim' || choice.id === 'verify';
                const isNegative = choice.id === 'keep' || choice.id === 'decline';
                const isNeutral = choice.id === 'skip' || choice.id === 'self_delete' || choice.id === 'ignore' || choice.id === 'acknowledge';

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-102 hover:shadow-xl
                      ${isPositive && 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white'}
                      ${isNegative && 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white'}
                      ${isNeutral && 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white'}
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">{choice.icon}</span>
                      <span>{choice.label}</span>
                    </span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Warning for single choice events */}
            {currentEvent.choices.length === 1 && (
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Nhấn để tiếp tục...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
