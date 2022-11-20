import { useEffect, useState } from 'react';
import { useApi, api } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const useapi = useApi();

  const [loadin, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        api.defaults.headers.Authorization = `${JSON.parse(token)}`
        const data = await useapi.validateToken(token);
        if (data.user) {
          setUser(data.user);
        }
        setLoading(false)
      }
    };
    validateToken();
  }, []);

  const signin = async (username: string, password: string) => {
    const data = await useapi.signin(username, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setUser(null);
    setToken('');
    await useapi.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem('Token', JSON.stringify(token));
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
