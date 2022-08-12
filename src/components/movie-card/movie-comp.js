import './movie-comp.scss'

const MovieCard = ({movie, media_type_series}) => {
    const {title, name, overview, poster_path, media_type, release_date, first_air_date, vote_average } = movie;

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={`${title} image`}
      />
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
        
        {media_type_series ? 
          (<p className="movie-type">{media_type_series}</p>) 
          : 
          (
          <div>
            {media_type === "tv" ? (
            <p className="movie-type">Tv Series</p>
            ) : (
            <p className="movie-type">Movies</p>
            )}
          </div>
        )}
        
      </div>
      {/* <p>{vote_average}</p> */}
    </div>
  );
}

export default MovieCard