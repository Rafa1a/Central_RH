import PrivateRoute, { LoginType } from './PrivateRoute';

export default function LoginPageRH() {
  return (
    
      <PrivateRoute loginType={LoginType.TEC}>
        <h1>ola vamo nessa TEC</h1>
      </PrivateRoute>
    
  );
}
