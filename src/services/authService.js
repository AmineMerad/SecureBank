import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/auth';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  try {
    console.log('Making registration request to:', API_URL);
    console.log('Environment:', import.meta.env.MODE);
    console.log('API URL from env:', import.meta.env.VITE_API_URL);
    
    const response = await api.post('/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Registration response:', response.data);
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Registration error details:', {
      error: error,
      response: error.response,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw error.response?.data?.message || error.message || 'An error occurred during registration';
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Invalid email or password';
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}; 