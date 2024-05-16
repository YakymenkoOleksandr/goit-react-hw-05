import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
export default function HomePage({ results }) {
  return (
    <>
      <ul className={css.listOfmovies}>
        <MovieList arrayOfFilms={results} />
      </ul>
    </>
  );
}
