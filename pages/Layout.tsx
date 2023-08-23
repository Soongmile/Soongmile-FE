import { ReactElement } from 'react';
import Footer from '../components/reusable/Footer';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
