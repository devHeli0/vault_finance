import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async () => {
    const answer = await api.get('/auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return answer;
  },
  signIn: async (username: string, password: string) => {
    const answer = await api.post('/', { username, password });
    return answer.data;
  },
  resume: async () => {
    const answer = await api.get('/account', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return answer;
  },
  transaction: async (username: string, value: number) => {
    const answer = await api.post('/transaction',{username, value}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return answer;
  },
  transactionList: async () => {
    const answer = await api.get('/transaction', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          'AccessToken'
        )}`,
      },
    });
    return answer;
  },
});
