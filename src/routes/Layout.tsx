import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Header from '@components/header/Header';
import { routePath } from '@routes/routePath';

const Layout = () => {
  const location = useLocation();

  const noHeaderPaths = [routePath.LOGIN, routePath.SIGNUP, routePath.ERROR];
  const showHeader = !noHeaderPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
