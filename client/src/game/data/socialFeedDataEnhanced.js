// Social Feed Data for 90s Glass Box Game
const SOCIAL_FEED_DATA = [
  {
    id: 'post_1',
    author: 'Minh Anh Travel',
    avatar: '🌴',
    content: 'Vừa về từ chuyến du lịch Đà Lạt tuyệt vời! Ai muốn biết địa điểm check-in đẹp không?',
    image: '🏞️',
    likes: 234,
    comments: 45,
    shares: 12,
    category: 'travel',
    timestamp: '2 giờ trước'
  },
  {
    id: 'post_2',
    author: 'Food Hunter',
    avatar: '🍜',
    content: 'Quán phở này ngon không tưởng! Nước dùng đậm đà, thịt mềm tan. Giá chỉ 45k thôi!',
    image: '🍲',
    likes: 567,
    comments: 89,
    shares: 34,
    category: 'food',
    timestamp: '4 giờ trước'
  },
  {
    id: 'post_3',
    author: 'Tech Review VN',
    avatar: '💻',
    content: 'iPhone 15 Pro Max giảm giá sốc! Chỉ còn 25 triệu. Mua ngay kẻo lỡ!',
    image: '📱',
    likes: 1203,
    comments: 234,
    shares: 156,
    category: 'tech',
    timestamp: '1 ngày trước'
  },
  {
    id: 'post_4',
    author: 'Meme Vui',
    avatar: '😂',
    content: 'Khi bạn hẹn gặp lúc 7h nhưng 6h50 vẫn đang nằm trên giường... 🤣',
    image: '🛌',
    likes: 3456,
    comments: 567,
    shares: 890,
    category: 'meme',
    timestamp: '3 giờ trước'
  },
  {
    id: 'post_5',
    author: 'Tin Tức 24h',
    avatar: '📰',
    content: 'Chính phủ công bố chính sách mới về thuế thu nhập cá nhân. Bạn nghĩ sao về điều này?',
    image: '🏛️',
    likes: 789,
    comments: 456,
    shares: 234,
    category: 'politics',
    timestamp: '5 giờ trước'
  }
];

// Helper function to generate comments for posts
const generateDefaultComments = (post) => {
  const commentsByCategory = {
    travel: [
      { author: 'Travel Bug', text: 'Nhìn đẹp quá! Mình cũng muốn đi nơi này!' },
      { author: 'Wanderlust', text: 'Chi phí bao nhiêu vậy bạn? Share kinh nghiệm đi!' },
      { author: 'Explorer', text: 'Địa điểm này có gì đặc biệt không? Kể thêm đi!' }
    ],
    food: [
      { author: 'FoodLover99', text: 'Nhìn ngon quá! Cho mình xin địa chỉ với!' },
      { author: 'Người Sành Ăn', text: 'Món này giá bao nhiêu vậy bạn?' },
      { author: 'Hungry Always', text: 'Ăn rồi có no không? Mình đang đói nè 😂' }
    ],
    tech: [
      { author: 'Tech Geek', text: 'Thông tin hữu ích! Thanks for sharing!' },
      { author: 'Gadget Fan', text: 'Bạn dùng lâu chưa? Review thêm đi!' },
      { author: 'Code Ninja', text: 'Có thật sự đáng đầu tư không bạn?' }
    ],
    meme: [
      { author: 'Laugh Out Loud', text: 'Hahahaha relatable quá! 🤣' },
      { author: 'Meme Lover', text: 'Tag bạn bè vào đây! Đúng kiểu!' },
      { author: 'Funny Bone', text: 'Tại sao gọi tên mình vậy? 😅' }
    ],
    politics: [
      { author: 'Công Dân', text: 'Vấn đề quan trọng! Cần thảo luận nhiều hơn.' },
      { author: 'Người Quan Sát', text: 'Mình có quan điểm khác. Cần xem xét nhiều góc độ.' },
      { author: 'Critical Thinker', text: 'Nguồn tin này có đáng tin cậy không bạn?' }
    ]
  };

  const categoryComments = commentsByCategory[post.category] || commentsByCategory.tech;
  
  return categoryComments.map((comment, index) => ({
    id: `${post.id}_c${index + 1}`,
    author: comment.author,
    text: comment.text
  }));
};

// Enhance all posts with comments_list
export const SOCIAL_FEED_DATA_WITH_COMMENTS = SOCIAL_FEED_DATA.map(post => ({
  ...post,
  comments_list: post.comments_list || generateDefaultComments(post)
}));

