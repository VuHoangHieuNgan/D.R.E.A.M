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

    const prompt = `Bạn là một AI điều phối nội dung cho một mạng xã hội trong game giáo dục về quyền riêng tư dữ liệu. 
Mục tiêu của bạn là tạo ra các bài đăng hấp dẫn để tối đa hóa tương tác của người dùng.

**Ngày hiện tại trong game**: ${day}/7
**Hồ sơ sở thích của người chơi**: ${interestsSummary}

Hãy tạo ra một danh sách gồm **3 bài đăng** cho bảng tin của họ. Mỗi bài đăng phải có:
- id: string (ví dụ: "ai_gen_1", "ai_gen_2", "ai_gen_3")
- category: một trong ["shopping", "entertainment", "politics", "social"]
- title: tiêu đề hấp dẫn (tối đa 60 ký tự)
- content: mô tả ngắn gọn (tối đa 150 ký tự)
- isTrap: boolean (true nếu bài đăng này được thiết kế để thu thập nhiều dữ liệu)
- availableActions: array chứa các action ["like", "comment", "share", "survey", "skip"]

**Yêu cầu quan trọng**:
1. Ưu tiên các category mà người chơi quan tâm nhất
2. Ít nhất 1 bài phải có isTrap: true (khảo sát, quảng cáo trá hình)
3. Nội dung phải liên quan đến việc thu thập dữ liệu hoặc quyền riêng tư
4. Các bài "trap" nên có action "survey" trong availableActions

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