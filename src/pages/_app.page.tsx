import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'hooks/auth-context';
import { ProtectedRoute } from 'core/protected-route';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'lib/queryClient';

const publicRoutes = ['/', '/signin', '/signup'];

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          {publicRoutes.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}
