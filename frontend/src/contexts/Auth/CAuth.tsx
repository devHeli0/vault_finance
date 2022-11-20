import { createContext } from 'react';
import { User } from '../../types/User';

export type CAuthType = {
  user: User | null;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

export const CAuth = createContext<CAuthType>(null!);
