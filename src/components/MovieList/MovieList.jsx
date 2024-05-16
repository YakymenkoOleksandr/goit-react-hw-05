import { NavLink } from 'react-router-dom';
export default function MovieList({ arrayOfFilms }) {
    /*console.log(arrayOfFilms);*/
  return (
    <>
        {arrayOfFilms &&
          arrayOfFilms.length > 0 &&
          arrayOfFilms.map(arrayOfFilm => (
            <li key={arrayOfFilm.id}>
              <NavLink to="#">{arrayOfFilm.title}</NavLink>
            </li>
          ))}
    </>
  );
}