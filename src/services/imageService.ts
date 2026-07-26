import { GeneratedImage, ImageGenerationRequest } from '@/types';
import apiService from './api';
import { API_ENDPOINTS } from '@/utils/constants';

export const imageService = {
  generateImage: async (request: ImageGenerationRequest): Promise<GeneratedImage> => {
    return apiService.post(API_ENDPOINTS.IMAGE.GENERATE, request);
  },

  getImages: async () => {
    return apiService.get(API_ENDPOINTS.IMAGE.LIST);
  },

  deleteImage: async (imageId: string) => {
    return apiService.delete(`/image/${imageId}`);
  },
};
