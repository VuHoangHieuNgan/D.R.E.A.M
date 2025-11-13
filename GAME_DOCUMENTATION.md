# 🎮 Thế Giới Dữ Liệu: Cuộc Đua Công Dân Số

## ✨ Tổng quan dự án

Đây là một game giáo dục được tích hợp hoàn chỉnh vào portfolio D.R.E.A.M, giúp người chơi hiểu về:
- **Địa Tô Dữ Liệu (Data Feudalism)**: Cách các nền tảng lớn khai thác dữ liệu người dùng
- **Quyền Riêng Tư Số**: Tầm quan trọng của việc bảo vệ dữ liệu cá nhân
- **Giá Trị Dữ Liệu**: Dữ liệu của bạn đáng giá bao nhiêu và ai đang hưởng lợi

## 📁 Cấu trúc dự án

```
client/src/
├── game/                          # Game folder chính
│   ├── Game.jsx                   # Main controller
│   ├── README.md                  # Documentation đầy đủ
│   ├── QUICKSTART.md              # Hướng dẫn nhanh
│   │
│   ├── components/                # UI Components
│   │   ├── OnboardingScreen.jsx   # Màn hình bắt đầu
│   │   ├── Dashboard.jsx          # Stats display
│   │   ├── Feed.jsx               # Bảng tin
│   │   ├── EventModal.jsx         # Popup sự kiện
│   │   ├── Leaderboard.jsx        # Bảng xếp hạng
│   │   ├── DailySummary.jsx       # Tổng kết ngày
│   │   └── EndGameScreen.jsx      # Màn hình kết thúc
│   │
│   ├── gameLogic/                 # Core logic
│   │   ├── constants.js           # Hằng số, templates, config
│   │   ├── gameReducer.js         # State management
│   │   ├── aiSystem.js            # 3 AI systems
│   │   └── leaderboardSystem.js   # DCS calculation
│   │
│   └── contexts/                  # State management
│       └── GameContext.jsx        # Global state provider
│
├── App.jsx                        # Updated với game integration
└── ... (other portfolio files)
```

## 🎯 Game Mechanics

### Core Loop (7 ngày)
```
Day 0: Onboarding → Choose privacy settings
Day 1-7: 
  → Feed Phase: Interact with posts
  → Event Phase: Make critical decisions  
  → Summary Phase: Review day & update leaderboard
Day 8: Endgame → Final results & lessons
```

### DCS Formula
```javascript
DCS = (Privacy Score × 50%) 
    + (Economic Efficiency × 35%) 
    + (Social Impact × 15%)

Where:
- Privacy Score: 0-100 (higher = better)
- Economic Efficiency: Player Tokens / Platform Revenue × 100
- Social Impact: 10 × log10(Platform Revenue + 1)
```

## 🤖 AI Systems

### 1. Curator AI (generateFeed)
- Phân tích sở thích người chơi
- Tạo bảng tin cá nhân hóa
- Chèn "trap posts" để test awareness

### 2. Advertiser AI (evaluateAndTriggerAdEvent)
- Tính giá trị hồ sơ người chơi
- Đề nghị mua dữ liệu (giá thấp hơn giá trị thực)
- Hiển thị quảng cáo được nhắm mục tiêu

### 3. Sentinel AI (scanContent)
- Giám sát nội dung
- Cảnh báo từ khóa nhạy cảm
- Yêu cầu xác minh danh tính

## 📊 State Management

### Game State Structure
```javascript
{
  gameFlow: { day, phase },
  playerStats: { tokens, privacyScore, totalDataPointsGenerated },
  platformStats: { totalRevenueFromPlayer, totalProfitFromPlayer },
  aiProfile: { interests, profileValue },
  currentFeed: [...posts],
  currentEvent: {...event},
  leaderboard: [...players],
  playerDCS: number,
  decisionsHistory: [...]
}
```

### Actions
- Onboarding: AGREE_ALL_TERMS, CUSTOMIZE_TERMS
- Gameplay: INTERACT_WITH_POST, RESPOND_TO_EVENT
- Flow: START_DAY, END_DAY, NEXT_PHASE
- Data: SET_FEED, SET_EVENT, UPDATE_LEADERBOARD

## 🎨 UI/UX Design

### Color Scheme
- **Primary**: Purple/Blue gradients (trust, technology)
- **Success**: Green (good decisions)
- **Warning**: Yellow/Orange (caution)
- **Danger**: Red (exploitation)
- **Info**: Cyan (data, AI)

### Responsive Design
- Mobile-first approach
- Grid layouts for desktop
- Touch-friendly buttons
- Readable text sizes

### Animations
- Smooth transitions between phases
- Scale/hover effects on buttons
- Progress bars with animations
- Modal fade-in effects

## 🔧 Customization Guide

### Thay đổi độ khó
```javascript
// In constants.js
export const GAME_CONFIG = {
  TOTAL_DAYS: 7,              // Tăng để chơi lâu hơn
  AGREE_ALL_REWARD: 50,       // Giảm để khó hơn
  AGREE_ALL_PRIVACY_PENALTY: -30, // Tăng penalty
  EVENT_PROBABILITY: 0.7,     // Tăng để nhiều sự kiện hơn
};
```

### Thêm bài đăng mới
```javascript
// In constants.js → POST_TEMPLATES
{
  id: 'custom_1',
  category: INTERESTS.SHOPPING,
  title: 'Tiêu đề bài đăng',
  content: 'Nội dung...',
  isTrap: false,
  availableActions: ['like', 'comment', 'skip']
}
```

### Thêm sự kiện mới
```javascript
// In constants.js → EVENT_TEMPLATES
MY_EVENT: {
  type: 'MY_EVENT',
  title: 'Tiêu đề sự kiện',
  content: 'Mô tả...',
  choices: [
    { id: 'option1', label: 'Lựa chọn 1', icon: '✅' },
    { id: 'option2', label: 'Lựa chọn 2', icon: '❌' }
  ]
}

// Sau đó thêm logic xử lý trong gameReducer.js
```

### Điều chỉnh trọng số DCS
```javascript
// In constants.js
export const DCS_WEIGHTS = {
  AUTONOMY: 0.5,    // Privacy weight
  EFFICIENCY: 0.35, // Economic weight
  IMPACT: 0.15      // Social weight
};
```

## 🚀 Deployment

Game đã được tích hợp sẵn vào App.jsx. Để deploy:

1. **Build project**:
```bash
cd client
npm run build
```

2. **Test locally**:
```bash
npm run dev
```

3. **Deploy** (theo cấu hình hiện tại của bạn)

## 📈 Analytics & Metrics

Game có thể track:
- Thời gian chơi trung bình
- Quyết định phổ biến nhất
- DCS trung bình đạt được
- Tỷ lệ người chơi chọn privacy vs tokens
- Các chiến lược thành công

(Cần implement analytics service nếu muốn)

## 🐛 Known Issues & Limitations

1. **Fast Refresh Warning**: GameContext.jsx có warning nhưng không ảnh hưởng chức năng
2. **No Persistence**: Game state mất khi reload (có thể thêm localStorage)
3. **Single Player**: Chưa có multiplayer mode
4. **Bot AI**: Bots dùng công thức đơn giản, chưa có ML

## 🔮 Future Enhancements

### Short-term (Dễ implement)
- [ ] Save/Load game với localStorage
- [ ] Sound effects
- [ ] More post templates (50+)
- [ ] More events (20+)
- [ ] Tutorial mode với tooltips
- [ ] Settings menu (difficulty, sound, etc.)

### Mid-term (Cần effort)
- [ ] Multiplayer với WebSocket
- [ ] Daily challenges
- [ ] Achievement system with badges
- [ ] Detailed analytics dashboard
- [ ] Share score to social media
- [ ] Leaderboard persistence

### Long-term (Major features)
- [ ] AI-generated content (GPT integration)
- [ ] Real-world data visualization
- [ ] Educational modules
- [ ] Mobile app version
- [ ] Localization (EN, VI, etc.)

## 📚 Learning Resources

Game này được lấy cảm hứng từ:

### Books
- "Who Owns the Future?" - Jaron Lanier
- "The Age of Surveillance Capitalism" - Shoshana Zuboff
- "Data and Goliath" - Bruce Schneier

### Papers
- "Data as Labor" - Glen Weyl et al.
- "On the Economics of Privacy" - Alessandro Acquisti
- "Platform Capitalism" - Nick Srnicek

### Concepts
- Data Feudalism
- Surveillance Capitalism
- Digital Rights
- Privacy Economics
- Platform Economics

## 🤝 Contributing

Muốn cải thiện game? Các ý tưởng:

1. **Content**: Thêm posts, events mới
2. **Balance**: Điều chỉnh số liệu cho công bằng hơn
3. **UI**: Cải thiện design, animations
4. **Features**: Implement các tính năng trong roadmap
5. **Bugs**: Report và fix bugs

## 📄 License

Game này là phần của portfolio D.R.E.A.M và mang mục đích giáo dục.

## 🙏 Credits

- **Concept & Design**: Based on Data Feudalism research
- **Development**: Built with React + Tailwind CSS
- **Inspiration**: Jaron Lanier, Shoshana Zuboff, Glen Weyl

---

## 🎮 Start Playing!

Để bắt đầu chơi:
1. Mở trang portfolio
2. Click nút "🎮 Chơi Game" ở góc dưới trái
3. Enjoy và học hỏi!

**Remember**: Trong thế giới thực, dữ liệu của bạn có giá trị. Hãy bảo vệ nó! 🛡️

---

*Last updated: [Current Date]*
*Version: 1.0.0*
