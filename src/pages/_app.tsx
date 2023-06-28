import '../styles/reset.css';
import { useEffect } from 'react';

import { AppProps } from 'next/app';

import Layout from '@/components/common/Layout';
import { server } from '@/mocks/browsers/testServer';
import GlobalStore from '@/store/GlobalStore';
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
        <Global styles={{}} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default MyApp;
