import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

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
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(data => setCast(data.cast))
        .catch(err => console.error(err));
    }
  }, [movieId]);
  return (
    <div>
      <ul className={css.castActors}>
        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt={actor.name}
                      className={css.imgActor}
              />
              <div>
                <p className={css.nameActor}>Name: {actor.name}</p>
                <p className={css.characterActor}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
