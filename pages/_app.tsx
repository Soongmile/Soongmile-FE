import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '../styles/globalStyle';
import Footer from '../components/reusable/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
