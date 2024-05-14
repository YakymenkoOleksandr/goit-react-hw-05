import { useEffect, useState } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import './App.css';
import axios from 'axios';

export default function App() {
  const [results, setResults] = useState();

  const trendMouvies = 'https://api.themoviedb.org/3/trending/movie/day';
  const apiKey = {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
    }
  };

    useEffect(() => {
      function getTopMuvies() {
       axios
        .get(trendMouvies, { headers: apiKey.headers })
        .then(response => setResults(response.data.results))
        .catch(err => console.error(err));
    }
        getTopMuvies();
        
  }, []);

  return (
    <>
      <HomePage results={results} />
    </>
  );
}
