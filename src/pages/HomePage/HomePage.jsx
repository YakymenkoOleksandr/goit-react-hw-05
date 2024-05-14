import css from "./HomePage.module.css"
export default function HomePage({ results }) {
  return (
    <>
      <header className={css.fieldOfHeader}>
              <ul className={css.fieldOfHeaderLink}>
          <li>
            <a className={css.link}>Home</a>
          </li>
          <li>
            <a className={css.link}>Movies</a>
          </li>
        </ul>
      </header>
      <ul className={css.listOfmovies}>
        <h1>Trending today</h1>
        {results &&
          results.length > 0 &&
          results.map(result => (
            <li key={result.id}>
              <a href="#">{result.title}</a>
            </li>
          ))}
      </ul>
    </>
  );
}
