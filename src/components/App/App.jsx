import { useEffect, useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx';

const trendMouvies = 'https://api.themoviedb.org/3/trending/movie/day';
const searchFilmUrl = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

const apiKey = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
  },
};

export default function App() {
  const [results, setResults] = useState();
  const [values, setValues] = useState();

  useEffect(() => {
    axios
      .get(trendMouvies, apiKey)
      .then(response => {
        setResults(response.data.results);
      })
      .catch(err => console.error(err));
    
    
  }, []);

  const searchMovieByQvery = (values) => {
    axios
      .get(`${searchFilmUrl}?query=${values}`, apiKey)
      .then(response => {
        setValues(response.data.results);
      })
      .catch(err => console.error(err));
  }



  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage results={results} />} />
        <Route
          path="/movies"
          element={<MoviesPage searchMovieByQvery={searchMovieByQvery} values={values} />}
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

/*<Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />*/