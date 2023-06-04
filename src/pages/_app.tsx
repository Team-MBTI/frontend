import '../styles/reset.css';
import QueryProvider from '@/utils/QueryProvider';
import GlobalStore from '@/store/GlobalStore';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = GlobalStore();

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
