import { createBrowserRouter, Navigate } from 'react-router-dom';

import GlobalLayout from './Layout';
import { routePath } from './routePath';
import { protectedRoutes, publicRoutes } from './globalRoutes';
import { ProtectedRoute } from './protectedRoute';

export const router = createBrowserRouter([
  {
    path: routePath.HOME,
    element: <GlobalLayout />,
    children: [
      // 공개 라우트
      ...publicRoutes,
      // 인증이 필요한 라우트
      {
        element: <ProtectedRoute />,
        children: protectedRoutes,
      },
      {
        path: '*',
        element: <Navigate to={routePath.HOME} replace />,
      },
    ],
  },
]);
