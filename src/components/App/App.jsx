import { useEffect, useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

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

  useEffect(() => {
    axios
      .get(trendMouvies, apiKey)
      .then(response => {
        setResults(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.error(err));
  }, []);

  const searchQuery = () => {
    setValues(values.searchFilm);
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage results={results} />} />
        <Route path="/movies" element={<HomePage searchQuery={searchQuery} />}>
          {' '}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
