import MovieList from '../../components/MovieList/MovieList';
export default function HomePage({ results }) {
  return (
    <>
        <MovieList arrayOfFilms={results} />
    </>
  );
}
