import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/navbar/MainNavbar';
import styles from './Root.module.scss';

const RootLayout = () => {
  return (
    <>
      <MainNavbar />
      <div
        className={`d-flex align-items-center justify-content-center ${styles.root}`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
