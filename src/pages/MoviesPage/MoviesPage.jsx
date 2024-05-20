import { Formik, Form, Field } from 'formik';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import MovieList from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [values, setValues] = useState();
  const handleSubmit = values => {
    setValues(values.searchFilm);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
      },
    };
    if (values && values !== undefined) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${values}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(err => console.error(err));
    }
  }, [values]);

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
