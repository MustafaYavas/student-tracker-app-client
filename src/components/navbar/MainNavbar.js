import styles from './MainNavbar.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const MainNavbar = () => {
  return (
    <div className={styles['main-navbar']}>
      <NavLink to="/">
        <img src={logo} alt="logo" width={36} />
      </NavLink>

      <div className={styles['navbar-links']}>
        <NavLink to="/">
          <span>Home</span>
        </NavLink>

        <NavLink to="/students">
          <span className="mx-5">Students</span>
        </NavLink>

        <NavLink to="/students/add">
          <span>Add new student</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavbar;
