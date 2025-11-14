import { useState } from 'react';
import { useGlassBoxGame } from '../contexts/GlassBoxGameContext';

export default function PermissionsScreen() {
  const { setPermissionsAndStart } = useGlassBoxGame();
  
  const [localPermissions, setLocalPermissions] = useState({
    personalizeAds: true,
    trackDwellTime: true,
    analyzeComments: true,
    shareWithPartners: true
  });

  const togglePermission = (key) => {
    setLocalPermissions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveAndContinue = () => {
    setPermissionsAndStart(localPermissions);
  };

  const permissionsList = [
    {
      key: 'personalizeAds',
      title: 'Trải nghiệm Dành riêng cho bạn',
      description: 'Để giúp bạn khám phá những nội dung, xu hướng và ưu đãi độc đáo phù hợp nhất với sở thích của mình. Trải nghiệm của bạn sẽ trở nên liền mạch và thú vị hơn.',
      icon: '✨'
    },
    {
      key: 'trackDwellTime',
      title: 'Cải thiện & Tối ưu hóa Nền tảng',
      description: 'Giúp chúng tôi hiểu rõ hơn về cách nội dung được đón nhận để có thể liên tục cải tiến và mang đến một nền tảng ổn định, nhanh chóng và tốt hơn mỗi ngày.',
      icon: '🚀'
    },
    {
      key: 'analyzeComments',
      title: 'Xây dựng Cộng đồng An toàn & Tích cực',
      description: 'Cho phép chúng tôi sử dụng các công cụ tự động để duy trì một môi trường tương tác lành mạnh, tích cực và bảo vệ bạn khỏi các nội dung không phù hợp.',
      icon: '🛡️'
    },
    {
      key: 'shareWithPartners',
      title: 'Hệ sinh thái Dịch vụ & Nghiên cứu',
      description: 'Cho phép chúng tôi làm việc với các đối tác trong hệ sinh thái của mình để phục vụ cho các mục đích nghiên cứu, đổi mới và mang đến cho bạn những cơ hội cũng như dịch vụ có liên quan.',
      icon: '🌐'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            ⚙️ Tùy chỉnh Cài đặt
          </h1>
          <p className="text-gray-400 text-lg">
            Kiểm soát cách dữ liệu của bạn được sử dụng
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6 text-blue-400">
            📋 Quyền Thu thập Dữ liệu
          </h2>

          <div className="space-y-6">
            {permissionsList.map((permission) => (
              <div
                key={permission.key}
                className="bg-gray-900 rounded-lg p-5 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{permission.icon}</span>
                      <h3 className="font-semibold text-white text-lg">
                        {permission.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {permission.description}
                    </p>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => togglePermission(permission.key)}
                    className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                      localPermissions[permission.key]
                        ? 'bg-blue-600'
                        : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={localPermissions[permission.key]}
                  >
                    <span
                      className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        localPermissions[permission.key]
                          ? 'translate-x-6'
                          : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Message */}
          <div className="mt-6 bg-yellow-900 border border-yellow-700 rounded-lg p-4">
            <div className="flex gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="text-yellow-200 text-sm font-semibold mb-1">
                  Lưu ý về Trải nghiệm của bạn
                </p>
                <p className="text-yellow-300 text-xs leading-relaxed mb-2">
                  Để có được trải nghiệm thông minh và liền mạch nhất, chúng tôi khuyến khích bạn giữ nguyên các cài đặt này. Việc tắt một số tùy chọn có thể khiến các đề xuất nội dung và quảng cáo trở nên chung chung và ít liên quan hơn.
                </p>
                <p className="text-yellow-300 text-xs leading-relaxed">
                  Xin lưu ý, một số dữ liệu cơ bản về hoạt động vẫn sẽ được thu thập để đảm bảo các chức năng cốt lõi của dịch vụ được vận hành.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={handleSaveAndContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              ✅ Lưu & Tiếp tục
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          🔒 Cài đặt của bạn chỉ được lưu trong phiên chơi này
        </p>
      </div>
    </div>
  );
}
