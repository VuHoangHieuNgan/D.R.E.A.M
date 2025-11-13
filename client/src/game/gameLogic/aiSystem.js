import { 
  POST_TEMPLATES, 
  EVENT_TEMPLATES, 
  BANNED_KEYWORDS, 
  GAME_CONFIG 
} from './constants';

// ============================================
// HYBRID AI CURATOR - Generates personalized feed
// ============================================

/**
 * Generate feed using AI API (OpenAI)
 * This creates dynamic, unique content for each game session
 */
export async function generateFeedWithAI(aiProfile, day) {
  const apiURL = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000';
  
  try {
    const response = await fetch(`${apiURL}/api/generate-feed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        aiProfile,
        day
      }),
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success && data.posts) {
      console.log('✅ AI-generated feed received:', data.posts.length, 'posts');
      return data.posts;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('❌ Failed to generate AI feed:', error);
    console.log('⚠️ Falling back to template-based feed');
    // Fallback to template-based generation
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
