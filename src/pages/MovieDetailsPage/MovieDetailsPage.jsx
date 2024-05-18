import css from './MovieDetailsPage.module.css';
import { GoArrowLeft } from 'react-icons/go';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWE5MTAyOGM3M2YxNDUxMWU1ZDdhYzkwNjFkYmJkMyIsInN1YiI6IjY2NDMyYzg1YWI2MzYwNWZiNDc3ZTY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFZIMdsLZSk8_fX_WuxlBKW65SVPPlnML-Y6QYZ0ApA',
      },
    };
    if (movieId && movieId !== undefined) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(err => console.error(err));
    }
  }, [movieId]);

  return (
    <>
      <div className={css.areaForGoBackButton}>
        <button onClick={() => navigate(-1)}>
          <GoArrowLeft /> Go back
        </button>
      </div>
      <div className={css.detailsPage}>
        {movie && (
          <>
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <ul className={css.diferentInfo}>
              <li className={css.info}>
                <h2>{movie.title}</h2>
                <p>User Score: {movie.vote_average * 10}%</p>
              </li>
              <li className={css.info}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </li>
              <li className={css.info}>
                <h3>Genres</h3>
                <ul className={css.diferentInfoGanres}>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id} className={css.genre}>
                        {genre.name}
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className={css.addInfo}>
        <h3>Aditional Information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
