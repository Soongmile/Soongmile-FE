import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: NextPage) => {
  return function Wrapper() {
    const router = useRouter();
    useEffect(() => {
      const token = getCookie('token');

      if (!token) {
        router.push('/signin');
      }
    }, []);

    return <WrappedComponent />;
  };
};

export default withAuth;
