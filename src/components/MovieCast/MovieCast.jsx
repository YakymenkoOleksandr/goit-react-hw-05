export default function MovieCast({ cast }) {
    return (
        <div>
            <ul>
                {cast && cast.map(actor => (
                    <li key={actor.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                        <div>
                            <p>Name: {actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}