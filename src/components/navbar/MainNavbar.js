import styles from './MainNavbar.module.scss';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <div className={styles['main-navbar']}>
      <div>
        <span>logo</span>
      </div>

      <div className={styles['navbar-links']}>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>

        <NavLink to="/students">
          <span className="ms-3">Students</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavbar;
