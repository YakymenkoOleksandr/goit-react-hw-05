import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

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
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(data => setReviews(data.results))
        .catch(err => console.error(err));
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <li><p>We don`t have any reviews for this movie.</p></li>
        )}
      </ul>
    </div>
  );
}