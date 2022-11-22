import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/api';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';
import routes from '../../routes/routes';

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const api = useApi();
  const location = useLocation();

  useEffect(() => {
    console.log('###USEEFFECT');
    console.log('#LOCATION', location);
    const AccessToken = localStorage.getItem('AccessToken');
    const validateToken = async () => {
      console.log('###VALIDATETOKEN');
      if (AccessToken) {
        console.log('###AccessToken', AccessToken);
        const data = await api.validateToken();
        console.log('#APIRETURN', data);
        if (!data) navigate('/');
      } else {
        alert('Acesso restrito! Usuário não logado.');
        navigate('/');
      }
    };
    if (routes.privates.includes(location.pathname)) {
      validateToken();
    }
  }, [location.pathname]);

  const signIn = async (username: string, password: string) => {
    alert('###SIGNIN');
    const answer = await api.signIn(username, password);
    if (answer.user && answer.AccessToken) {
      setUser(answer.user); //.user
      setToken(answer.AccessToken); //.AccessToken
      return true;
    }
    return false;
  };

  const signOut = async () => {
    alert('Saindo...');
    setUser(null);
    setToken('');
    localStorage.clear();
  };

  const setToken = (AccessToken: string) => {
    localStorage.setItem('AccessToken', AccessToken);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
