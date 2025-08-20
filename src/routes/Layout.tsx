import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Header from '@components/header/Header';

const Layout = () => {
  const location = useLocation();

  const noHeaderPaths = ['/login', '/signup'];
  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
