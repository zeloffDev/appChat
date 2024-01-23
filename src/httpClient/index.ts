import { LOCAL_STORE_NAME } from "@/constants/LocalStore";
import { getLocalStorageItem } from "@/utils/LocalStore";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}
const REACT_APP_BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

export const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    const token = getLocalStorageItem(LOCAL_STORE_NAME.TOKEN);
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response): Promise<any> => {
    return response;
  },
  async (error): Promise<any> => {
    return Promise.reject(error);
  }
);
