import { AppProps } from '@/../../../채연/SSU-IT/Soongcha-ro/node_modules/next/app';
import { GlobalStyle } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;