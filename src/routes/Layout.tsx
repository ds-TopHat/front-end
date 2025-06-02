import { Outlet } from 'react-router-dom';
import Header from '@components/header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '10.8rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
