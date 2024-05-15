import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
export default function HomePage({ results }) {
  return (
    <>
      <ul className={css.listOfmovies}>
        <h1>Trending today</h1>
        {results &&
          results.length > 0 &&
          results.map(result => (
            <li key={result.id}>
              <NavLink to="#">{result.title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
