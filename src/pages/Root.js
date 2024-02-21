import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/navbar/MainNavbar';

const RootLayout = () => {
  return (
    <>
      <MainNavbar />
      <div className="d-flex align-items-center justify-content-center">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
