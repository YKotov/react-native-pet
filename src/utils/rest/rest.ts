import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClient {
  private instance: AxiosInstance;
  private apiUrl = "https://650f083254d18aabfe99c2ef.mockapi.io/v1/";

  constructor() {
    this.instance = axios.create({ baseURL: this.apiUrl });
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  private handleSuccess<T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  }

  private handleError(error: any): Promise<never> {
    console.error('Request error:', error);
    throw error;
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }

  get<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
    return this.instance.get(url, { params });
  }

  post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data);
  }

  put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data);
  }

  delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.instance.delete(url);
  }
}

const api = new ApiClient();
export default api;
