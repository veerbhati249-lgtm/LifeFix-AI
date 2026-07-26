// User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  theme: 'dark' | 'light';
  createdAt: Date;
  updatedAt: Date;
}

// Chat Types
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  model?: string;
  tokens?: number;
  citations?: string[];
  codeLanguage?: string;
}

export interface Chat {
  id: string;
  userId: string;
  title: string;
  description?: string;
  messages: Message[];
  tool?: string;
  starred: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// AI Tools Types
export interface AITool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  enabled: boolean;
  route: string;
  features: string[];
  gradient: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  toolCount: number;
}

// Subscription Types
export interface Subscription {
  id: string;
  userId: string;
  plan: 'starter' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'cancelled';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  autoRenew: boolean;
  price: number;
  currency: string;
  features: SubscriptionFeature[];
}

export interface SubscriptionFeature {
  name: string;
  limit: number;
  used: number;
}

// Bookmark Types
export interface Bookmark {
  id: string;
  userId: string;
  chatId: string;
  messageId: string;
  content: string;
  createdAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'update' | 'alert' | 'subscription';
  title: string;
  content: string;
  read: boolean;
  link?: string;
  createdAt: Date;
}

// Settings Types
export interface UserSettings {
  userId: string;
  theme: 'dark' | 'light';
  language: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  accessibility: AccessibilitySettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  updates: boolean;
  marketing: boolean;
}

export interface PrivacySettings {
  shareData: boolean;
  publicProfile: boolean;
  allowAnalytics: boolean;
}

export interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'normal' | 'large';
}

// File Upload Types
export interface FileUpload {
  id: string;
  userId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url: string;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ChatRequest {
  message: string;
  chatId?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatResponse {
  id: string;
  message: Message;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// Image Generation Types
export interface ImageGenerationRequest {
  prompt: string;
  style?: string;
  size?: 'small' | 'medium' | 'large';
  count?: number;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
}

// Pricing Types
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  description: string;
  features: string[];
  highlighted: boolean;
  popular?: boolean;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogComment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: Date;
}

// Analytics Types
export interface UserAnalytics {
  userId: string;
  totalChats: number;
  totalMessages: number;
  totalTokensUsed: number;
  lastActiveAt: Date;
  toolsUsed: ToolUsage[];
  weeklyActivity: DailyActivity[];
}

export interface ToolUsage {
  toolId: string;
  toolName: string;
  count: number;
  lastUsedAt: Date;
}

export interface DailyActivity {
  date: string;
  count: number;
}

// Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// Context Types
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  setTheme: (theme: 'dark' | 'light') => void;
}
