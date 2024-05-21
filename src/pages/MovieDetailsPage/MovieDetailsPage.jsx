import css from './MovieDetailsPage.module.css';
import { GoArrowLeft } from 'react-icons/go';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
const defaultPosterImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationWithUL = location.state?.from || "/movies";
  const fromLocation = useRef(location.state?.from ?? "/movies");

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
        <button onClick={() => navigate(locationWithUL)}>
          <GoArrowLeft /> Go back
        </button>
      </div>
      <div className={css.detailsPage}>
        {movie && (
          <>
            <img
              className={css.poster}
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultPosterImg}
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
            <NavLink to={`/movies/${movieId}/cast`} state={{ from: fromLocation.current }}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`} state={{ from: fromLocation.current }}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
