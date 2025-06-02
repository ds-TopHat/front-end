import type { RouteObject } from 'react-router-dom';
import Home from '@pages/home/Home';
import Solve from '@pages/solve/Solve';
import Layout from '@routes/Layout';

import routePath from '@/routes/routePath';

const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: routePath.HOME, element: <Home /> },
      { path: routePath.SOLVE, element: <Solve /> },
    ],
  },
];

export default pageRoutes;
