import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
export const RequireAuth = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log(auth)
  }, [auth]);
  if (!auth.user) {
    navigate ('/');
  }
  return children;
};
