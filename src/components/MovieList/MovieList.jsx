import { NavLink } from 'react-router-dom';
import css from './MovieList.module.css';
export default function MovieList({ arrayOfFilms }) {
  return (
    <>
      <ul className={css.listOfmovies}>
        {arrayOfFilms &&
          Array.isArray(arrayOfFilms) &&
          arrayOfFilms.length > 0 &&
          arrayOfFilms.map(arrayOfFilm => (
            <li key={arrayOfFilm.id}>
              <NavLink to={`/movies/${arrayOfFilm.id}`}>{arrayOfFilm.title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
