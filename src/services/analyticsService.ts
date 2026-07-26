import apiService from './api';
import { UserAnalytics } from '@/types';

export const analyticsService = {
  getAnalytics: async (): Promise<UserAnalytics> => {
    return apiService.get('/analytics');
  },

  trackEvent: async (eventName: string, data?: unknown) => {
    return apiService.post('/analytics/track', {
      event: eventName,
      data,
      timestamp: new Date(),
    });
  },
};
