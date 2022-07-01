import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Auth, getAuth, onIdTokenChanged, User } from 'firebase/auth';
import nookies from 'nookies';
import { firebaseInit } from '../lib/firebase';

interface AuthContextData {
  user: User | null;
  auth: Auth;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  firebaseInit();
  const auth = getAuth();

  const [user, setUser] = useState({} as User | null);

  const signOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'firebaseToken', token, { path: '/' });
      } else {
        setUser(null);
        nookies.destroy(undefined, 'firebaseToken');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const refreshToken = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await user.getIdToken(true);
      }
    }, 10 * 60 * 1000); // force refresh the token every 10 minutes

    return clearInterval(refreshToken);
  }, []);

  return (
    <AuthContext.Provider value={{ user, auth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
