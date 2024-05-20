import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
export default function MovieList({ arrayOfFilms }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.listOfmovies}>
        {arrayOfFilms &&
          Array.isArray(arrayOfFilms) &&
          arrayOfFilms.length > 0 &&
          arrayOfFilms.map(arrayOfFilm => (
            <li key={arrayOfFilm.id}>
              <Link to={`/movies/${arrayOfFilm.id}`} state={{ from: location }}>{arrayOfFilm.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

/*`/movies/${arrayOfFilm.id}` */