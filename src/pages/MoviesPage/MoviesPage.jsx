import { Formik, Form, Field } from 'formik';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import MovieList from '../../components/MovieList/MovieList';
export default function MoviesPage({ handleSubmit, movies }) {
  return (
    <>
      <Formik initialValues={{ searchFilm: '' }} onSubmit={handleSubmit}>
        <Form>
          <div>
            <button type="submit">
              <PiMagnifyingGlassLight />
            </button>
            <Field
              type="text"
              autoComplete="off"
              autoFocus={true}
              placeholder="Search film"
              name="searchFilm"
            />
          </div>
        </Form>
      </Formik>
      {movies && movies.length > 0 && <MovieList arrayOfFilms={movies} />}
    </>
  );
}
