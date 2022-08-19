import { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

import MovieCard from '../../components/movie-card/movie-comp';

import {ReactComponent as Spinner} from '../../assets/loader.svg'
import { ReactComponent as Search } from "../../assets/search.svg";


import './search-route.scss'

const SearchPage = () => {

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState('movie') // otherwise tv
  
  const fetchSearchByCategory = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${category}?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US&query=${searchInput}&page=${page}&include_adult=false`
      );
      setSearchData(data.results);
      setLoading(false);
      setTotalPages(data.total_pages);
    } catch(error) {
      alert('something went wrong :(');
      console.log(error);
    }
  }

  useEffect(() => {
    if(searchInput) fetchSearchByCategory();
  }, [category, page])


  const submitHandler = (e) => {
    e.preventDefault();
    fetchSearchByCategory();
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const setMovieCategory = (category) => {
    setCategory(category);
  }

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  
  if (loading) {
    return <Spinner className="spinner" />;
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="search-container">
        <input
          className="search-field"
          placeholder="Search....."
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit">
          <Search fill="black" />
        </button>
      </form>
      <div className="category-container">
        <button
          onClick={() => setMovieCategory("movie")}
          className={category === "movie" ? "active" : ""}
        >
          Search Movies
        </button>
        <button
          onClick={() => setMovieCategory("tv")}
          className={category === "tv" ? "active" : ""}
        >
          Search Tv Series
        </button>
      </div>
      <div className="movies-container">
        {
          searchData.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
      <div className="pagination-container">
        <Pagination count={totalPages} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  );
}

export default SearchPage