import { useEffect, useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';
const trendMouvies = 'https://api.themoviedb.org/3/trending/movie/day';

const apiKey = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
  },
};

export default function App() {
  const [results, setResults] = useState();
  const [values, setValues] = useState();
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(trendMouvies, apiKey)
      .then(response => {
        setResults(response.data.results);
      })
      .catch(err => console.error(err));
  }, []);

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

  const handleSubmit = values => {
    setValues(values.searchFilm);
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage results={results} />} />
        <Route
          path="/movies"
          element={
            <MoviesPage
              values={values}
              movies={movies}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
