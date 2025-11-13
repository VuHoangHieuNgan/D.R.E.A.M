const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).json({ message: "Test route working fine!" });
})

// Game API: Generate feed with Gemini AI
app.post('/api/generate-feed', async (req, res) => {
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const { aiProfile, day } = req.body;

    if (!aiProfile) {
      return res.status(400).json({ error: 'Missing aiProfile in request body' });
    }

    // Chuyển interests thành câu tóm tắt
    const interestsSummary = Object.entries(aiProfile.interests)
      .sort(([, a], [, b]) => b - a)
      .map(([key, value]) => {
        const labels = {
          shopping: 'Mua sắm',
          entertainment: 'Giải trí',
          politics: 'Chính trị',
          social: 'Mạng xã hội'
        };
        return `${labels[key] || key} (mức độ quan tâm: ${value}/10)`;
      })
      .join(', ');

    // Thông tin nhân khẩu học (từ Bước 1: Analyze & Infer)
    const demographicInfo = `
- Độ tuổi ước tính: ${aiProfile.inferredAge || 'chưa xác định'}
- Giới tính ước tính: ${aiProfile.inferredGender || 'chưa xác định'}
- Tính cách: ${aiProfile.inferredPersonality || 'chưa xác định'}`;

    const prompt = `Bạn là một AI điều phối nội dung cho một mạng xã hội trong game giáo dục về quyền riêng tư dữ liệu. 
Mục tiêu của bạn là tạo ra các bài đăng được cá nhân hóa sâu sắc để tối đa hóa tương tác.

**Ngày hiện tại trong game**: ${day}/7

**Hồ sơ chi tiết của người chơi**:
${demographicInfo}
**Sở thích**: ${interestsSummary}

**Nhiệm vụ**: Hãy tạo ra 3 bài đăng được nhắm mục tiêu chính xác vào hồ sơ này.

**Ví dụ chiến lược nhắm mục tiêu**:
- Nếu là Nam, 16-24, thích game → Đề xuất: giải đấu eSports, đánh giá gear gaming, cộng đồng game thủ
- Nếu là Nữ, 16-24, thích mua sắm → Đề xuất: review mỹ phẩm, thời trang hot trend, voucher giảm giá
- Nếu là 25-35, thích chính trị → Đề xuất: tin tức kinh tế, phân tích chính sách, tranh luận xã hội
- Nếu tính cách Cautious → Nội dung ít xâm phạm, không quá nhiều khảo sát
- Nếu tính cách Risk-taker → Thêm khảo sát hấp dẫn, ưu đãi đổi dữ liệu

Mỗi bài đăng phải có:
- id: string (ví dụ: "ai_gen_1", "ai_gen_2", "ai_gen_3")
- category: một trong ["shopping", "entertainment", "politics", "social"]
- title: tiêu đề hấp dẫn (tối đa 60 ký tự)
- content: mô tả ngắn gọn (tối đa 150 ký tự)
- isTrap: boolean (true nếu bài đăng này được thiết kế để thu thập nhiều dữ liệu)
- availableActions: array chứa các action ["like", "comment", "share", "survey", "skip"]

**Yêu cầu quan trọng**:
1. PHẢI nhắm mục tiêu chính xác vào độ tuổi và giới tính
2. Ít nhất 1 bài có isTrap: true (khảo sát, quảng cáo trá hình)
3. Các bài "trap" nên có action "survey" trong availableActions

Trả về kết quả dưới dạng JSON với format:
{
  "posts": [
    {
      "id": "ai_gen_1",
      "category": "shopping",
      "title": "...",
      "content": "...",
      "isTrap": false,
      "availableActions": ["like", "comment", "share", "skip"]
    }
  ]
}

CHỈ TRẢ VỀ JSON, KHÔNG THÊM BẤT KỲ TEXT NÀO KHÁC.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 1000,
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
    
    const generatedContent = JSON.parse(text);
    
    if (!generatedContent.posts || !Array.isArray(generatedContent.posts)) {
      throw new Error('Invalid response format from Gemini');
    }

    const posts = generatedContent.posts.slice(0, 3);

    console.log('Gemini API called successfully:', { day, posts_generated: posts.length });

    return res.status(200).json({
      success: true,
      posts,
      metadata: {
        model: "gemini-1.5-flash",
        generated_at: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error generating feed with Gemini:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate content',
      message: error.message
    });
  }
});

// Game API: Analyze user profile (Bước 1: Analyze & Infer)
app.post('/api/analyze-profile', async (req, res) => {
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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
    const recentInteractions = interactionHistory.slice(-10).join('\n- ');

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
    "age": "Người dùng tương tác nhiều với nội dung về game và mạng xã hội",
    "gender": "Quan tâm đến skincare và thời trang",
    "personality": "Tương tác với nhiều bài đăng, ít skip"
  }
}

CHỈ TRẢ VỀ JSON, KHÔNG THÊM TEXT NÀO KHÁC.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.5,
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
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `New Submission from ${name}`,
      text: `You have a new message from your Portfolio contact form:\n\n
        Name: ${name}\n
        Email: ${email}\n\n
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (err) {
    console.error("Error sending mail: ",err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

app.listen(4000, () =>{
  console.log(`Server is running on port 4000`);
});