import { useGlassBoxGame } from '../contexts/GlassBoxGameContext';

export default function OnboardingScreen() {
  const { startGame, navigateToPermissions } = useGlassBoxGame();

  const termsText = `ĐIỀU KHOẢN DỊCH VỤ VÀ CHÍNH SÁCH DỮ LIỆU

Ngày có hiệu lực: 01 tháng 01, 2024

1. Chấp thuận Điều khoản

Chào mừng bạn đến với Nền tảng của chúng tôi ("Dịch vụ"). Bằng việc tạo tài khoản, truy cập hoặc sử dụng Dịch vụ của chúng tôi dưới bất kỳ hình thức nào, bạn ("Người dùng") xác nhận rằng bạn đã đọc, hiểu và đồng ý chịu sự ràng buộc pháp lý bởi toàn bộ các Điều khoản Dịch vụ này ("Điều khoản"), cùng với Chính sách Dữ liệu và Chính sách về Cookie của chúng tôi, vốn được tích hợp vào đây bằng cách tham chiếu. Nếu bạn không đồng ý với các Điều khoản này, bạn không được phép truy cập hoặc sử dụng Dịch vụ.

2. Thông tin chúng tôi thu thập

Để vận hành và cải thiện Dịch vụ, chúng tôi thu thập và xử lý thông tin theo nhiều cách khác nhau.

2.1. Thông tin và Nội dung bạn cung cấp: Chúng tôi thu thập nội dung, thông tin liên lạc và các thông tin khác mà bạn cung cấp khi sử dụng Dịch vụ, bao gồm khi bạn đăng ký tài khoản, tạo hoặc chia sẻ nội dung, và nhắn tin hoặc giao tiếp với người khác. Điều này có thể bao gồm siêu dữ liệu trong nội dung của bạn, chẳng hạn như vị trí của một bức ảnh hoặc ngày tạo của một tệp.

2.2. Hoạt động và Tương tác của bạn: Chúng tôi thu thập thông tin về cách bạn sử dụng Dịch vụ, chẳng hạn như các loại nội dung bạn xem hoặc tương tác; các tính năng bạn sử dụng; các hành động bạn thực hiện; những người hoặc tài khoản bạn tương tác; và thời gian, tần suất và thời lượng các hoạt động của bạn.

2.3. Thông tin về Thiết bị và Kết nối: Chúng tôi thu thập thông tin từ và về các máy tính, điện thoại, TV được kết nối và các thiết bị kết nối web khác mà bạn sử dụng để tích hợp với Dịch vụ của chúng tôi. Thông tin này bao gồm: các thuộc tính của thiết bị (như hệ điều hành, phiên bản phần cứng và phần mềm), tín hiệu thiết bị (như tín hiệu Bluetooth, các điểm truy cập Wi-Fi lân cận), thông tin từ cài đặt thiết bị, và thông tin mạng và kết nối (như tên nhà cung cấp dịch vụ di động, địa chỉ IP). Chúng tôi cũng thu thập thông tin liên quan đến vị trí, được suy ra từ các tín hiệu như GPS (nếu bạn cho phép) hoặc địa chỉ IP.

2.4. Thông tin từ Đối tác: Các nhà quảng cáo, nhà phát triển ứng dụng và nhà xuất bản có thể gửi cho chúng tôi thông tin thông qua các Công cụ Kinh doanh mà họ sử dụng, bao gồm các plugin xã hội của chúng tôi (như nút "Thích"), thông tin đăng nhập, API và SDK của chúng tôi. Các đối tác này cung cấp thông tin về các hoạt động của bạn bên ngoài Nền tảng của chúng tôi.

3. Cách chúng tôi sử dụng Thông tin này

Chúng tôi sử dụng thông tin chúng tôi có để cung cấp và hỗ trợ Dịch vụ và các sản phẩm liên quan. Cụ thể:

3.1. Cung cấp, Cá nhân hóa và Cải thiện Dịch vụ: Chúng tôi sử dụng thông tin để cung cấp Dịch vụ, cá nhân hóa các tính năng và nội dung, và đưa ra các đề xuất cho bạn trong và ngoài Dịch vụ của chúng tôi. Để tạo ra một trải nghiệm được cá nhân hóa, độc đáo và phù hợp với bạn, chúng tôi sử dụng các kết nối, sở thích, và hành động của bạn, dựa trên dữ liệu chúng tôi thu thập và học hỏi từ bạn và những người khác.

3.2. Thúc đẩy An toàn, Toàn vẹn và Bảo mật: Chúng tôi sử dụng thông tin chúng tôi có để xác minh tài khoản và hoạt động, chống lại các hành vi có hại, phát hiện và ngăn chặn thư rác và các trải nghiệm tiêu cực khác, duy trì tính toàn vẹn của Dịch vụ và thúc đẩy an toàn và bảo mật.

3.3. Hiển thị và Đo lường Hiệu quả Quảng cáo và Dịch vụ: Chúng tôi sử dụng thông tin chúng tôi có để cải thiện hệ thống quảng cáo và đo lường của mình để chúng tôi có thể hiển thị cho bạn các quảng cáo phù hợp hơn và đo lường hiệu quả và phạm vi tiếp cận của chúng.

3.4. Giao tiếp với bạn: Chúng tôi sử dụng thông tin chúng tôi có để gửi cho bạn các thông tin tiếp thị, giao tiếp với bạn về Dịch vụ của chúng tôi, và cho bạn biết về các chính sách và điều khoản của chúng tôi.

3.5. Nghiên cứu và Đổi mới: Chúng tôi sử dụng thông tin chúng tôi có để phát triển, thử nghiệm và cải thiện Dịch vụ của mình, bao gồm bằng cách tiến hành các cuộc khảo sát và nghiên cứu, và thử nghiệm và khắc phục sự cố các sản phẩm và tính năng mới.

4. Cách Thông tin này được chia sẻ

Thông tin của bạn được chia sẻ với những người khác theo những cách sau:

4.1. Chia sẻ trên Dịch vụ: Khi bạn chia sẻ và giao tiếp bằng Dịch vụ của chúng tôi, bạn chọn đối tượng cho những gì bạn chia sẻ.

4.2. Đối tác Bên thứ ba: Chúng tôi làm việc với các đối tác bên thứ ba, những người giúp chúng tôi cung cấp và cải thiện Dịch vụ của mình. Chúng tôi không bán bất kỳ thông tin nào của bạn cho bất kỳ ai và chúng tôi sẽ không bao giờ làm vậy. Chúng tôi cũng áp đặt các hạn chế nghiêm ngặt về cách các đối tác có thể sử dụng và tiết lộ dữ liệu mà chúng tôi cung cấp. Các loại đối tác chúng tôi chia sẻ thông tin bao gồm: các đối tác đo lường, các nhà quảng cáo, các nhà cung cấp dịch vụ và các nhà nghiên cứu học thuật.

4.3. Yêu cầu Pháp lý và Ngăn chặn Tác hại: Chúng tôi có thể truy cập, lưu giữ và chia sẻ thông tin của bạn để đáp ứng một yêu cầu pháp lý (như lệnh khám xét, lệnh của tòa án hoặc trát đòi hầu tòa) nếu chúng tôi tin rằng luật pháp yêu cầu chúng tôi làm vậy.

5. Quyền và Lựa chọn của bạn

Bạn có các quyền nhất định liên quan đến dữ liệu của mình, tuân theo luật pháp hiện hành. Bạn có thể truy cập, chỉnh sửa hoặc xóa dữ liệu của mình thông qua cài đặt của Nền tảng. Việc bạn lựa chọn hạn chế thu thập dữ liệu có thể ảnh hưởng tiêu cực đến khả năng cung cấp một trải nghiệm tối ưu của chúng tôi.

6. Sửa đổi

Chúng tôi có thể sửa đổi hoặc cập nhật các Điều khoản này theo thời gian. Chúng tôi sẽ thông báo cho bạn về các thay đổi quan trọng. Việc bạn tiếp tục sử dụng Dịch vụ sau khi các Điều khoản được cập nhật có nghĩa là bạn chấp nhận các điều khoản đó.

---

BẰNG VIỆC TIẾP TỤC, BẠN XÁC NHẬN RẰNG BẠN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý VÔ ĐIỀU KIỆN VỚI TOÀN BỘ CÁC ĐIỀU KHOẢN VÀ CHÍNH SÁCH DỮ LIỆU ĐƯỢC NÊU TRÊN.`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Chào mừng đến với<br />Mạng Xã Hội
          </h1>
          <p className="text-gray-400 text-lg">
            Kết nối. Chia sẻ. Khám phá.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            📋 Điều khoản Dịch vụ và Chính sách Quyền riêng tư
          </h2>
          
          <div className="bg-gray-900 rounded p-4 h-96 overflow-y-auto border border-gray-700 mb-6">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
              {termsText}
            </pre>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={startGame}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              ✅ Chấp nhận & Bắt đầu lướt
            </button>

            <button
              onClick={navigateToPermissions}
              className="w-full text-gray-400 hover:text-gray-300 text-sm hover:underline transition-colors duration-200"
            >
              ⚙️ Tùy chỉnh cài đặt
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          🎮 Đây là một trò chơi mô phỏng giáo dục về quyền riêng tư dữ liệu
        </p>
      </div>
    </div>
  );
}
