import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://192.168.6.191:3336',
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, (error) => {
    return Promise.reject(error);
});

export default instance;