import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
