import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseInit } from '../lib/firebase';

export const AuthContext = createContext({} as any);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  firebaseInit();
  const auth = getAuth();

  const [user, setUser] = useState({} as User | null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
