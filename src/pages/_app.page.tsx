import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'lib/queryClient';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
