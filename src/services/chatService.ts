import { ChatRequest, ChatResponse, Message } from '@/types';
import apiService from './api';
import { API_ENDPOINTS } from '@/utils/constants';

export const chatService = {
  sendMessage: async (request: ChatRequest): Promise<ChatResponse> => {
    return apiService.post(API_ENDPOINTS.CHAT.SEND, request);
  },

  getChatHistory: async (chatId?: string) => {
    const url = chatId
      ? `${API_ENDPOINTS.CHAT.HISTORY}?chatId=${chatId}`
      : API_ENDPOINTS.CHAT.HISTORY;
    return apiService.get(url);
  },

  deleteChat: async (chatId: string) => {
    return apiService.delete(API_ENDPOINTS.CHAT.DELETE(chatId));
  },

  updateChat: async (chatId: string, data: unknown) => {
    return apiService.put(API_ENDPOINTS.CHAT.UPDATE(chatId), data);
  },

  exportChat: async (chatId: string) => {
    return apiService.get(`/chat/export/${chatId}`);
  },
};
