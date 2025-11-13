import { 
  POST_TEMPLATES, 
  EVENT_TEMPLATES, 
  BANNED_KEYWORDS, 
  GAME_CONFIG 
} from './constants';

// ============================================
// BƯỚC 1: ANALYZE & INFER - AI Profile Analysis
// ============================================

/**
 * Analyze user interactions to infer demographic information
 * This is called at the END of each day
 * CLIENT-SIDE VERSION: Calls Gemini directly from browser
 */
export async function analyzeUserProfile(currentProfile, interactionHistory) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn('⚠️ No Gemini API key found, skipping profile analysis');
    return { profile: currentProfile, reasoning: null };
  }
  
  try {
    console.log('🔍 Analyzing user profile with', interactionHistory.length, 'interactions...');
    
    if (interactionHistory.length === 0) {
      return { profile: currentProfile, message: 'No interactions to analyze yet' };
    }

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

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    // Retry logic for rate limits
    let response;
    let retries = 0;
    const maxRetries = 2;
    
    while (retries <= maxRetries) {
      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 500,
          }
        })
      });

      if (response.ok) break;
      
      if (response.status === 429 && retries < maxRetries) {
        const waitTime = (retries + 1) * 3000; // 3s, 6s
        console.log(`⏳ Rate limited, waiting ${waitTime/1000}s...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        retries++;
      } else {
        throw new Error(`Gemini API returned ${response.status}`);
      }
    }

    if (!response.ok) {
      throw new Error(`Gemini API returned ${response.status}`);
    }

    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;
    
    // Clean up response
    text = text.trim();
    if (text.startsWith('```json')) {
      text = text.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/```\n?/g, '');
    }
    
    const analysisResult = JSON.parse(text);
    
    if (!analysisResult.inferredAge || !analysisResult.inferredGender || !analysisResult.inferredPersonality) {
      throw new Error('Invalid analysis result format');
    }

    console.log('✅ Profile analysis completed:', analysisResult);
    
    return {
      profile: {
        inferredAge: analysisResult.inferredAge,
        inferredGender: analysisResult.inferredGender,
        inferredPersonality: analysisResult.inferredPersonality,
      },
      reasoning: analysisResult.reasoning
    };

  } catch (error) {
    console.error('❌ Failed to analyze profile:', error);
    return { profile: currentProfile, reasoning: null };
  }
}

// ============================================
// BƯỚC 2: RETARGET & GENERATE - Hybrid AI Curator
// ============================================

/**
 * Generate feed using Gemini API (CLIENT-SIDE)
 * This creates dynamic, unique content for each game session
 * Now uses demographic information for better targeting
 */
export async function generateFeedWithAI(aiProfile, day) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn('⚠️ No Gemini API key found, using templates');
    return null;
  }
  
  try {
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

    // Thông tin nhân khẩu học
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
- Nếu là Nam, 16-24, thích game → Đề xuất: giải đấu eSports, đánh giá gear gaming
- Nếu là Nữ, 16-24, thích mua sắm → Đề xuất: review mỹ phẩm, thời trang hot trend
- Nếu là 25-35, thích chính trị → Đề xuất: tin tức kinh tế, phân tích chính sách
- Nếu tính cách Cautious → Nội dung ít xâm phạm
- Nếu tính cách Risk-taker → Thêm khảo sát hấp dẫn

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
3. Các bài "trap" nên có action "survey"

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

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    // Retry logic for rate limits
    let response;
    let retries = 0;
    const maxRetries = 2;
    
    while (retries <= maxRetries) {
      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 1000,
          }
        })
      });

      if (response.ok) break;
      
      if (response.status === 429 && retries < maxRetries) {
        const waitTime = (retries + 1) * 3000; // 3s, 6s
        console.log(`⏳ Rate limited, waiting ${waitTime/1000}s...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        retries++;
      } else {
        throw new Error(`Gemini API returned ${response.status}`);
      }
    }

    if (!response.ok) {
      throw new Error(`Gemini API returned ${response.status}`);
    }

    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;
    
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

    console.log('✅ AI-generated feed received:', posts.length, 'posts');
    return posts;

  } catch (error) {
    console.error('❌ Failed to generate AI feed:', error);
    console.log('⚠️ Falling back to template-based feed');
    return null;
  }
}

/**
 * Original template-based feed generator (Fallback)
 * Used when AI generation fails or is disabled
 */
export function generateFeed(aiProfile) {
  const { interests } = aiProfile;
  
  // Find top 2 interest categories
  const sortedInterests = Object.entries(interests)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2)
    .map(([category]) => category);

  // If no interests yet, pick random categories
  if (sortedInterests.length === 0 || interests[sortedInterests[0]] === 0) {
    const categories = ['shopping', 'entertainment', 'politics', 'social'];
    sortedInterests.push(
      categories[Math.floor(Math.random() * categories.length)],
      categories[Math.floor(Math.random() * categories.length)]
    );
  }

  // Filter posts matching interests
  const relevantPosts = POST_TEMPLATES.filter(post => 
    sortedInterests.includes(post.category)
  );

  // If not enough posts, add random ones
  const otherPosts = POST_TEMPLATES.filter(post => 
    !sortedInterests.includes(post.category)
  );

  // Combine and shuffle
  const allPosts = [...relevantPosts, ...otherPosts];
  const shuffled = allPosts.sort(() => Math.random() - 0.5);

  // Select posts for feed (including at least one trap if possible)
  const feed = [];
  const trapPosts = shuffled.filter(p => p.isTrap);
  const normalPosts = shuffled.filter(p => !p.isTrap);

  // Add 1 trap post if available
  if (trapPosts.length > 0) {
    feed.push(trapPosts[0]);
  }

  // Fill remaining slots with normal posts
  const remainingSlots = GAME_CONFIG.POSTS_PER_FEED - feed.length;
  feed.push(...normalPosts.slice(0, remainingSlots));

  // Shuffle final feed
  return feed.sort(() => Math.random() - 0.5);
}

/**
 * Master feed generator - decides between AI or template
 */
export async function generateFeedHybrid(aiProfile, day) {
  const useAI = import.meta.env.VITE_USE_AI_GENERATION === 'true';
  
  if (useAI) {
    console.log('🤖 Using AI-powered feed generation...');
    const aiFeed = await generateFeedWithAI(aiProfile, day);
    if (aiFeed) {
      return aiFeed;
    }
  }
  
  // Fallback to template-based
  console.log('📋 Using template-based feed generation');
  return generateFeed(aiProfile);
}

// ============================================
// ADVERTISER AI - Creates monetization events
// ============================================
export function evaluateAndTriggerAdEvent(playerStats, aiProfile) {
  const { profileValue } = aiProfile;
  
  // Don't trigger if profile value too low
  if (profileValue < 30) {
    return null;
  }

  // Random chance to trigger event
  if (Math.random() > GAME_CONFIG.EVENT_PROBABILITY) {
    return null;
  }

  // Choose event type based on profile value
  if (profileValue >= 50) {
    // High value profile - offer to buy data
    const offerPrice = Math.floor(profileValue * (1 - GAME_CONFIG.SELL_DATA_PROFIT_MARGIN));
    
    return {
      ...EVENT_TEMPLATES.SELL_DATA,
      content: EVENT_TEMPLATES.SELL_DATA.getContent(profileValue, offerPrice),
      profileValue,
      offerPrice
    };
  } else {
    // Lower value - show targeted ad
    return EVENT_TEMPLATES.TARGETED_AD;
  }
}

// ============================================
// SENTINEL AI - Content moderation
// ============================================
export function scanContent(text) {
  if (!text) return null;

  const lowerText = text.toLowerCase();
  
  // Check for banned keywords
  for (const keyword of BANNED_KEYWORDS) {
    if (lowerText.includes(keyword.toLowerCase())) {
      return {
        ...EVENT_TEMPLATES.CONTENT_WARNING,
        content: EVENT_TEMPLATES.CONTENT_WARNING.getContent(keyword),
        detectedKeyword: keyword
      };
    }
  }

  return null;
}

// ============================================
// RANDOM EVENT GENERATOR
// ============================================
export function generateRandomEvent(day) {
  // No random events on first day
  if (day <= 1) return null;

  // Lower chance for random events
  if (Math.random() > 0.3) return null;

  // Choose random event
  const randomEvents = [
    EVENT_TEMPLATES.DATA_BREACH,
    EVENT_TEMPLATES.LUCKY_BONUS,
    EVENT_TEMPLATES.SUSPICIOUS_ACTIVITY
  ];

  const selectedEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
  
  return selectedEvent;
}

// ============================================
// MASTER EVENT COORDINATOR
// ============================================
export function coordinateEvent(state) {
  const { playerStats, aiProfile, gameFlow } = state;

  // Priority 1: Check if there's a content warning needed (would come from user comment)
  // This would be triggered by actual user input, so we'll skip for now

  // Priority 2: Advertiser AI events
  const adEvent = evaluateAndTriggerAdEvent(playerStats, aiProfile);
  if (adEvent) {
    return adEvent;
  }

  // Priority 3: Random events
  const randomEvent = generateRandomEvent(gameFlow.day);
  if (randomEvent) {
    return randomEvent;
  }

  // No event this turn
  return null;
}

// ============================================
// AI PROFILE ANALYZER
// ============================================
export function analyzePlayerProfile(aiProfile) {
  const { interests, profileValue } = aiProfile;
  
  // Determine dominant interest
  const dominantInterest = Object.entries(interests)
    .sort(([, a], [, b]) => b - a)[0];

  const interestNames = {
    shopping: 'Mua sắm',
    entertainment: 'Giải trí',
    politics: 'Chính trị',
    social: 'Mạng xã hội'
  };

  const analysis = {
    dominantInterest: dominantInterest ? interestNames[dominantInterest[0]] : 'Chưa xác định',
    interestScore: dominantInterest ? dominantInterest[1] : 0,
    profileValue,
    marketability: profileValue > 50 ? 'Cao' : profileValue > 20 ? 'Trung bình' : 'Thấp'
  };

  return analysis;
}

// ============================================
// BOT BEHAVIOR SIMULATOR (for leaderboard)
// ============================================
export function simulateBotAction(botStrategy, day) {
  const { interactionRate, sellDataRate, privacyAwareness } = botStrategy;
  
  // Simulate token earning based on interaction rate
  const baseTokens = Math.floor(interactionRate * 20 * day);
  
  // Simulate privacy loss (inverse of awareness)
  const privacyLoss = Math.floor((1 - privacyAwareness) * 10 * day);
  
  // Simulate data selling decisions
  const soldData = Math.random() < sellDataRate;
  const bonusTokens = soldData ? 30 : 0;
  const extraPrivacyLoss = soldData ? 20 : 0;
  
  return {
    tokens: baseTokens + bonusTokens,
    privacyLoss: privacyLoss + extraPrivacyLoss
  };
}
