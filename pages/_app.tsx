import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { GlobalStyle } from '../styles/globalStyle';
import Footer from '../components/reusable/Footer';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
