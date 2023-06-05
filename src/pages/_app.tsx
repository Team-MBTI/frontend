import '../styles/reset.css';
import QueryProvider from '@/utils/QueryProvider';
import GlobalStore from '@/store/GlobalStore';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { server } from '@/mocks/browsers/testServer';

import { useEffect } from 'react';

if (process.env.NODE_ENV === 'development') {
  server.listen();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();

  useEffect(() => {
    return () => {
      if (server) {
        server.close();
      }
    };
  }, []);

  return (
    <>
      <QueryProvider>
        <ThemeProvider theme={{ mode: theme }}>
          <Global styles={{}} />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryProvider>
    </>
  );
}

export default MyApp;
