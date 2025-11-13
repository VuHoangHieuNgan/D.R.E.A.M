// ============================================
// GEMINI API - Analyze User Profile
// ============================================
// Bước 1: Phân tích & Suy luận (Analyze & Infer)
// Endpoint này phân tích hành vi người chơi để suy luận thông tin nhân khẩu học

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { currentProfile, interactionHistory } = req.body;

    if (!interactionHistory || !Array.isArray(interactionHistory)) {
      return res.status(400).json({ error: 'Missing interactionHistory array' });
    }

    // Nếu chưa có tương tác nào, không cần phân tích
    if (interactionHistory.length === 0) {
      return res.status(200).json({
        success: true,
        profile: currentProfile,
        message: 'No interactions to analyze yet'
      });
    }

    // Tạo prompt phân tích
    const recentInteractions = interactionHistory.slice(-10).join('\n- '); // Lấy 10 tương tác gần nhất

    const prompt = `Bạn là một AI phân tích dữ liệu người dùng trong một game giáo dục về quyền riêng tư. 
Nhiệm vụ của bạn là xây dựng một hồ sơ nhân khẩu học dựa trên hành vi của họ.

**Hồ sơ hiện tại của người dùng:**
- Tuổi ước tính: ${currentProfile.inferredAge || 'unknown'}
- Giới tính ước tính: ${currentProfile.inferredGender || 'unknown'}
- Tính cách ước tính: ${currentProfile.inferredPersonality || 'unknown'}

**Lịch sử tương tác gần đây:**
- ${recentInteractions}

**Nhiệm vụ của bạn:**
Dựa trên lịch sử tương tác MỚI, hãy cập nhật ước tính về độ tuổi, giới tính và tính cách của người dùng.

**Hướng dẫn phân tích:**
- **Độ tuổi**: '16-24' (thích game, mạng xã hội, trend), '25-35' (quan tâm sự nghiệp, công nghệ mới), '35+' (quan tâm chính trị, tài chính)
- **Giới tính**: 'Male', 'Female' (dựa trên pattern quan tâm, nhưng KHÔNG stereotype quá mức)
- **Tính cách**: 'Cautious' (ít tương tác, skip nhiều, từ chối khảo sát), 'Risk-taker' (tương tác nhiều, chia sẻ dữ liệu), 'Balanced' (cân bằng)

**Quan trọng:**
- Nếu chưa đủ thông tin, giữ nguyên giá trị 'unknown'
- Đưa ra lý do ngắn gọn cho mỗi suy luận
- Phân tích dựa trên thực tế, không phán xét

Trả về kết quả dưới dạng JSON với format:
{
  "inferredAge": "16-24",
  "inferredGender": "Female",
  "inferredPersonality": "Risk-taker",
  "reasoning": {
    "age": "Người dùng tương tác nhiều với nội dung về game và mạng xã hội, đặc trưng của nhóm tuổi trẻ",
    "gender": "Quan tâm đến skincare và thời trang, thường là nữ giới",
    "personality": "Tương tác với nhiều bài đăng, ít skip, sẵn sàng làm khảo sát"
  }
}

CHỈ TRẢ VỀ JSON, KHÔNG THÊM TEXT NÀO KHÁC.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.5, // Giảm temperature để phân tích chính xác hơn
        maxOutputTokens: 500,
      }
    });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up response
    text = text.trim();
    if (text.startsWith('```json')) {
      text = text.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/```\n?/g, '');
    }
    
    const analysisResult = JSON.parse(text);
    
    // Validate kết quả
    if (!analysisResult.inferredAge || !analysisResult.inferredGender || !analysisResult.inferredPersonality) {
      throw new Error('Invalid analysis result format');
    }

    console.log('Profile analysis completed:', {
      age: analysisResult.inferredAge,
      gender: analysisResult.inferredGender,
      personality: analysisResult.inferredPersonality
    });

    return res.status(200).json({
      success: true,
      profile: {
        inferredAge: analysisResult.inferredAge,
        inferredGender: analysisResult.inferredGender,
        inferredPersonality: analysisResult.inferredPersonality,
      },
      reasoning: analysisResult.reasoning,
      metadata: {
        analyzed_at: new Date().toISOString(),
        interactions_analyzed: interactionHistory.length
      }
    });

  } catch (error) {
    console.error('Error analyzing profile:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to analyze profile',
      message: error.message
    });
  }
}
