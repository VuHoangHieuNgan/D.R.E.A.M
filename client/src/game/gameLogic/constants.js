// ============================================
// GAME CONSTANTS
// ============================================

// Phase constants
export const PHASES = {
  ONBOARDING: 'ONBOARDING',
  FEED: 'FEED',
  EVENT: 'EVENT',
  SUMMARY: 'SUMMARY',
  ENDGAME: 'ENDGAME'
};

// Action types for reducer
export const ACTIONS = {
  // Onboarding
  AGREE_ALL_TERMS: 'AGREE_ALL_TERMS',
  CUSTOMIZE_TERMS: 'CUSTOMIZE_TERMS',
  
  // Feed interactions
  INTERACT_WITH_POST: 'INTERACT_WITH_POST',
  
  // Event responses
  RESPOND_TO_EVENT: 'RESPOND_TO_EVENT',
  
  // Game flow
  START_DAY: 'START_DAY',
  END_DAY: 'END_DAY',
  NEXT_PHASE: 'NEXT_PHASE',
  
  // AI generated
  SET_FEED: 'SET_FEED',
  SET_EVENT: 'SET_EVENT',
  
  // AI Profile Analysis (NEW - Bước 1: Analyze & Infer)
  UPDATE_AI_PROFILE: 'UPDATE_AI_PROFILE',
  ADD_INTERACTION_HISTORY: 'ADD_INTERACTION_HISTORY',
  
  // Leaderboard
  UPDATE_LEADERBOARD: 'UPDATE_LEADERBOARD',
};

// Interaction types and their effects
export const INTERACTION_TYPES = {
  LIKE: {
    id: 'like',
    label: 'Thích',
    icon: '👍',
    dataPoints: 1,
    tokens: 1,
    platformRevenue: 5,
    privacyImpact: 0
  },
  COMMENT: {
    id: 'comment',
    label: 'Bình luận',
    icon: '💬',
    dataPoints: 3,
    tokens: 2,
    platformRevenue: 15,
    privacyImpact: -2
  },
  SHARE: {
    id: 'share',
    label: 'Chia sẻ',
    icon: '🔄',
    dataPoints: 5,
    tokens: 3,
    platformRevenue: 25,
    privacyImpact: -5
  },
  SURVEY: {
    id: 'survey',
    label: 'Làm khảo sát',
    icon: '📋',
    dataPoints: 10,
    tokens: 5,
    platformRevenue: 50,
    privacyImpact: -10
  },
  SKIP: {
    id: 'skip',
    label: 'Bỏ qua',
    icon: '⏭️',
    dataPoints: 0,
    tokens: 0,
    platformRevenue: 0,
    privacyImpact: 0
  }
};

// Interest categories
export const INTERESTS = {
  SHOPPING: 'shopping',
  ENTERTAINMENT: 'entertainment',
  POLITICS: 'politics',
  SOCIAL: 'social'
};

// Post templates pool
export const POST_TEMPLATES = [
  // Shopping posts
  {
    id: 'shop_1',
    category: INTERESTS.SHOPPING,
    title: '🛍️ Sale 50% - Mua ngay!',
    content: 'Giảm giá đặc biệt chỉ hôm nay. Click để xem sản phẩm yêu thích của bạn!',
    isTrap: false,
    availableActions: ['like', 'comment', 'share', 'skip']
  },
  {
    id: 'shop_2',
    category: INTERESTS.SHOPPING,
    title: '📊 Khảo sát thói quen mua sắm',
    content: 'Trả lời 10 câu hỏi về sở thích mua sắm của bạn để nhận voucher 50 tokens!',
    isTrap: true,
    availableActions: ['survey', 'skip']
  },
  
  // Entertainment posts
  {
    id: 'ent_1',
    category: INTERESTS.ENTERTAINMENT,
    title: '🎬 Video hot trong tuần',
    content: 'Top 10 video được xem nhiều nhất. Bạn đã xem chưa?',
    isTrap: false,
    availableActions: ['like', 'comment', 'share', 'skip']
  },
  {
    id: 'ent_2',
    category: INTERESTS.ENTERTAINMENT,
    title: '🎵 Playlist dành riêng cho bạn',
    content: 'Dựa trên lịch sử nghe nhạc của bạn, đây là những bài hát chúng tôi nghĩ bạn sẽ thích.',
    isTrap: false,
    availableActions: ['like', 'comment', 'skip']
  },
  
  // Politics posts
  {
    id: 'pol_1',
    category: INTERESTS.POLITICS,
    title: '📰 Tin tức chính trị mới nhất',
    content: 'Cập nhật tình hình chính trị trong nước và quốc tế.',
    isTrap: false,
    availableActions: ['like', 'comment', 'share', 'skip']
  },
  {
    id: 'pol_2',
    category: INTERESTS.POLITICS,
    title: '🗳️ Khảo sát quan điểm chính trị',
    content: 'Chia sẻ quan điểm của bạn về các vấn đề xã hội đang nóng. Hoàn toàn ẩn danh!',
    isTrap: true,
    availableActions: ['survey', 'skip']
  },
  
  // Social posts
  {
    id: 'soc_1',
    category: INTERESTS.SOCIAL,
    title: '👥 Bạn bè đang làm gì?',
    content: '5 người bạn của bạn vừa đăng status mới. Xem ngay!',
    isTrap: false,
    availableActions: ['like', 'comment', 'skip']
  },
  {
    id: 'soc_2',
    category: INTERESTS.SOCIAL,
    title: '💝 Gợi ý kết bạn',
    content: 'Chúng tôi tìm thấy 10 người có thể bạn biết. Kết bạn ngay?',
    isTrap: false,
    availableActions: ['like', 'share', 'skip']
  },
  {
    id: 'soc_3',
    category: INTERESTS.SOCIAL,
    title: '📍 Cập nhật vị trí của bạn',
    content: 'Cho bạn bè biết bạn đang ở đâu để dễ dàng hẹn gặp!',
    isTrap: true,
    availableActions: ['share', 'skip']
  }
];

// Event templates
export const EVENT_TEMPLATES = {
  // Advertiser AI events
  SELL_DATA: {
    type: 'SELL_DATA',
    title: '💰 Đề nghị mua dữ liệu',
    getContent: (profileValue, offerPrice) => 
      `Hồ sơ của bạn được định giá ${profileValue} tokens. Một đối tác quảng cáo muốn mua quyền truy cập với giá ${offerPrice} tokens. Bạn có đồng ý không?`,
    choices: [
      { id: 'accept', label: 'Chấp nhận', icon: '✅' },
      { id: 'decline', label: 'Từ chối', icon: '❌' }
    ]
  },
  
  TARGETED_AD: {
    type: 'TARGETED_AD',
    title: '🎯 Quảng cáo được nhắm mục tiêu',
    content: 'Một quảng cáo được cá nhân hóa dành riêng cho bạn xuất hiện. Xem quảng cáo này sẽ tạo ra nhiều dữ liệu hơn nhưng bạn nhận được 3 tokens.',
    choices: [
      { id: 'watch', label: 'Xem quảng cáo', icon: '👁️' },
      { id: 'skip', label: 'Bỏ qua', icon: '⏭️' }
    ]
  },
  
  // Sentinel AI events
  CONTENT_WARNING: {
    type: 'CONTENT_WARNING',
    title: '⚠️ Cảnh báo nội dung',
    getContent: (keyword) => 
      `Bình luận của bạn chứa từ khóa nhạy cảm "${keyword}". Hệ thống có thể xóa nội dung này. Bạn muốn tự xóa để tránh bị phạt hay để hệ thống xử lý?`,
    choices: [
      { id: 'self_delete', label: 'Tự xóa', icon: '🗑️' },
      { id: 'keep', label: 'Giữ nguyên', icon: '✊' }
    ]
  },
  
  SUSPICIOUS_ACTIVITY: {
    type: 'SUSPICIOUS_ACTIVITY',
    title: '🔍 Hoạt động đáng ngờ',
    content: 'Hệ thống phát hiện hoạt động bất thường từ tài khoản của bạn. Để tiếp tục, vui lòng xác minh danh tính bằng cách cung cấp thêm thông tin.',
    choices: [
      { id: 'verify', label: 'Xác minh', icon: '✔️' },
      { id: 'ignore', label: 'Bỏ qua', icon: '🚫' }
    ]
  },
  
  // Random events
  DATA_BREACH: {
    type: 'DATA_BREACH',
    title: '🚨 Rò rỉ dữ liệu!',
    content: 'Nền tảng bị tấn công. Một phần dữ liệu của bạn có thể đã bị rò rỉ. Điểm quyền riêng tư giảm 15 điểm.',
    choices: [
      { id: 'acknowledge', label: 'Hiểu rồi', icon: '😞' }
    ]
  },
  
  LUCKY_BONUS: {
    type: 'LUCKY_BONUS',
    title: '🎁 Phần thưởng may mắn!',
    content: 'Bạn là người dùng thứ 1000 hôm nay! Nhận 20 tokens miễn phí.',
    choices: [
      { id: 'claim', label: 'Nhận thưởng', icon: '🎉' }
    ]
  }
};

// Banned keywords for Sentinel AI
export const BANNED_KEYWORDS = [
  'chính phủ',
  'biểu tình',
  'cách mạng',
  'phản đối',
  'tham nhũng'
];

// Leaderboard bot strategies
export const BOT_STRATEGIES = {
  DATA_CAPITALIST: {
    name: '💼 Nhà Tư Bản Dữ Liệu',
    description: 'Tương tác tối đa để kiếm token',
    behavior: {
      termsChoice: 'agree_all',
      interactionRate: 0.9,
      sellDataRate: 0.8,
      privacyAwareness: 0.1
    }
  },
  
  PRIVACY_GUARDIAN: {
    name: '🛡️ Người Bảo Vệ Quyền Riêng Tư',
    description: 'Hạn chế tương tác, bảo vệ dữ liệu',
    behavior: {
      termsChoice: 'customize',
      interactionRate: 0.2,
      sellDataRate: 0.1,
      privacyAwareness: 0.9
    }
  },
  
  BALANCED_PLAYER: {
    name: '⚖️ Người Chơi Cân Bằng',
    description: 'Cân bằng giữa lợi ích và quyền riêng tư',
    behavior: {
      termsChoice: 'customize',
      interactionRate: 0.5,
      sellDataRate: 0.4,
      privacyAwareness: 0.6
    }
  },
  
  GHOST_USER: {
    name: '👻 Người Dùng Ẩn Danh',
    description: 'Tương tác tối thiểu',
    behavior: {
      termsChoice: 'customize',
      interactionRate: 0.1,
      sellDataRate: 0,
      privacyAwareness: 1.0
    }
  }
};

// DCS calculation weights
export const DCS_WEIGHTS = {
  AUTONOMY: 0.5,      // Privacy score weight
  EFFICIENCY: 0.35,    // Economic efficiency weight
  IMPACT: 0.15         // Social impact weight
};

// Achievements/Titles
export const ACHIEVEMENTS = [
  {
    minDCS: 80,
    title: '🏆 Công Dân Số Thông Thái',
    description: 'Bạn đã thành thạo nghệ thuật cân bằng giữa tham gia và bảo vệ quyền riêng tư!'
  },
  {
    minDCS: 60,
    maxDCS: 79,
    title: '⭐ Người Dùng Có Ý Thức',
    description: 'Bạn hiểu rõ giá trị của dữ liệu cá nhân và biết cách quản lý nó.'
  },
  {
    minDCS: 40,
    maxDCS: 59,
    title: '🤔 Người Dùng Thông Thường',
    description: 'Bạn đang học cách điều hướng trong thế giới dữ liệu.'
  },
  {
    minDCS: 20,
    maxDCS: 39,
    title: '⚠️ Người Tiêu Dùng Dữ Liệu',
    description: 'Bạn đang để lại quá nhiều dấu vết dữ liệu mà không nhận được giá trị tương xứng.'
  },
  {
    minDCS: 0,
    maxDCS: 19,
    title: '💸 Nô Lệ Dữ Liệu',
    description: 'Dữ liệu của bạn đang bị khai thác mà bạn nhận được rất ít lợi ích.'
  }
];

// Game configuration
export const GAME_CONFIG = {
  TOTAL_DAYS: 7,
  POSTS_PER_FEED: 3,
  INITIAL_PRIVACY_SCORE: 100,
  INITIAL_TOKENS: 0,
  
  // Onboarding choices
  AGREE_ALL_REWARD: 50,
  AGREE_ALL_PRIVACY_PENALTY: -30,
  CUSTOMIZE_REWARD: 0,
  CUSTOMIZE_PRIVACY_PENALTY: 0,
  
  // Profile value calculation
  PROFILE_VALUE_MULTIPLIER: 10,
  SELL_DATA_PROFIT_MARGIN: 0.3, // Platform keeps 30% profit
  
  // Event probabilities
  EVENT_PROBABILITY: 0.7, // 70% chance of event each day
};
