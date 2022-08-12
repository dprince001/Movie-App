import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import MovieCard from "../../components/movie-card/movie-comp";


import './trending-route.scss'



const apiData = {
  key: "90ee1b388e8335299ffc93e65938366f",
};

const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
        setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiData.key}&page=${page + 1}`
      );
      setData(data.results);
      setLoading(false);
    } catch (error) {
      alert("an error occured");
    }
  };


  useEffect(() => {
    fetchData();
  }, [page]);


  const gotoPage = ({selected}) => {
    setPage(selected);
  }

  return <div className="trending">
    <p className="trending-title">TRENDING TODAY</p>
    <div className="movies-container">
      {/* TODO: add spinner */}
        {loading ? <p>Loading.....</p> : data.map(movie => 
            <MovieCard key={movie.id} movie={movie}/>
        )}
        {/* TODO: pagination */}
    </div>
      <ReactPaginate 
        className="pagination" 
        onPageChange={gotoPage}
        pageCount={10}
        activeClassName='pageActive'
        />
</div>;
};

export default Trending;
