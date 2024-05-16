import { Formik, Form, Field } from 'formik';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css'
export default function MoviesPage({ searchMovieByQvery, values }) {
  const handleSubmit = values => {
    searchMovieByQvery(values.searchFilm);
  };
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
      <ul className={css.listOfmovies}>
        <MovieList arrayOfFilms={values} />
      </ul>
    </>
  );
}
