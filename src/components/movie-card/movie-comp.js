import './movie-comp.scss'

const MovieCard = ({movie, media_type_series}) => {
    const {title, name, overview, poster_path, media_type, release_date, first_air_date, vote_average, genre_ids } = movie;

    // console.log(genre_ids);

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={`${title} image`}
      />
      <span className={`votes ${vote_average < 5 ? 'low-votes' : ''}`}>{vote_average.toFixed(1)}</span>
      {title ? (
        <p className="movie-title">{title}</p>
      ) : (
        <p className="movie-title">{name}</p>
      )}
      <div>
        {release_date ? (
          <p className="movie-date">{release_date}</p>
        ) : (
          <p className="movie-date">{first_air_date}</p>
        )}

        {media_type_series ? (
          <p className="movie-type">{media_type_series}</p>
        ) : (
          <div>
            {media_type === "tv" ? (
              <p className="movie-type">Tv Series</p>
            ) : (
              <p className="movie-type">Movies</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard