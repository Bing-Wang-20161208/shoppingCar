import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求之前做些什么
        // 例如：添加 token
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        message.error('请求发送失败');
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么
        const { code, data, message: msg } = response.data;

        if (code === 200) {
            return data;
        }

        // 处理业务错误
        message.error(msg || '请求失败');
        return Promise.reject(new Error(msg || '请求失败'));
    },
    (error) => {
        // 对响应错误做点什么
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    message.error('未授权，请重新登录');
                    // 可以在这里处理登出逻辑
                    break;
                case 403:
                    message.error('拒绝访问');
                    break;
                case 404:
                    message.error('请求错误，未找到该资源');
                    break;
                case 500:
                    message.error('服务器错误');
                    break;
                default:
                    message.error(`连接错误${error.response.status}`);
            }
        } else {
            message.error('连接到服务器失败');
        }
        return Promise.reject(error);
    }
);

// 导出请求方法
export const request = {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return instance.get(url, config);
    },

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return instance.post(url, data, config);
    },

    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return instance.put(url, data, config);
    },

    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return instance.delete(url, config);
    }
};

export default request;