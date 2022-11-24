import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async () => {
    const response = await api.get('/auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return response;
  },
  signIn: async (username: string, password: string) => {
    const answer = await api.post('/', { username, password });
    return answer.data.message;
  },
  resume: async () => {
    const response = await api.get('/account', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return response;
  },
  transaction: async (username: string, value: number) => {
    const response = await api.post('/transaction',{username, value}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return response;
  },
  transactionList: async () => {
    const response = await api.get('/transaction', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return response;
  },
});
