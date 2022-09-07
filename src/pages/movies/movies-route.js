import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from "react-paginate";

import MovieCard from '../../components/movie-card/movie-comp';
import {ReactComponent as Spinner} from '../../assets/loader.svg'

import Category from '../../components/categories/category-comp';

import './movies-route.scss'

const MoviePage = () => {

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [moviesData, setMoviesData] = useState([]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US&page=${page + 1}`
      );
      setMoviesData(data.results);
      setLoading(false);
      setTotalPages(data.total_pages);
    } catch(error) {
      alert('an error while loading movies');
    }
  }


  // const [similarMovies, setSimilarMovies] = useState([]);



  // const fetchSimilarMoviesOrSeries = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${ids}/similar?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US&page=${page}`
  //     );
  //     // console.log(data);
  //     setMoviesData(data.results);
  //   } catch(error) {
  //     alert('error in getting similar movies');
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchMovies();
    window.scrollTo(0,0);
  }, [page]);

  // useEffect(() => {
  //   if(ids.length > 0) fetchSimilarMoviesOrSeries();
  // }, []);

  const goToPage = ({ selected }) => {
    setPage(selected);
  };

  // if (loading) {
  //   return <Spinner className="spinner" />;
  // }

  return (
    <div>
      <p className="title">DISCOVER MOVIES</p>
      <div className="category-container">
        <Category type="movie" />
      </div>
      <div className="movies-container">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          pageCount={totalPages}
          previousLabel="<<"
          nextLabel=">>"
          onPageChange={goToPage}
          activeClassName="active-link"
          previousClassName="previous-link"
          nextClassName="next-link"
          containerClassName="page-btns"
        />
      </div>
    </div>
  );
}

export default MoviePage