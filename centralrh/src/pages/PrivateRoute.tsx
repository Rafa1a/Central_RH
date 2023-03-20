import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
