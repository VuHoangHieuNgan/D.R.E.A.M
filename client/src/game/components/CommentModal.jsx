import { useState } from 'react';
import PostActionButtons from './PostActionButtons';

export default function CommentModal({ postData, onClose, onSubmitComment, onLike, onShare, postInteractions }) {
  const [commentText, setCommentText] = useState('');
  const [localInteractions, setLocalInteractions] = useState(postInteractions || {});

  const handleSubmit = () => {
    if (commentText.trim()) {
      onSubmitComment(commentText);
      setCommentText('');
    }
  };

  const handleLikeClick = (emoji) => {
    setLocalInteractions(prev => ({
      ...prev,
      reaction: prev.reaction === emoji ? null : emoji
    }));
    if (onLike) {
      onLike(emoji);
    }
  };

  const handleShareClick = () => {
    setLocalInteractions(prev => ({
      ...prev,
      share: true
    }));
    if (onShare) {
      onShare();
    }
  };

  const handleCommentClick = () => {
    document.querySelector('.comment-input-field')?.focus();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#242526] rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Facebook style */}
        <div className="relative p-4 border-b border-[#3e4042]">
          <h2 className="text-xl font-bold text-white text-center">Bài viết của {postData.author}</h2>
          <button
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-400 hover:text-white text-3xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#3a3b3c] transition-colors"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Post Content */}
          <div className="p-4 border-b border-[#3e4042]">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                {postData.author[0]}
              </div>
              <div>
                <p className="font-semibold text-white">{postData.author}</p>
                <p className="text-xs text-gray-400">{postData.time}</p>
              </div>
            </div>
            <p className="text-white mb-3">{postData.content}</p>
            {postData.image && (
              <img src={postData.image} alt="Post" className="w-full rounded-lg bg-black" />
            )}
            
            {/* Stats - Facebook style */}
            <div className="flex items-center justify-between mt-3 pt-2 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">👍</span>
                  <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs">❤️</span>
                  <span className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs">😂</span>
                </div>
                <span className="ml-1">{postData.likes}</span>
              </div>
              <div className="flex gap-3">
                <span>{postData.comments + (postData.comments_list?.filter(c => c.author === 'Bạn').length || 0)} bình luận</span>
                <span>{postData.shares} lượt chia sẻ</span>
              </div>
            </div>
          </div>

          {/* Action Buttons - Facebook style */}
          <PostActionButtons
            postInteractions={localInteractions}
            onLike={handleLikeClick}
            onComment={handleCommentClick}
            onShare={handleShareClick}
            showReactionsPopup={true}
          />

          {/* Sort Options - Facebook style */}
          <div className="px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Phù hợp nhất</span>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Comments List - Facebook style */}
          <div className="px-4 pb-4 space-y-4">
            {postData.comments_list && postData.comments_list.length > 0 ? (
              postData.comments_list.map((comment) => (
                <div key={comment.id} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {comment.author[0]}
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#3a3b3c] rounded-2xl px-3 py-2 inline-block">
                      <p className="font-semibold text-white text-sm">{comment.author}</p>
                      <p className="text-white text-sm">{comment.text}</p>
                    </div>
                    {/* Comment actions */}
                    <div className="flex items-center gap-3 mt-1 ml-3 text-xs text-gray-400 font-semibold">
                      <button className="hover:underline">Thích</button>
                      <button className="hover:underline">Trả lời</button>
                      <span>2 giờ</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">Chưa có bình luận nào</p>
            )}
          </div>
        </div>

        {/* Comment Input - Fixed at bottom, Facebook style */}
        <div className="p-4 border-t border-[#3e4042] bg-[#242526]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              B
            </div>
            <div className="flex-1 flex items-center gap-2 bg-[#3a3b3c] rounded-full px-3 py-1">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Viết bình luận..."
                className="flex-1 bg-transparent text-white text-sm focus:outline-none py-1.5 comment-input-field"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 flex items-center justify-center hover:bg-[#4a4b4c] rounded-full transition-colors">
                  <span className="text-lg">😊</span>
                </button>
                <button className="w-7 h-7 flex items-center justify-center hover:bg-[#4a4b4c] rounded-full transition-colors">
                  <span className="text-lg">📷</span>
                </button>
                <button className="w-7 h-7 flex items-center justify-center hover:bg-[#4a4b4c] rounded-full transition-colors">
                  <span className="text-lg">🎁</span>
                </button>
              </div>
            </div>
            {commentText.trim() && (
              <button
                onClick={handleSubmit}
                className="text-blue-500 font-semibold text-sm hover:text-blue-400 transition-colors"
              >
                Gửi
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
