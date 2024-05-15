import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <nav className={css.fieldOfHeader}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="./movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
}
