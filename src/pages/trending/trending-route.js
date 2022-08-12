import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import MovieCard from "../../components/movie-card/movie-comp";
import {ReactComponent as Spinner} from '../../assets/loader.svg'


import './trending-route.scss'



// const apiData = {
//   key: "90ee1b388e8335299ffc93e65938366f",
// };

const Trending = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
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
      // console.log(data);
      setLoading(false);
    } catch (error) {
      alert("an error occured while loading trending movies");
    }
  };

  // console.log(data);


  useEffect(() => {
    fetchData();
  }, [page]);


  const gotoPage = ({selected}) => {
    setPage(selected);
  }

  return <div className="trending">
    <p className="title">TRENDING TODAY</p>
    <div className="movies-container">
      {/* TODO: add spinner */}
        {loading ? <Spinner className="spinner"/> : data.map(movie => 
            <MovieCard key={movie.id} movie={movie}/>
        )}
    </div>
        {/* TODO: pagination should be a component */}
      {!loading && <ReactPaginate 
        className="pagination" 
        onPageChange={gotoPage}
        pageCount={10}
        // activeClassName='pageActive'
        previousClassName="previous-page"
        nextClassName="next-page"
        />
      }
</div>;
};

export default Trending;
