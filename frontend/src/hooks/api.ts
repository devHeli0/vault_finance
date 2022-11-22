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
    console.log('#SIGINHOOKS');
    const answer = await api.post('/', { username, password });
    return answer.data;
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
});
