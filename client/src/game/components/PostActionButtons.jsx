import { useRef, useState } from 'react';

const REACTION_LABELS = {
  '👍': 'Thích',
  '❤️': 'Yêu thích',
  '😆': 'Haha',
  '😮': 'Wow',
  '😢': 'Buồn',
  '😡': 'Phẫn nộ'
};

export default function PostActionButtons({ 
  postInteractions = {}, 
  onLike, 
  onComment, 
  onShare,
  showReactionsPopup = true 
}) {
  const [showReactions, setShowReactions] = useState(false);
  const [hoveredEmoji, setHoveredEmoji] = useState(null);
  const hoverTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const handleMouseEnter = () => {
    if (!showReactionsPopup) return;
    
    // Clear any hide timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    hoverTimerRef.current = setTimeout(() => {
      setShowReactions(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    // Set a delay before hiding to allow user to move to popup
    hideTimerRef.current = setTimeout(() => {
      setShowReactions(false);
    }, 300);
  };

  const handleReactionsMouseEnter = () => {
    // Clear hide timer when entering popup
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setShowReactions(true);
  };

  const handleReactionsMouseLeave = () => {
    setShowReactions(false);
  };

  const handleLikeClick = (emoji = '👍') => {
    setShowReactions(false);
    if (onLike) {
      onLike(emoji);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-1 px-4 py-2 border-t border-[#3e4042] relative">
      {/* Reactions Popup */}
      {showReactions && showReactionsPopup && (
        <div 
          className="absolute bottom-full left-4 mb-2 bg-[#3a3b3c] border-2 border-[#4a4b4c] rounded-full px-3 py-2 flex gap-2 shadow-2xl z-10 animate-[slideUp_0.3s_ease-out] origin-bottom"
          onMouseEnter={handleReactionsMouseEnter}
          onMouseLeave={handleReactionsMouseLeave}
        >
          {['👍', '❤️', '😆', '😮', '😢', '😡'].map((emoji) => (
            <div key={emoji} className="relative">
              <button
                onMouseEnter={() => setHoveredEmoji(emoji)}
                onMouseLeave={() => setHoveredEmoji(null)}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLikeClick(emoji);
                }}
                className="text-3xl hover:scale-125 transition-transform duration-150 cursor-pointer"
              >
                {emoji}
              </button>
              {/* Tooltip */}
              {hoveredEmoji === emoji && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
                  {REACTION_LABELS[emoji]}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Like Button */}
      <button 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleLikeClick('👍')}
        className={`flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
          postInteractions.reaction
            ? 'text-blue-500 hover:bg-[#3a3b3c]'
            : 'text-gray-400 hover:bg-[#3a3b3c]'
        }`}
      >
        <span className="text-xl">{postInteractions.reaction || '👍'}</span>
        <span className="font-semibold text-sm">Thích</span>
      </button>

      {/* Comment Button */}
      <button 
        onClick={onComment}
        className={`flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
          postInteractions.comment
            ? 'text-green-500 hover:bg-[#3a3b3c]'
            : 'text-gray-400 hover:bg-[#3a3b3c]'
        }`}
      >
        <span className="text-xl">💬</span>
        <span className="font-semibold text-sm">Bình luận</span>
      </button>

      {/* Share Button */}
      <button 
        onClick={onShare}
        className={`flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
          postInteractions.share
            ? 'text-purple-500 hover:bg-[#3a3b3c]'
            : 'text-gray-400 hover:bg-[#3a3b3c]'
        }`}
      >
        <span className="text-xl">🔄</span>
        <span className="font-semibold text-sm">Chia sẻ</span>
      </button>
    </div>
  );
}
