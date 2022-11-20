import axios from 'axios';

export const apiLink = axios.create({
  baseURL: process.env.REACT_APP_API,
});


export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await apiLink.post('/account', { token });
    return response.data;
  },

  signIn: async (username: string, password: string) => {
    const response = await apiLink.post('/', {
      username,
      password,
    });
    return response.data;
  },

  logout: async () => {
    const response = await apiLink.post('/');
    return response.data;
  },
});
