import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
/*
Before every request is sent, the interceptor checks if there's a token in localStorage (or wherever you stored it).
If it exists, it adds an Authorization: Bearer <token> header to the request.
this ensures all authenticated routes will automatically receive the token without manual effort.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;