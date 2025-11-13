# Thế Giới Dữ Liệu: Cuộc Đua Công Dân Số

## 🎮 Giới thiệu

"Thế Giới Dữ Liệu: Cuộc Đua Công Dân Số" là một game giáo dục mô phỏng về quyền riêng tư dữ liệu và khái niệm **Địa Tô Dữ Liệu** (Data Feudalism). 

Người chơi sẽ trải nghiệm vai trò của một người dùng trên nền tảng mạng xã hội, phải cân bằng giữa việc tham gia tạo nội dung, bảo vệ quyền riêng tư, và nhận được giá trị công bằng từ dữ liệu của mình.

## 🎯 Mục tiêu

Đạt được **Điểm Công Dân Số (DCS - Digital Citizenship Score)** cao nhất trên bảng xếp hạng!

DCS được tính dựa trên 3 yếu tố:
- **Tự chủ** (Privacy Score) - 50%
- **Hiệu quả Kinh tế** (Tokens earned / Platform Revenue) - 35%
- **Tác động** (Level of Participation) - 15%

## 🎲 Cách chơi

### Giai đoạn 1: Onboarding (Ngày 0)
Chọn cách bắt đầu:
- **Đồng ý tất cả**: Nhận 50 tokens ngay nhưng mất 30 điểm privacy
- **Tùy chỉnh quyền**: Giữ nguyên privacy nhưng không có thưởng

### Giai đoạn 2: Gameplay (Ngày 1-7)
Mỗi ngày gồm 3 phases:

#### Phase 1: Feed (Bảng tin)
- AI tạo bảng tin cá nhân hóa dựa trên hành vi của bạn
- Chọn cách tương tác với các bài đăng:
  - 👍 **Like**: +1 token, +1 data point
  - 💬 **Comment**: +2 tokens, +3 data points, -2 privacy
  - 🔄 **Share**: +3 tokens, +5 data points, -5 privacy
  - 📋 **Survey**: +5 tokens, +10 data points, -10 privacy
  - ⏭️ **Skip**: Không thay đổi

⚠️ **Lưu ý**: Bài đăng có nhãn "Giá trị cao" thường là bẫy - thu thập nhiều dữ liệu!

#### Phase 2: Event (Sự kiện)
Gặp các sự kiện do AI tạo ra:

**AI Quảng Cáo**:
- Đề nghị mua dữ liệu (giá thấp hơn giá trị thực)
- Quảng cáo được nhắm mục tiêu

**AI Giám Sát**:
- Cảnh báo nội dung nhạy cảm
- Yêu cầu xác minh danh tính

**Sự kiện Ngẫu nhiên**:
- Rò rỉ dữ liệu
- Phần thưởng may mắn

#### Phase 3: Summary (Tổng kết)
- Xem lại quyết định của ngày
- Kiểm tra DCS và vị trí trên bảng xếp hạng
- So sánh với các bot có chiến lược khác nhau

### Giai đoạn 3: Endgame (Ngày 8)
- Xem kết quả cuối cùng
- Nhận danh hiệu dựa trên DCS
- Phân tích chi tiết về cách nền tảng khai thác dữ liệu của bạn
- Học bài học về địa tô dữ liệu

## 🤖 Các Bot Đối Thủ

1. **💼 Nhà Tư Bản Dữ Liệu**: Tương tác tối đa để kiếm token, bỏ qua privacy
2. **🛡️ Người Bảo Vệ Quyền Riêng Tư**: Hạn chế tương tác, giữ gìn privacy
3. **⚖️ Người Chơi Cân Bằng**: Cân bằng giữa lợi ích và quyền riêng tư
4. **👻 Người Dùng Ẩn Danh**: Tương tác tối thiểu

## 📊 Chiến thuật Chơi

### Chiến lược A: Tối đa hóa Tokens
- Tương tác với mọi bài đăng
- Chấp nhận bán dữ liệu
- **Kết quả**: Nhiều tokens nhưng DCS thấp (privacy kém, hiệu quả thấp)

### Chiến lược B: Bảo vệ Privacy
- Chỉ tương tác tối thiểu
- Từ chối mọi đề nghị bán dữ liệu
- **Kết quả**: Privacy cao nhưng DCS trung bình (thiếu tác động)

### Chiến lược C: Cân Bằng Thông Minh ⭐
- Chọn lọc tương tác có giá trị
- Đàm phán khi bán dữ liệu
- Hiểu rõ giá trị dữ liệu của mình
- **Kết quả**: DCS cao nhất!

## 💡 Bài học về Địa Tô Dữ Liệu

Game này minh họa các vấn đề thực tế:

1. **Bất bình đẳng giá trị**: Nền tảng luôn kiếm được nhiều hơn người dùng
2. **Thiếu minh bạch**: Giá trị thực của dữ liệu không được công khai
3. **Tự kiểm duyệt**: Người dùng tự hạn chế để tránh bị phạt
4. **Hiệu ứng mạng**: Khó thoát khỏi nền tảng khi đã đầu tư nhiều dữ liệu

## 🛠️ Cấu trúc Code

```
/game
├── /components          # UI Components
│   ├── Dashboard.jsx    # Hiển thị stats người chơi
│   ├── Feed.jsx         # Bảng tin với các bài đăng
│   ├── EventModal.jsx   # Pop-up sự kiện
│   ├── Leaderboard.jsx  # Bảng xếp hạng
│   ├── DailySummary.jsx # Tổng kết ngày
│   ├── EndGameScreen.jsx# Màn hình kết thúc
│   └── OnboardingScreen.jsx
│
├── /gameLogic          # Game Logic
│   ├── constants.js    # Hằng số, templates
│   ├── gameReducer.js  # State management
│   ├── aiSystem.js     # 3 AI systems
│   └── leaderboardSystem.js
│
├── /contexts
│   └── GameContext.jsx # Global state
│
└── Game.jsx            # Main game controller
```

## 🎨 Thiết kế UI

- **Onboarding**: Gradient blue-purple với choices rõ ràng
- **Dashboard**: Cards hiển thị stats với progress bars
- **Feed**: Card-based với visual feedback cho actions
- **Events**: Modal overlay với dramatic styling
- **Leaderboard**: Ranking list với highlights cho player
- **Summary**: Comprehensive stats với charts
- **Endgame**: Final analysis với educational message

## 🚀 Cách chạy

1. Click nút "🎮 Chơi Game" ở góc dưới bên trái
2. Hoặc thêm vào code:
```jsx
import Game from './game/Game';
// Render <Game />
```

## 📝 Phát triển thêm

Các tính năng có thể thêm:
- [ ] Multiplayer mode
- [ ] More AI events
- [ ] Detailed analytics dashboard
- [ ] Save/Load game state
- [ ] Difficulty levels
- [ ] More post types
- [ ] Social features (share score)
- [ ] Achievement system
- [ ] Tutorial mode

## 🙏 Credits

Game được thiết kế dựa trên:
- Khái niệm "Data Feudalism" của Jaron Lanier
- Nghiên cứu về digital rights và privacy
- Mô hình kinh tế nền tảng (Platform Economics)

---

**Made with React, Tailwind CSS, and a message about digital rights ✊**
