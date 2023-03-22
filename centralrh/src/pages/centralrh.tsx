import PrivateRoute, { LoginType } from './PrivateRoute';

export default function LoginPageRH() {
  return (
    
      <PrivateRoute loginType={LoginType.RH}>
        <h1>ola vamo nessa RH</h1>
      </PrivateRoute>
    
  );
}
