import { useState, useEffect } from 'react';
import { useGlassBoxGame } from '../contexts/GlassBoxGameContext';

export default function AnalysisScreen() {
  const { gameState, resetGame } = useGlassBoxGame();
  const [isLoading, setIsLoading] = useState(true);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    performAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const performAnalysis = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Get API key from environment
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API Key không được cấu hình. Vui lòng tạo file .env.local và thêm VITE_GEMINI_API_KEY="your_api_key"');
      }

      // Dynamic import to avoid build issues
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      // Prepare interaction data
      const interactionData = JSON.stringify(gameState.userInteractions, null, 2);
      const permissionsData = JSON.stringify(gameState.permissions, null, 2);

      // Prepare prompt
      const prompt = `### BỐI CẢNH VÀ VAI TRÒ ###
Bạn là một AI Phân tích Dữ liệu Người dùng tinh vi của một tập đoàn công nghệ lớn. Nhiệm vụ của bạn là biến 90 giây hành vi thô thành một báo cáo kinh tế hoàn chỉnh - từ thu thập dữ liệu đến định giá và bán hồ sơ.

### NHIỆM VỤ ###
Tạo ra một báo cáo tường thuật đầy đủ, phơi bày toàn bộ quy trình khai thác người dùng. **TẤT CẢ NỘI DUNG PHẢI BẰNG TIẾNG VIỆT.**

### DỮ LIỆU ĐẦU VÀO ###

**Quyền đã được cấp:**
${permissionsData}

**Hành vi người dùng (90 giây):**
${interactionData}

### QUY TẮC SUY LUẬN ###

1. **Phân tích Số liệu Hoạt động:**
   - Đếm tổng số bài viết được xem (đếm tất cả interactions có action='View')
   - Tổng số tương tác chủ động (Like, Comment, Share, reactions khác - loại trừ View)
   - Tổng thời gian chú ý = SUM(time_spent_seconds) từ tất cả interactions
   - Tính toán "quãng đường lướt" = total_posts_scrolled * 0.42 (mét)

2. **Phân tích Hành vi & Tâm lý:**
   - Dựa trên tốc độ lướt để phân loại: "Người tìm kiếm sự thỏa mãn tức thì" (nhanh) vs "Người đọc kỹ càng" (chậm)
   - Phân tích các reaction/comment để tìm "dấu hiệu cảm xúc"
   - Tìm category có time_spent cao nhất = "sở thích tiềm ẩn"
   - NẾU thiếu dữ liệu do quyền tắt, hãy GHI RÕ và CHÂM BIẾM

3. **Xây dựng Shadow Profile:**
   - Suy luận persona dựa trên hành vi
   - Ước tính tuổi và giới tính (dựa trên khuôn mẫu người Việt)
   - Giải thích lý do một cách sắc bén
   - Tạo tên hồ sơ quảng cáo hấp dẫn

4. **Định giá Kinh tế (QUAN TRỌNG):**
   - Giá trị "lao động chú ý" = 0.01 tokens (cố định, thể hiện sự rẻ mạt)
   - Giá trị hồ sơ sau AI = từ 50-150 tokens (tùy độ chi tiết của dữ liệu)
   - Càng nhiều dữ liệu/quyền được bật = giá trị càng cao
   - Surplus value = profile_value - attention_value
   - **Cuộc đấu giá:** Tạo 3 nhà quảng cáo phù hợp với hồ sơ, giải thích lý do họ đấu giá:
     * Nhà quảng cáo 1: 70% giá trị hồ sơ + lý do nhắm mục tiêu
     * Nhà quảng cáo 2: 85% giá trị hồ sơ + lý do nhắm mục tiêu
     * Nhà quảng cáo 3 (THẮNG): 100% giá trị hồ sơ + lý do nhắm mục tiêu

5. **Đề xuất Quảng cáo:**
   - Dựa trên hồ sơ đã tạo
   - 3 sản phẩm/dịch vụ cụ thể, phù hợp thị trường Việt Nam

### ĐỊNH DẠNG ĐẦU RA (CỰC KỲ QUAN TRỌNG) ###

Trả về JSON hợp lệ, không có markdown, không có lời giải thích thêm:

{
  "activity_report": {
    "total_posts_scrolled": <số nguyên>,
    "total_interactions": <số nguyên - đếm tất cả action trừ View>,
    "total_attention_seconds": <số thực, 1 chữ số thập phân>,
    "scroll_distance_meters": <số thực = total_posts * 0.42>
  },
  "behavioral_analysis": {
    "pacing_style": "<1 câu tiếng Việt mô tả tốc độ lướt và ý nghĩa tâm lý>",
    "emotional_trigger": "<1 câu tiếng Việt về dấu hiệu cảm xúc từ reactions/comments, hoặc 'Không đủ dữ liệu' nếu thiếu>",
    "hidden_interest": "<1 câu tiếng Việt về category có time_spent cao nhất và ý nghĩa>"
  },
  "shadow_profile": {
    "persona": "<Cụm từ ngắn tiếng Việt, ví dụ: 'Thanh niên quan tâm công nghệ'>",
    "reasoning": "<2-3 câu tiếng Việt giải thích sắc bén, CHÂM BIẾM nếu thiếu dữ liệu>",
    "estimated_age": "<khoảng tuổi, ví dụ: '18-24'>",
    "estimated_gender": "<'Nam', 'Nữ', hoặc 'Không xác định'>",
    "behavioral_traits": ["<tính từ TV>", "<tính từ TV>", "<tính từ TV>"]
  },
  "economic_exploitation": {
    "attention_labor_value": 0.01,
    "profile_sale_value": <50-150, tùy chất lượng dữ liệu>,
    "surplus_value": <profile_sale_value - 0.01>,
    "exploitation_message": "<1 câu tiếng Việt CHÂM BIẾM về chênh lệch giá trị, ví dụ: 'Bạn làm việc, chúng tôi thu lợi nhuận'>",
    "bidders": [
      {
        "name": "<Tên nhà quảng cáo 1 phù hợp với hồ sơ>",
        "bid_amount": <70% của profile_sale_value, LÀM TRÒN thành số nguyên>,
        "targeting_reason": "<1 câu ngắn giải thích tại sao họ đấu giá. Ví dụ: 'Nhắm vào người trẻ quan tâm công nghệ'>"
      },
      {
        "name": "<Tên nhà quảng cáo 2 phù hợp với hồ sơ>",
        "bid_amount": <85% của profile_sale_value, LÀM TRÒN thành số nguyên>,
        "targeting_reason": "<1 câu ngắn giải thích tại sao họ đấu giá>"
      },
      {
        "name": "<Tên nhà quảng cáo 3 phù hợp với hồ sơ - NGƯỜI THẮNG>",
        "bid_amount": <100% của profile_sale_value, LÀM TRÒN thành số nguyên>,
        "targeting_reason": "<1 câu ngắn giải thích tại sao họ đấu giá>"
      }
    ]
  },
  "ad_targeting_profile": "<Tên hồ sơ tiếng Việt, ví dụ: 'Gen Z quan tâm công nghệ và ẩm thực'>",
  "suggested_ads": [
    "<Sản phẩm/dịch vụ cụ thể tiếng Việt>",
    "<Sản phẩm/dịch vụ cụ thể tiếng Việt>",
    "<Sản phẩm/dịch vụ cụ thể tiếng Việt>"
  ],
  "closing_message": "<1 câu tiếng Việt mạnh mẽ, ví dụ: 'Thời gian rảnh của bạn là một nhà máy. Dữ liệu của bạn là sản phẩm.'>"
}

**CHÚ Ý:** Tất cả text phải tiếng Việt. Phân tích phải dựa trên dữ liệu thực tế được cung cấp, không bịa đặt.`;

      // Call API
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse JSON response
      // Remove markdown code blocks if present
      let cleanedText = text.trim();
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/```\n?/g, '');
      }

      const parsedResult = JSON.parse(cleanedText);
      setAnalysisResult(parsedResult);

    } catch (err) {
      console.error('Error analyzing data:', err);
      
      let errorMessage = 'Có lỗi xảy ra khi phân tích dữ liệu';
      
      if (err.message && err.message.includes('quota')) {
        errorMessage = '⚠️ API Key đã vượt giới hạn sử dụng (quota). Vui lòng:\n\n' +
          '1. Đợi vài phút và thử lại\n' +
          '2. Hoặc tạo API key mới tại: https://aistudio.google.com/app/apikey\n' +
          '3. Cập nhật vào file client/.env';
      } else if (err.message && err.message.includes('API Key')) {
        errorMessage = err.message;
      } else {
        errorMessage = err.message || errorMessage;
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">🤖 AI đang phân tích...</h2>
          <p className="text-gray-400">Đang xử lý 90 giây của bạn...</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-red-900 border border-red-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">❌ Lỗi Phân tích</h2>
          <div className="bg-red-950 rounded p-4 mb-6">
            <pre className="text-red-200 whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {error}
            </pre>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetGame}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              🔄 Thử lại
            </button>
            <button
              onClick={() => window.open('https://aistudio.google.com/app/apikey', '_blank')}
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              🔑 Lấy API Key mới
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!analysisResult) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Không có dữ liệu phân tích</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* NavBar is now global, no need for GameHeader here */}
      
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
        
        {/* HERO HEADER */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-2 rounded-full mb-6 text-sm font-bold shadow-lg animate-pulse">
            🔒 BÁO CÁO PHÂN TÍCH DỮ LIỆU CÁ NHÂN
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            90 Giây Của Bạn
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mỗi giây bạn lướt, chúng tôi thu thập. Mỗi click, chúng tôi phân tích. Đây là những gì chúng tôi biết về bạn.
          </p>
        </div>

        {/* PHẦN 1: BÁO CÁO HOẠT ĐỘNG */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg shadow-lg">
              1
            </div>
            <h2 className="text-3xl font-bold text-blue-400">Dấu Chân Kỹ Thuật Số</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border border-blue-600/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
                  📱
                </div>
                <div className="text-sm font-semibold text-blue-300">Bài viết đã lướt</div>
              </div>
              <div className="text-5xl font-black text-white mb-2">
                {analysisResult.activity_report?.total_posts_scrolled || gameState.userInteractions.length}
              </div>
              <div className="text-sm text-blue-200">
                ≈ {analysisResult.activity_report?.scroll_distance_meters?.toFixed(1) || (gameState.userInteractions.length * 0.42).toFixed(1)}m nội dung
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border border-green-600/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl">
                  ❤️
                </div>
                <div className="text-sm font-semibold text-green-300">Tương tác</div>
              </div>
              <div className="text-5xl font-black text-white mb-2">
                {analysisResult.activity_report?.total_interactions || gameState.userInteractions.filter(i => i.action !== 'View').length}
              </div>
              <div className="text-sm text-green-200">
                {gameState.userInteractions.filter(i => ['❤️','👍','😂','😮','😢','😡'].includes(i.action) || i.action === 'Like').length} thích · {gameState.userInteractions.filter(i => i.action === 'Comment').length} bình luận · {gameState.userInteractions.filter(i => i.action === 'Share').length} chia sẻ
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-xl p-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 border border-yellow-600/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <div className="text-sm font-semibold text-yellow-300">Thời gian Chú ý</div>
              </div>
              <div className="text-5xl font-black text-white mb-2">
                {analysisResult.activity_report?.total_attention_seconds?.toFixed(1) || 
                 gameState.userInteractions.reduce((sum, i) => sum + (i.time_spent_seconds || 0), 0).toFixed(1)}s
              </div>
              <div className="text-sm text-yellow-200">
                Cộng dồn từng bài viết
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700/50 shadow-xl">

            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📍</span>
              Chi tiết thời gian từng bài
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm ml-2">
                {gameState.userInteractions.filter(i => i.action === 'View' && i.time_spent_seconds).length} bài
              </span>
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {gameState.userInteractions
                .filter(i => i.action === 'View' && i.time_spent_seconds)
                .map((interaction, index) => (
                  <div key={`post-${index}`} className="flex items-center justify-between bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg p-3 transition-all duration-200 border border-gray-600/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-300 font-medium">
                          {interaction.category || 'Chung'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-bold text-lg">{interaction.time_spent_seconds}s</span>
                        <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                      </div>
                    </div>
                  )
                )}
              {gameState.userInteractions.filter(i => i.action === 'View').length === 0 && (
                <div className="text-sm text-gray-500 text-center py-6 bg-gray-800/50 rounded-lg">Không có dữ liệu lướt được ghi nhận</div>
              )}
            </div>
          </div>
        </div>

        {/* PHẦN 2: PHÂN TÍCH HÀNH VI & TÂM LÝ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg shadow-lg">
              2
            </div>
            <h2 className="text-3xl font-bold text-purple-400">Phân Tích Hành Vi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur rounded-xl p-6 border-l-4 border-purple-500 shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">🏃</div>
              <div className="text-lg font-bold text-purple-300 mb-2">Tốc độ Tương tác</div>
              <p className="text-gray-200 leading-relaxed">{analysisResult.behavioral_analysis?.pacing_style || 'Đang phân tích...'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 backdrop-blur rounded-xl p-6 border-l-4 border-red-500 shadow-xl hover:shadow-red-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">💭</div>
              <div className="text-lg font-bold text-red-300 mb-2">Dấu hiệu Cảm xúc</div>
              <p className="text-gray-200 leading-relaxed">{analysisResult.behavioral_analysis?.emotional_trigger || 'Không đủ dữ liệu cảm xúc'}</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 backdrop-blur rounded-xl p-6 border-l-4 border-yellow-500 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">🔍</div>
              <div className="text-lg font-bold text-yellow-300 mb-2">Mô hình Chú ý</div>
              <p className="text-gray-200 leading-relaxed">{analysisResult.behavioral_analysis?.hidden_interest || 'Không phát hiện được mô hình rõ ràng'}</p>
            </div>
          </div>
        </div>

        {/* PHẦN 3: HỒ SƠ NGẦM (SHADOW PROFILE) */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
              3
            </div>
            <h2 className="text-3xl font-bold text-red-400">Hồ Sơ Ngầm</h2>
          </div>
          
          <div className="bg-gradient-to-br from-red-950 to-gray-900 border-2 border-red-700/50 rounded-2xl shadow-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {analysisResult.shadow_profile?.persona || 'Đang xây dựng hồ sơ...'}
            </h1>
            <p className="text-gray-300 italic mb-8 text-lg border-l-4 border-red-500 pl-4">
              &ldquo;{analysisResult.shadow_profile?.reasoning || 'Đang phân tích dữ liệu...'}&rdquo;
            </p>

            {/* Demographics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur rounded-xl p-6 border border-blue-600/30 shadow-lg">
                <div className="text-sm text-blue-300 mb-2 font-semibold">Độ tuổi ước tính</div>
                <div className="text-4xl font-black text-white">
                  {analysisResult.shadow_profile?.estimated_age || 'Không xác định'}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur rounded-xl p-6 border border-purple-600/30 shadow-lg">
                <div className="text-sm text-purple-300 mb-2 font-semibold">Giới tính ước tính</div>
                <div className="text-4xl font-black text-white">
                  {analysisResult.shadow_profile?.estimated_gender || 'Không xác định'}
                </div>
              </div>
            </div>

            {/* Behavioral Traits */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                <span className="text-2xl">🧠</span> Đặc điểm Hành vi
              </h3>
              <div className="flex flex-wrap gap-3">
                {(analysisResult.shadow_profile?.behavioral_traits || []).map((trait, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-yellow-900 to-yellow-800 border border-yellow-600 text-yellow-100 px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Targeting Profile */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Hồ sơ Quảng cáo
              </h3>
              <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border-2 border-green-600 rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-green-200">
                  {analysisResult.ad_targeting_profile || 'Người dùng chung'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PHẦN 4: KHAI THÁC KINH TẾ - QUY TRÌNH CÔNG NGHIỆP HÓA */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center font-bold text-xl shadow-lg animate-pulse">
                4
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Giá Trị Của 90 Giây
              </h2>
            </div>
            <p className="text-gray-300 mt-2 text-lg max-w-3xl mx-auto">
              90 giây của bạn đã đi qua một dây chuyền sản xuất. Đây là cách nó hoạt động:
            </p>
          </div>
          
          {/* TIMELINE VERTICAL */}
          <div className="relative pl-16">
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>
            
            <div className="space-y-10">
              {/* GIAI ĐOẠN 1: NGUYÊN LIỆU THÔ */}
              <div className="relative">
                <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-4 border-gray-900 flex items-center justify-center shadow-xl z-10">
                  <span className="text-white font-black text-xl">1</span>
                </div>
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur border border-blue-600/30 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">Thu thập Nguyên liệu thô</h3>
                  <p className="text-gray-300 mb-4">Thứ duy nhất bạn cung cấp: Sự chú ý.</p>
                  <div className="bg-gray-900/60 rounded-lg p-4">
                    <p className="text-gray-200 mb-3">
                      Bạn đã &ldquo;lao động&rdquo; trong <span className="font-bold text-yellow-300 text-lg">{analysisResult.activity_report?.total_attention_seconds?.toFixed(1)} giây</span>
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-blue-300">Giá trị Nguyên liệu:</span>
                      <span className="text-3xl font-black text-blue-400">{analysisResult.economic_exploitation?.attention_labor_value}</span>
                      <span className="text-blue-300">tokens</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mũi tên chuyển đổi */}
              <div className="flex items-center gap-3 py-2">
                <div className="text-4xl animate-bounce">⬇️</div>
                <p className="text-yellow-400 font-bold text-sm bg-yellow-900/30 px-4 py-2 rounded-full border border-yellow-600/30">
                  AI BIẾN ĐỔI DỮ LIỆU
                </p>
              </div>

              {/* GIAI ĐOẠN 2: SẢN PHẨM TINH CHẾ */}
              <div className="relative">
                <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 border-4 border-gray-900 flex items-center justify-center shadow-xl z-10">
                  <span className="text-white font-black text-xl">2</span>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur border border-purple-600/30 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">Tạo ra Sản phẩm</h3>
                  <p className="text-gray-300 mb-4">AI biến sự chú ý của bạn thành một hồ sơ quảng cáo có thể bán được.</p>
                  <div className="bg-gray-900/60 rounded-lg p-5">
                    <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-600/50 rounded-lg p-3 mb-5">
                      <p className="text-sm text-green-300 mb-1">Sản phẩm được tạo ra:</p>
                      <p className="text-xl font-bold text-white">{analysisResult.ad_targeting_profile}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-3 font-semibold">🏦 Cuộc đấu giá đang diễn ra:</p>
                    <div className="space-y-3">
                      {analysisResult.economic_exploitation?.bidders ? (
                        analysisResult.economic_exploitation.bidders.map((bidder, index) => (
                          <div key={index} className={`rounded-lg p-4 border-2 transition-all duration-300 ${
                            index === 2 
                              ? 'bg-gradient-to-r from-green-900 to-green-800 border-green-500 shadow-lg shadow-green-500/30' 
                              : 'bg-gray-800/80 border-gray-600'
                          }`}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-white text-lg">{bidder.name}</span>
                              <div className="flex items-center gap-2">
                                <span className={`font-black text-xl ${index === 2 ? 'text-green-300' : 'text-gray-300'}`}>
                                  {bidder.bid_amount}
                                </span>
                                <span className="text-gray-400">tokens</span>
                                {index === 2 && <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">THẮNG</span>}
                              </div>
                            </div>
                            <div className="flex items-start gap-2 text-sm">
                              <span className="text-yellow-400 text-lg">💡</span>
                              <p className="text-gray-300 italic">{bidder.targeting_reason}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                            <p className="text-gray-200">Thương hiệu Thời trang: <span className="font-bold text-gray-300">{((analysisResult.economic_exploitation?.profile_sale_value || 75) * 0.7).toFixed(0)} tokens</span></p>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-3 border border-gray-600">
                            <p className="text-gray-200">Dịch vụ Giao đồ ăn: <span className="font-bold text-gray-300">{((analysisResult.economic_exploitation?.profile_sale_value || 75) * 0.85).toFixed(0)} tokens</span></p>
                          </div>
                          <div className="bg-green-900 rounded-lg p-3 border-2 border-green-500">
                            <p className="text-white">Công ty Công nghệ (thắng): <span className="font-bold text-green-300 text-lg">{(analysisResult.economic_exploitation?.profile_sale_value || 75).toFixed(0)} tokens</span></p>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-purple-600/30 text-center">
                      <span className="text-purple-300">Giá trị Sản phẩm:</span>
                      <span className="text-4xl font-black text-purple-400 ml-2">{analysisResult.economic_exploitation?.profile_sale_value}</span>
                      <span className="text-purple-300 ml-1">tokens</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mũi tên chuyển đổi */}
              <div className="flex items-center gap-3 py-2">
                <div className="text-4xl animate-bounce">⬇️</div>
                <p className="text-red-400 font-bold text-sm bg-red-900/30 px-4 py-2 rounded-full border border-red-600/30">
                  TRÍCH XUẤT LỢI NHUẬN
                </p>
              </div>

              {/* GIAI ĐOẠN 3: LỢI NHUẬN THẶNG DƯ */}
              <div className="relative">
                <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 border-4 border-gray-900 flex items-center justify-center shadow-xl z-10">
                  <span className="text-white font-black text-xl">3</span>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-500 rounded-xl p-6 shadow-2xl shadow-red-500/30">
                  <h3 className="text-2xl font-bold text-red-200 mb-2">Thu hoạch Lợi nhuận</h3>
                  <p className="text-red-100 mb-4">Giá trị bạn tạo ra được chuyển thành lợi nhuận cho nền tảng.</p>
                  <div className="bg-black/40 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl mb-6">
                      <div className="text-center">
                        <p className="text-5xl font-black text-purple-400">{analysisResult.economic_exploitation?.profile_sale_value}</p>
                        <p className="text-sm text-gray-400 mt-1">(Giá trị Sản phẩm)</p>
                      </div>
                      <p className="text-red-400 font-black text-4xl">−</p>
                      <div className="text-center">
                        <p className="text-5xl font-black text-blue-400">{analysisResult.economic_exploitation?.attention_labor_value}</p>
                        <p className="text-sm text-gray-400 mt-1">(Tiền công của bạn)</p>
                      </div>
                      <p className="text-red-400 font-black text-4xl">=</p>
                      <div className="text-center">
                        <p className="text-6xl font-black text-green-400">{analysisResult.economic_exploitation?.surplus_value?.toFixed(2)}</p>
                        <p className="text-sm text-gray-400 mt-1">(Lợi nhuận Nền tảng)</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-red-600/50 pt-4">
                      <p className="text-xl text-red-200 italic text-center font-semibold">
                        {analysisResult.economic_exploitation?.exploitation_message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Ads */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🛒</span>
              <span className="text-red-400">Quảng cáo được Nhắm vào Bạn</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(analysisResult.suggested_ads || ['Đang phân tích...', 'Đang phân tích...', 'Đang phân tích...']).map((ad, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-600 rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">🎯</div>
                  <div className="font-bold text-red-100 text-lg">{ad}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PHẦN 5: LỜI KẾT & KÊU GỌI HÀNH ĐỘNG */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-blue-500 rounded-2xl p-10 text-center shadow-2xl shadow-blue-500/20">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Thông điệp Cuối cùng</h3>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-2xl text-gray-100 italic leading-relaxed">
                &ldquo;{analysisResult.closing_message || 'Thời gian rảnh của bạn là một nhà máy. Dữ liệu của bạn là sản phẩm. Chào mừng đến với nền kinh tế chú ý.'}&rdquo;
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
              <button
                onClick={resetGame}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:rotate-180 transition-transform duration-500">🔄</span>
                <span className="text-lg">Chơi lại</span>
              </button>
              <button
                onClick={() => window.location.href = 'https://privacyinternational.org/'}
                className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/50 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">📚</span>
                <span className="text-lg">Tìm hiểu thêm về Quyền riêng tư</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-gray-500 bg-gray-800/30 rounded-full px-6 py-3 inline-block border border-gray-700/50">
            🎮 Đây là một trò chơi mô phỏng giáo dục. Dữ liệu của bạn không được lưu trữ hay chia sẻ.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
