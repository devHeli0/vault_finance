import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { sername: 'jose' },
    };
    const response = await api.post('/validate', { token });
    return response.data;
  },
  signin: async (username: string, password: string) => {
    return {
      user: { username: 'mariom' },
      token: '123456789',
    };
    const response = await api.post('/signin', {
      username,
      password,
    });
    return response.data;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post('/logout');
    return response.data;
  },
});
