import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export enum LoginType {
  RH = 'rh',
  TEC = 'tec'
}

interface PrivateRouteProps {
  children: React.ReactNode;
  loginType: LoginType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, loginType }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token ) {
      if (loginType === LoginType.RH) {
        router.push('/loginrh');
      } else if (loginType === LoginType.TEC) {
        router.push('/logintec');
      }
    }
  }, [loginType]);

  return <>{children}</>;
};

export default PrivateRoute;
