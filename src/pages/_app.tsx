import '../styles/reset.css';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={{}} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
