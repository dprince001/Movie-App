import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";




import MovieCard from "../../components/movie-card/movie-comp";
import { ReactComponent as Spinner } from "../../assets/loader.svg";

import "./trending-route.scss";

const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=90ee1b388e8335299ffc93e65938366f&page=${
          page + 1
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);
  
  
  const goToPage = ({ selected }) => {
    setPage(selected);
  };


  // if(loading) {
  //   return (
  //     <Spinner className="spinner" />
  //   )
  // }

  return (
    <div className="trending">
      <p className="title">TRENDING TODAY</p>
      <div className="movies-container">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          pageCount={totalPages}
          onPageChange={goToPage}
          activeClassName="active-link"
          previousClassName="previous-link"
          nextClassName="next-link"
          containerClassName="page-btns"
        />
      </div>
    </div>
  );
};

export default Trending;
