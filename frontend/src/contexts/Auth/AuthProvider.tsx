import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/api';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('AcessToken');
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signIn = async (username: string, password: string) => {
    const answer = await api.signIn(username, password);
    if (answer.user && answer.AcessToken) {
      setUser(answer.user); //.user
      setToken(answer.AcessToken); //.AcessToken
      return true
    }
    return false;
  };

  const signout = async () => {
    console.log('signout está sendo executada.');
    setUser(null);
    setToken('');
    await api.logout();
  };

  const setToken = (AcessToken: string) => {
    localStorage.setItem('AcessToken', AcessToken);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
