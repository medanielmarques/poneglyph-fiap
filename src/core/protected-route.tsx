import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/auth-context';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};
