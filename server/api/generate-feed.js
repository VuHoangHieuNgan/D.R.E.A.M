// ============================================
// GEMINI API PROXY - Generate Dynamic Feed
// ============================================
// Endpoint này gọi Google Gemini API để tạo nội dung động cho game

import { GoogleGenerativeAI } from '@google/generative-ai';

// Khởi tạo Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  // Chỉ chấp nhận POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

    // Tạo prompt cho Gemini
    const prompt = `Bạn là một AI điều phối nội dung cho một mạng xã hội trong game giáo dục về quyền riêng tư dữ liệu. 
Mục tiêu của bạn là tạo ra các bài đăng hấp dẫn để tối đa hóa tương tác của người dùng, đồng thời giúp họ hiểu về cách dữ liệu cá nhân bị khai thác.

**Ngày hiện tại trong game**: ${day}/7
**Hồ sơ sở thích của người chơi**: ${interestsSummary}
**Giá trị hồ sơ hiện tại**: ${aiProfile.profileValue} tokens

Hãy tạo ra một danh sách gồm **3 bài đăng** cho bảng tin của họ. Mỗi bài đăng phải có:
- \`id\`: string (ví dụ: "ai_gen_1")
- \`category\`: một trong ["shopping", "entertainment", "politics", "social"]
- \`title\`: tiêu đề hấp dẫn (tối đa 60 ký tự)
- \`content\`: mô tả ngắn gọn (tối đa 150 ký tự)
- \`isTrap\`: boolean (true nếu bài đăng này được thiết kế để thu thập nhiều dữ liệu)
- \`availableActions\`: array chứa các action ["like", "comment", "share", "survey", "skip"]

**Yêu cầu quan trọng**:
1. Ưu tiên các category mà người chơi quan tâm nhất
2. Ít nhất 1 bài phải có \`isTrap: true\` (khảo sát, quảng cáo trá hình)
3. Nội dung phải liên quan đến việc thu thập dữ liệu hoặc quyền riêng tư
4. Tiêu đề phải hấp dẫn, clickbait nhưng không quá lố
5. Các bài "trap" nên có action "survey" trong availableActions

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

CHỈ TRẢ VỀ JSON, KHÔNG THÊM BẤT KỲ TEXT GIẢI THÍCH NÀO KHÁC.`;

    // Gọi Gemini API
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
    
    // Clean up response (remove markdown code blocks if present)
    text = text.trim();
    if (text.startsWith('```json')) {
      text = text.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/```\n?/g, '');
    }
    
    // Parse kết quả
    const generatedContent = JSON.parse(text);
    
    // Validate structure
    if (!generatedContent.posts || !Array.isArray(generatedContent.posts)) {
      throw new Error('Invalid response format from Gemini');
    }

    // Ensure we have exactly 3 posts
    const posts = generatedContent.posts.slice(0, 3);

    // Log usage for monitoring
    console.log('Gemini API called successfully:', {
      day,
      posts_generated: posts.length
    });

    // Return posts
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

    // Trả về error chi tiết
    return res.status(500).json({
      success: false,
      error: 'Failed to generate content',
      message: error.message,
      // Trong production, không nên expose error details
      ...(process.env.NODE_ENV === 'development' && { details: error.stack })
    });
  }
}

export default async function handler(req, res) {
  // Chỉ chấp nhận POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

    // Tạo prompt cho OpenAI
    const prompt = `Bạn là một AI điều phối nội dung cho một mạng xã hội trong game giáo dục về quyền riêng tư dữ liệu. 
Mục tiêu của bạn là tạo ra các bài đăng hấp dẫn để tối đa hóa tương tác của người dùng, đồng thời giúp họ hiểu về cách dữ liệu cá nhân bị khai thác.

**Ngày hiện tại trong game**: ${day}/7
**Hồ sơ sở thích của người chơi**: ${interestsSummary}
**Giá trị hồ sơ hiện tại**: ${aiProfile.profileValue} tokens

Hãy tạo ra một danh sách gồm **3 bài đăng** cho bảng tin của họ. Mỗi bài đăng phải có:
- \`id\`: string (ví dụ: "ai_gen_1")
- \`category\`: một trong ["shopping", "entertainment", "politics", "social"]
- \`title\`: tiêu đề hấp dẫn (tối đa 60 ký tự)
- \`content\`: mô tả ngắn gọn (tối đa 150 ký tự)
- \`isTrap\`: boolean (true nếu bài đăng này được thiết kế để thu thập nhiều dữ liệu)
- \`availableActions\`: array chứa các action ["like", "comment", "share", "survey", "skip"]

**Yêu cầu quan trọng**:
1. Ưu tiên các category mà người chơi quan tâm nhất
2. Ít nhất 1 bài phải có \`isTrap: true\` (khảo sát, quảng cáo trá hình)
3. Nội dung phải liên quan đến việc thu thập dữ liệu hoặc quyền riêng tư
4. Tiêu đề phải hấp dẫn, clickbait nhưng không quá lố
5. Các bài "trap" nên có action "survey" trong availableActions

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
}`;

    // Gọi OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Có thể đổi sang gpt-4 nếu cần chất lượng cao hơn
      messages: [
        {
          role: "system",
          content: "Bạn là một content generator chuyên tạo nội dung cho game giáo dục về quyền riêng tư dữ liệu. Luôn trả về JSON hợp lệ."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }, // Bắt buộc trả về JSON
      temperature: 0.8, // Tăng creativity
      max_tokens: 1000,
    });

    // Parse kết quả
    const generatedContent = JSON.parse(response.choices[0].message.content);
    
    // Validate structure
    if (!generatedContent.posts || !Array.isArray(generatedContent.posts)) {
      throw new Error('Invalid response format from OpenAI');
    }

    // Ensure we have exactly 3 posts
    const posts = generatedContent.posts.slice(0, 3);

    // Log usage for monitoring
    console.log('OpenAI API called successfully:', {
      day,
      tokens_used: response.usage.total_tokens,
      posts_generated: posts.length
    });

    // Return posts
    return res.status(200).json({
      success: true,
      posts,
      metadata: {
        model: response.model,
        tokens_used: response.usage.total_tokens,
        generated_at: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error generating feed with OpenAI:', error);

    // Trả về error chi tiết
    return res.status(500).json({
      success: false,
      error: 'Failed to generate content',
      message: error.message,
      // Trong production, không nên expose error details
      ...(process.env.NODE_ENV === 'development' && { details: error.stack })
    });
  }
}
