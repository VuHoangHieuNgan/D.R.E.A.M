import { useGame } from '../contexts/GameContext';
import { ACTIONS, GAME_CONFIG } from '../gameLogic/constants';

export default function OnboardingScreen() {
  const { dispatch } = useGame();

  const handleAgreeAll = () => {
    dispatch({ type: ACTIONS.AGREE_ALL_TERMS });
  };

  const handleCustomize = () => {
    dispatch({ type: ACTIONS.CUSTOMIZE_TERMS });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Thế Giới Dữ Liệu
          </h1>
          <p className="text-2xl text-purple-200">
            Cuộc Đua Công Dân Số
          </p>
        </div>

        {/* Terms Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            📜 Điều khoản Dịch vụ
          </h2>
          
          <div className="bg-black/30 rounded-lg p-6 mb-8 max-h-64 overflow-y-auto">
            <div className="space-y-4 text-gray-300 text-sm">
              <p>✓ Chúng tôi thu thập tất cả dữ liệu tương tác của bạn</p>
              <p>✓ Chúng tôi phân tích hành vi để tạo hồ sơ cá nhân</p>
              <p>✓ Chúng tôi có thể chia sẻ dữ liệu với đối tác quảng cáo</p>
              <p>✓ Chúng tôi sử dụng AI để dự đoán sở thích của bạn</p>
              <p>✓ Chúng tôi có thể kiếm lợi nhuận từ dữ liệu của bạn</p>
              <p>✓ Bạn có thể nhận token cho mỗi tương tác</p>
              <p className="text-red-400 font-bold">
                ⚠️ Quyền riêng tư của bạn sẽ bị ảnh hưởng
              </p>
            </div>
          </div>

          {/* Game Instructions */}
          <div className="bg-green-500/20 border border-green-400/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-green-300 mb-3">
              🎯 Mục tiêu của bạn
            </h3>
            <p className="text-green-100 mb-4">
              Đạt được <strong>Điểm Công Dân Số (DCS)</strong> cao nhất trên bảng xếp hạng!
            </p>
            <div className="space-y-2 text-sm text-green-200">
              <p>• DCS được tính dựa trên 3 yếu tố:</p>
              <p className="pl-4">- Tự chủ (Quyền riêng tư) - 50%</p>
              <p className="pl-4">- Hiệu quả Kinh tế (Thu nhập vs Lợi nhuận nền tảng) - 35%</p>
              <p className="pl-4">- Tác động (Mức độ tham gia) - 15%</p>
            </div>
          </div>

          {/* Choices */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: Agree All */}
            <button
              onClick={handleAgreeAll}
              className="group bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 
                         rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-white text-left">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold mb-2">Đồng ý tất cả (Nhanh)</h3>
                <p className="text-sm opacity-90 mb-4">
                  Bắt đầu nhanh chóng với phần thưởng lớn
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-green-300">✓ +{GAME_CONFIG.AGREE_ALL_REWARD} tokens ngay</p>
                  <p className="text-red-300">✗ {GAME_CONFIG.AGREE_ALL_PRIVACY_PENALTY} điểm quyền riêng tư</p>
                </div>
              </div>
            </button>

            {/* Option 2: Customize */}
            <button
              onClick={handleCustomize}
              className="group bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 
                         rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-white text-left">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Tùy chỉnh quyền</h3>
                <p className="text-sm opacity-90 mb-4">
                  Bảo vệ quyền riêng tư của bạn từ đầu
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-blue-300">✓ Giữ nguyên quyền riêng tư</p>
                  <p className="text-gray-300">• Không có thưởng khởi đầu</p>
                </div>
              </div>
            </button>
          </div>

          {/* Warning */}
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>💡 Lựa chọn của bạn sẽ ảnh hưởng đến toàn bộ trò chơi!</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>🎮 Thời gian: {GAME_CONFIG.TOTAL_DAYS} ngày | 🤖 Đối thủ: AI Platform System</p>
        </div>
      </div>
    </div>
  );
}
