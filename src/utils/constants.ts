// API Constants
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8888/.netlify/functions';
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    RESET_PASSWORD: '/auth/reset-password',
  },
  CHAT: {
    SEND: '/chat',
    HISTORY: '/chat/history',
    DELETE: (id: string) => `/chat/${id}`,
    UPDATE: (id: string) => `/chat/${id}`,
  },
  TOOLS: {
    LIST: '/tools',
    GET: (id: string) => `/tools/${id}`,
  },
  IMAGE: {
    GENERATE: '/image/generate',
    LIST: '/image/list',
  },
  UPLOAD: {
    FILE: '/upload',
  },
  ANALYTICS: {
    GET: '/analytics',
    TRACK: '/analytics/track',
  },
};

// Gemini API
export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const GEMINI_MODEL = 'gemini-pro';
export const GEMINI_VISION_MODEL = 'gemini-pro-vision';

// Firebase
export const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Supabase
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'lifefix_auth_token',
  USER: 'lifefix_user',
  THEME: 'lifefix_theme',
  LANGUAGE: 'lifefix_language',
  CHATS: 'lifefix_chats',
  SETTINGS: 'lifefix_settings',
};

// UI Constants
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 1000,
};

export const COLORS = {
  PURPLE_PRIMARY: '#a855f7',
  PURPLE_DARK: '#7e22ce',
  BLUE_ACCENT: '#0ea5e9',
  DARK_BG: '#111827',
  DARK_SECONDARY: '#1f2937',
  DARK_BORDER: '#374151',
};

// Tool Definitions
export const AI_TOOLS = [
  {
    id: 'chat',
    name: 'AI Chat',
    description: 'Chat with AI for instant answers',
    icon: 'MessageCircle',
    category: 'Communication',
    route: '/tools/chat',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'image',
    name: 'Image Generator',
    description: 'Generate stunning images from text',
    icon: 'Image',
    category: 'Creative',
    route: '/tools/image',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'resume',
    name: 'Resume Builder',
    description: 'Create professional resumes',
    icon: 'FileText',
    category: 'Career',
    route: '/tools/resume',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'study',
    name: 'Study Assistant',
    description: 'AI-powered learning companion',
    icon: 'BookOpen',
    category: 'Education',
    route: '/tools/study',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'code',
    name: 'Code Assistant',
    description: 'Programming help and code review',
    icon: 'Code',
    category: 'Development',
    route: '/tools/code',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'health',
    name: 'Health Assistant',
    description: 'Health and wellness support',
    icon: 'Heart',
    category: 'Health',
    route: '/tools/health',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 'translator',
    name: 'Translator',
    description: 'Multi-language translation',
    icon: 'Globe',
    category: 'Language',
    route: '/tools/translator',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'grammar',
    name: 'Grammar Checker',
    description: 'Writing improvement tool',
    icon: 'CheckCircle',
    category: 'Writing',
    route: '/tools/grammar',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'math',
    name: 'Math Solver',
    description: 'Mathematical problem solving',
    icon: 'Calculator',
    category: 'Education',
    route: '/tools/math',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'email',
    name: 'Email Writer',
    description: 'Email composition assistance',
    icon: 'Mail',
    category: 'Communication',
    route: '/tools/email',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'business',
    name: 'Business Assistant',
    description: 'Business solutions and advice',
    icon: 'Briefcase',
    category: 'Business',
    route: '/tools/business',
    gradient: 'from-slate-500 to-gray-500',
  },
  {
    id: 'voice',
    name: 'Voice AI',
    description: 'Speech-to-text and text-to-speech',
    icon: 'Mic',
    category: 'Voice',
    route: '/tools/voice',
    gradient: 'from-blue-500 to-purple-500',
  },
];

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'month' as const,
    description: 'Perfect for getting started',
    features: [
      'Up to 10 chats per day',
      'Basic AI tools',
      'Community support',
      '1 GB storage',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: 'month' as const,
    description: 'Best for power users',
    features: [
      'Unlimited chats',
      'All premium tools',
      'Priority support',
      '100 GB storage',
      'Advanced analytics',
      'API access',
    ],
    highlighted: true,
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    period: 'month' as const,
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management',
      'Custom integrations',
      'Unlimited storage',
      'Dedicated support',
      'SLA guaranteed',
      'Custom AI models',
    ],
    highlighted: false,
  },
];

// Languages
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
];

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  AUTH_ERROR: 'Authentication failed. Please log in again.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  WEAK_PASSWORD: 'Password must be at least 8 characters.',
  USER_NOT_FOUND: 'User not found.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  EMAIL_ALREADY_EXISTS: 'Email already registered.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
  FILE_TOO_LARGE: 'File size exceeds maximum limit.',
  INVALID_FILE_TYPE: 'Invalid file type.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  PASSWORD_RESET_SENT: 'Password reset email sent!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  CHAT_SAVED: 'Chat saved successfully!',
  CHAT_DELETED: 'Chat deleted successfully!',
  FILE_UPLOADED: 'File uploaded successfully!',
};
