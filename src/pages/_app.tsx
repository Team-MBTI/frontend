import '../styles/reset.css';
import { useEffect } from 'react';

import { AppProps } from 'next/app';

import ToastMessage from '@/components/common/ToastMessage';
import { server } from '@/mocks/browsers/testServer';
import { GlobalStore } from '@/store/GlobalStore';
import QueryProvider from '@/utils/QueryProvider';

import { Global, ThemeProvider } from '@emotion/react';

if (process.env.NODE_ENV === 'development') {
  server.listen();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();

  useEffect(
    () => () => {
      if (server) {
        server.close();
      }
    },
    [],
  );

  return (
    <QueryProvider>
      <ThemeProvider theme={{ mode: theme }}>
        <ToastMessage />
        <Global styles={{}} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default MyApp;
