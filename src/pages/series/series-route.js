import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "../../components/movie-card/movie-comp";
import { ReactComponent as Spinner } from "../../assets/loader.svg";

import "./series-route.scss";

const SeriesPage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [seriesData, setSeriesData] = useState([]);

  const fetchSeries = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US&page=${page + 1}`
      );
      setSeriesData(data.results);
      setLoading(false);
    } catch (error) {
      alert("an error while loading series");
    }
  };

  useEffect(() => {
    fetchSeries();
  }, [page]);

  return (
    <div>
      <p className="title">DISCOVER SERIES</p>
      <div className="movies-container">
        {loading ? (
          <Spinner className="spinner" />
        ) : (
          seriesData.map((movie) => <MovieCard key={movie.id} movie={movie} media_type_series='Tv Series'/>)
        )}
      </div>
    </div>
  );
};

export default SeriesPage;
