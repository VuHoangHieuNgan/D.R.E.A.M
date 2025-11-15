# 🚀 Hướng Dẫn Chạy Dự Án D.R.E.A.M

## 📋 Yêu Cầu Hệ Thống

- **Node.js** (phiên bản 16 trở lên)
- **npm** hoặc **yarn**
- **Git** (nếu clone từ repository)

## 🔧 Cài Đặt

### Bước 1: Cài đặt dependencies cho Client

```bash
cd client
npm install
```

### Bước 2: Cài đặt dependencies cho Server

```bash
cd server
npm install
```

## ⚙️ Cấu Hình Environment Variables

Tạo file `.env` trong thư mục `server/` với nội dung sau:

```env
# Google Gemini API Key (bắt buộc cho game)
GEMINI_API_KEY=your_gemini_api_key_here

# Email Configuration (tùy chọn - cho form liên hệ)
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here
```

**Lưu ý:**

- Bạn cần lấy API key từ [Google AI Studio](https://makersuite.google.com/app/apikey)
- Nếu không có API key, game vẫn chạy được nhưng tính năng generate feed bằng AI sẽ không hoạt động

## 🎮 Chạy Dự Án

### Cách 1: Chạy riêng biệt (Khuyến nghị)

**Terminal 1 - Chạy Server:**

```bash
cd server
npm run dev
```

Server sẽ chạy tại: `http://localhost:4000`

**Terminal 2 - Chạy Client:**

```bash
cd client
npm run dev
```

Client sẽ chạy tại: `http://localhost:5173` (hoặc port khác nếu 5173 bị chiếm)

### Cách 2: Sử dụng script tự động (nếu có)

Nếu bạn muốn chạy cả 2 cùng lúc, có thể tạo script trong `package.json` ở root:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix server\" \"npm run dev --prefix client\""
  }
}
```

Sau đó cài `concurrently`:

```bash
npm install -g concurrently
npm run dev
```

## 📱 Truy Cập Ứng Dụng

Sau khi chạy thành công:

- **Frontend (Client)**: Mở trình duyệt và truy cập `http://localhost:5173`
- **Backend (Server)**: API endpoint tại `http://localhost:4000`

## 🎯 Kiểm Tra Hoạt Động

1. **Test Server:**

   - Truy cập: `http://localhost:4000/test`
   - Nếu thấy `{"message": "Test route working fine!"}` → Server hoạt động tốt

2. **Test Client:**
   - Mở `http://localhost:5173`
   - Trang web portfolio sẽ hiển thị
   - Click nút "🎮 Chơi Game" để test game

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi: "Cannot find module"

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi: "Port already in use"

- Đổi port trong `server/server.js` (dòng 163) hoặc `client/vite.config.js`
- Hoặc tắt ứng dụng đang dùng port đó

### Lỗi: "GEMINI_API_KEY is not defined"

- Tạo file `.env` trong thư mục `server/`
- Thêm `GEMINI_API_KEY=your_key_here`
- Khởi động lại server

### Lỗi CORS

- Kiểm tra `server/server.js` đã có `app.use(cors())` chưa
- Đảm bảo client đang gọi đúng URL server

## 📦 Build Production

### Build Client:

```bash
cd client
npm run build
```

File build sẽ nằm trong `client/dist/`

### Chạy Server Production:

```bash
cd server
npm start
```

## 📚 Cấu Trúc Dự Án

```
D.R.E.A.M/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── game/       # Game logic và components
│   │   └── components/ # UI components
│   └── package.json
├── server/             # Node.js + Express backend
│   ├── api/            # API routes
│   ├── server.js       # Server entry point
│   └── package.json
└── GAME_DOCUMENTATION.md
```

## 🎮 Tính Năng Game

Game "Thế Giới Dữ Liệu: Cuộc Đua Công Dân Số" bao gồm:

- 7 ngày gameplay
- 3 AI systems (Curator, Advertiser, Sentinel)
- Leaderboard với DCS score
- Tích hợp Gemini AI để generate feed

Xem chi tiết trong `GAME_DOCUMENTATION.md`

## 💡 Tips

- Luôn chạy server trước khi chạy client
- Nếu không có Gemini API key, game vẫn chạy nhưng feed sẽ dùng template mặc định
- Sử dụng DevTools để debug (F12)
- Check console để xem lỗi chi tiết

## 📞 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:

1. Node.js version: `node -v` (cần >= 16)
2. Dependencies đã cài đầy đủ chưa
3. Port 4000 và 5173 có bị chiếm không
4. File `.env` đã tạo và cấu hình đúng chưa

---

**Chúc bạn code vui vẻ! 🚀**
