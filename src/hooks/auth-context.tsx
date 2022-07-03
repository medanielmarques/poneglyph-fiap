import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Auth, getAuth, onIdTokenChanged, User } from 'firebase/auth';
import nookies from 'nookies';
import { firebaseClient } from 'lib/firebase/firebaseClient';

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
  firebaseClient();
  const auth = getAuth();

  const cookieKey = 'firebaseToken';
  const refreshTokenInterval = 10 * 60 * 1000;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, cookieKey);
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, cookieKey);
      nookies.set(undefined, cookieKey, token, {});
    });
  }, []);

  useEffect(() => {
    const refreshToken = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await user.getIdToken(true);
      }
    }, refreshTokenInterval);

    return () => clearInterval(refreshToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        auth,
        signOut: () => auth.signOut(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
