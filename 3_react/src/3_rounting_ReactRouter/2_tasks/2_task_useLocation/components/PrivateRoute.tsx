import React, { ReactElement } from 'react';
import { useAuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateRoutePropsI {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRoutePropsI) {
  const { user } = useAuthContext();

  if (user) {
    return children;
  }

  return <Navigate to="/" />;
}
export default PrivateRoute;
