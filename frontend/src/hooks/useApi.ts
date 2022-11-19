import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useAPI = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/auth');
    return response.data
  },
  signin: async (username: string, password: string) => {
    const response = await api.post('/signin', {
      username,
      password,
    });
    return {'resposta falsa'}
    return response.data;
  },
  signout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },
});
