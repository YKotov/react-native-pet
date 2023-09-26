import { AxiosResponse } from 'axios';
import apiService from '../rest';

export const auth = {
  getAuthState: (userId: number): Promise<AxiosResponse<{id: number; state: boolean}>> => {
    return apiService.get(`/auth/${userId}`);
  },
  updateAuthState: (userId: number, data: {state: boolean}): Promise<AxiosResponse<void>> => {
    return apiService.put(`/auth/${userId}`, data);
  },
};
