import { useEffect, useState } from 'react';
import { useApi, apiLink } from '../../hooks/useApi';
import { User } from '../../types/User';
import { CAuth } from './CAuth';

export const CProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const useapi = useApi();

  const signIn = async (username: string, password: string) => {
    const answer = await useapi.signIn(username, password);

    if (answer.user) {
      setUser(answer.user);
      alert(answer.data);
      return true;
    } else {
      return false
    }
  };

  const signOut = async () => {
    const answer = await useapi.logout();
    setUser(null)
  };

  return (
    <CAuth.Provider value={{ user, signIn, signOut }}>
      {children}
    </CAuth.Provider>
  );
};
