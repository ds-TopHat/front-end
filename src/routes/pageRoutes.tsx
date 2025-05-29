import Home from '@pages/home/Home';
import Solve from '@pages/solve/Solve';

import routePath from '@/routes/routePath';

const pageRoutes = [
  { path: routePath.HOME, element: <Home /> },
  { path: routePath.SOLVE, element: <Solve /> },
];

export default pageRoutes;
