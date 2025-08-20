import { Navigate, Outlet } from 'react-router-dom';

import { routePath } from './routePath';

import { authService } from '@/shared/auth/services/authService';

export function ProtectedRoute() {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={routePath.LOGIN} replace />;
  }

  return <Outlet />;
}
