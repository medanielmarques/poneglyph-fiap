import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'hooks/auth-context';
import { useRouter } from 'next/router';
import { ProtectedRoute } from 'core/protected-route';

const publicRoutes = ['/', '/signin', '/signup'];

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthProvider>
      <ChakraProvider>
        {publicRoutes.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </ChakraProvider>
    </AuthProvider>
  );
}
