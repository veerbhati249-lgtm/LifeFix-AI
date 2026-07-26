import apiService from './api';
import { API_ENDPOINTS } from '@/utils/constants';

export const uploadService = {
  uploadFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiService.post(API_ENDPOINTS.UPLOAD.FILE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  uploadFiles: async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    return apiService.post('/upload/multiple', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
