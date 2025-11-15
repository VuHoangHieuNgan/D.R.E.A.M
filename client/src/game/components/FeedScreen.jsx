import { useState, useEffect, useRef, useCallback } from 'react';
import { useGlassBoxGame } from '../contexts/GlassBoxGameContext';
import { SOCIAL_FEED_DATA_WITH_COMMENTS } from '../data/socialFeedDataEnhanced';
import CommentModal from './CommentModal';
import PostActionButtons from './PostActionButtons';

export default function FeedScreen() {
  const { addInteraction, endGame, gameState } = useGlassBoxGame();
  const { permissions } = gameState;
  const [timeLeft, setTimeLeft] = useState(90);
  const [feed, setFeed] = useState([]);
  const [visibilityMap, setVisibilityMap] = useState({});
  const [postInteractions, setPostInteractions] = useState({}); // Track user interactions per post
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const observerRef = useRef(null);
  const visibilityStartTimeRef = useRef({});

  // Shuffle and set feed on mount
  useEffect(() => {
    const shuffled = [...SOCIAL_FEED_DATA_WITH_COMMENTS].sort(() => Math.random() - 0.5);
    setFeed(shuffled);
  }, []);

  // Calculate dwell time when post leaves viewport
  const calculateDwellTime = useCallback((postId, category) => {
    // Check if trackDwellTime permission is granted
    if (!permissions.trackDwellTime) {
      return; // Don't track dwell time if permission denied
    }

    const startTime = visibilityStartTimeRef.current[postId];
    if (startTime) {
      const dwellTimeSeconds = (Date.now() - startTime) / 1000;
      
      // Only record if user spent more than 0.5 seconds
      if (dwellTimeSeconds > 0.5) {
        addInteraction({
          postId,
          category,
          time_spent_seconds: Number(dwellTimeSeconds.toFixed(2)),
          action: 'View'
        });
      }
      
      delete visibilityStartTimeRef.current[postId];
    }
  }, [addInteraction, permissions.trackDwellTime]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      // Calculate dwell time for all posts still visible before ending
      Object.keys(visibilityStartTimeRef.current).forEach(postId => {
        const post = feed.find(p => p.id === postId);
        if (post) {
          calculateDwellTime(postId, post.category);
        }
      });
      endGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, endGame, calculateDwellTime, feed]);

  // Set up Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const postId = entry.target.getAttribute('data-post-id');
          const category = entry.target.getAttribute('data-category');

          if (entry.isIntersecting) {
            // Post entered viewport
            visibilityStartTimeRef.current[postId] = Date.now();
            setVisibilityMap(prev => ({ ...prev, [postId]: true }));
          } else {
            // Post left viewport
            if (visibilityMap[postId]) {
              calculateDwellTime(postId, category);
              setVisibilityMap(prev => ({ ...prev, [postId]: false }));
            }
          }
        });
      },
      {
        threshold: 0.5, // Post is considered visible when 50% is in viewport
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [calculateDwellTime, visibilityMap]);

  // Observe each post
  useEffect(() => {
    const posts = document.querySelectorAll('[data-post-id]');
    posts.forEach(post => {
      if (observerRef.current) {
        observerRef.current.observe(post);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [feed]);

  const handleAction = (postId, category, action) => {
    // For Comment action, open modal instead of tracking directly
    if (action === 'Comment') {
      const post = feed.find(p => p.id === postId);
      setSelectedPost(post);
      setIsCommentModalOpen(true);
      return;
    }

    const startTime = visibilityStartTimeRef.current[postId];
    const timeSpent = startTime ? (Date.now() - startTime) / 1000 : 0;

    // Update UI state
    setPostInteractions(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [action.toLowerCase()]: true
      }
    }));

    // Track interaction
    addInteraction({
      postId,
      category,
      time_spent_seconds: Number(timeSpent.toFixed(2)),
      action
    });
  };

  const handleNewComment = (commentText) => {
    if (!selectedPost) return;

    const startTime = visibilityStartTimeRef.current[selectedPost.id];
    const timeSpent = startTime ? (Date.now() - startTime) / 1000 : 0;

    // Update UI - add comment to post
    setFeed(prev => prev.map(post => {
      if (post.id === selectedPost.id) {
        return {
          ...post,
          comments_list: [
            ...post.comments_list,
            {
              id: `user_${Date.now()}`,
              author: 'Bạn',
              text: commentText
            }
          ]
        };
      }
      return post;
    }));

    // Update selected post state
    setSelectedPost(prev => ({
      ...prev,
      comments_list: [
        ...prev.comments_list,
        {
          id: `user_${Date.now()}`,
          author: 'Bạn',
          text: commentText
        }
      ]
    }));

    // Mark as commented in UI
    setPostInteractions(prev => ({
      ...prev,
      [selectedPost.id]: {
        ...prev[selectedPost.id],
        comment: true
      }
    }));

    // Track interaction with comment text
    if (permissions.analyzeComments) {
      addInteraction({
        postId: selectedPost.id,
        category: selectedPost.category,
        time_spent_seconds: Number(timeSpent.toFixed(2)),
        action: 'Comment',
        comment_text: commentText  // Important: Include comment text for AI analysis
      });
    }
  };

  const handleLike = (postId, category, reaction = 'Like') => {
    const startTime = visibilityStartTimeRef.current[postId];
    const timeSpent = startTime ? (Date.now() - startTime) / 1000 : 0;
    
    const currentReaction = postInteractions[postId]?.reaction;
    
    // Toggle like/unlike
    if (currentReaction === reaction) {
      // Unlike if clicking the same reaction
      setPostInteractions(prev => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          reaction: null
        }
      }));
    } else {
      // Like with new reaction
      setPostInteractions(prev => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          reaction: reaction
        }
      }));

      // Check if personalizeAds permission is granted before tracking
      if (permissions.personalizeAds) {
        // Track interaction
        addInteraction({
          postId,
          category,
          time_spent_seconds: Number(timeSpent.toFixed(2)),
          action: reaction
        });
      }
    }
    
    // Hide reactions menu after selection
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Game Header with Mini Game - Removed as we now have global NavBar */}
      
      {/* Fixed Timer Bar */}
      <div className="fixed top-[80px] left-0 right-0 bg-gray-800/95 backdrop-blur border-b border-gray-700 z-40 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-2 flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-400">📱 Bảng tin của bạn</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                // Calculate dwell time for all visible posts before ending
                Object.keys(visibilityStartTimeRef.current).forEach(postId => {
                  const post = feed.find(p => p.id === postId);
                  if (post) {
                    calculateDwellTime(postId, post.category);
                  }
                });
                endGame();
              }}
              className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-3 py-1 rounded transition-colors"
            >
              ⏩ Kết thúc sớm
            </button>
            <div className={`font-mono text-base font-bold px-3 py-1 rounded-lg ${
              timeLeft <= 10 
                ? 'bg-red-600 text-white animate-pulse' 
                : 'bg-gray-700 text-green-400'
            }`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="pt-36 pb-8">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          {feed.map((post) => (
            <div
              key={post.id}
              data-post-id={post.id}
              data-category={post.category}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white">{post.author}</h3>
                  <p className="text-xs text-gray-400">
                    {post.category === 'travel' && '✈️ Du lịch'}
                    {post.category === 'food' && '🍜 Ẩm thực'}
                    {post.category === 'tech' && '💻 Công nghệ'}
                    {post.category === 'meme' && '😂 Giải trí'}
                    {post.category === 'politics' && '🏛️ Xã hội'}
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-200 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.image_desc}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              )}

              {/* Post Stats */}
              <div className="px-4 py-2 flex gap-6 text-sm text-gray-400 border-t border-gray-700">
                <span>
                  {postInteractions[post.id]?.reaction && (
                    <span className="mr-1">{postInteractions[post.id].reaction}</span>
                  )}
                  {(post.likes + (postInteractions[post.id]?.reaction ? 1 : 0)).toLocaleString()} lượt thích
                </span>
                <span>💬 {post.comments + (postInteractions[post.id]?.comment ? 1 : 0)} bình luận</span>
              </div>

              {/* Action Buttons */}
              <PostActionButtons
                postInteractions={postInteractions[post.id] || {}}
                onLike={(emoji) => handleLike(post.id, post.category, emoji)}
                onComment={() => handleAction(post.id, post.category, 'Comment')}
                onShare={() => handleAction(post.id, post.category, 'Share')}
                showReactionsPopup={true}
              />
            </div>
          ))}

          {/* End of Feed Message */}
          <div className="text-center py-8 text-gray-500">
            <p>🎉 Bạn đã xem hết bài viết!</p>
            <p className="text-sm mt-2">Tiếp tục cuộn hoặc chờ hết giờ...</p>
          </div>
        </div>
      </div>

      {/* Comment Modal */}
      {isCommentModalOpen && selectedPost && (
        <CommentModal
          postData={selectedPost}
          onClose={() => setIsCommentModalOpen(false)}
          onSubmitComment={handleNewComment}
          onLike={(emoji) => handleLike(selectedPost.id, selectedPost.category, emoji)}
          onShare={() => handleAction(selectedPost.id, selectedPost.category, 'Share')}
          postInteractions={postInteractions[selectedPost.id] || {}}
        />
      )}
    </div>
  );
}
