import { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from '../../components/movie-card/movie-comp';
import {ReactComponent as Spinner} from '../../assets/loader.svg'

import './movies-route.scss'

const MoviePage = () => {

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [moviesData, setMoviesData] = useState([]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US&page=${page + 1}`
      );
      setMoviesData(data.results);
      setLoading(false);
    } catch(error) {
      alert('an error while loading movies');
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [page])

  return (
    <div>
      <p className="title">DISCOVER MOVIES</p>
      <div className="movies-container">
        {loading ? (
          <Spinner className="spinner" />
        ) : (
          moviesData.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
}

export default MoviePage