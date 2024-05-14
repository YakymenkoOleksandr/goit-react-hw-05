import { useEffect, useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import './App.css';
import axios from 'axios';

const trendMouvies = 'https://api.themoviedb.org/3/trending/movie/day';
const apiKey = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
  },
};

export default function App() {
  const [results, setResults] = useState();

  useEffect(() => {
    axios
      .get(trendMouvies, apiKey)
      .then(response => {
        setResults(response.data.results);
        console.log(response.data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <HomePage results={results} />
    </>
  );
}
