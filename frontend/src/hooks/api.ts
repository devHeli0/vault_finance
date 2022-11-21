import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (AcessToken: string) => {
    const response = await api.post('/', { AcessToken });
    return response.data.AcessToken;
  },
  signIn: async (username: string, password: string) => {
    const answer = await api.post('/', { username, password });
    return answer.data;
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response;
  },
});
