import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={style.link}
      activeClassName={style.activeLink}
    >
      Homepage
    </NavLink>
    <NavLink
      to="/movies"
      className={style.link}
      activeClassName={style.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
