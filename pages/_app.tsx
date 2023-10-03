import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { GlobalStyle } from '../styles/globalStyle';
import Footer from '../components/reusable/Footer';
import Header from '../components/reusable/Header';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Header />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
