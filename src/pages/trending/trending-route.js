import axios from "axios";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";

import MovieCard from "../../components/movie-card/movie-comp";
import { ReactComponent as Spinner } from "../../assets/loader.svg";

import "./trending-route.scss";

const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=90ee1b388e8335299ffc93e65938366f&page=${
          page
        }`
      );
      setData(data.results);
      setLoading(false);
      setTotalPages(data.total_pages);
    } catch (error) {
      alert("an error occured while loading trending movies");
    }
  };


  useEffect(() => {
    fetchData();
  }, [page]);

  const handleChange = (event, page) => {
    setPage(page);
  };

  if(loading) {
    return (
      <Spinner className="spinner" />
    )
  }

  return (
    <div className="trending">
      <p className="title">TRENDING TODAY</p>
      <div className="movies-container">
        {
          data.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
      <div className="pagination-container">
        <Pagination count={totalPages} color="primary" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Trending;
