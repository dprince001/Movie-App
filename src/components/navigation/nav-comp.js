import { Link } from "react-router-dom";

import { ReactComponent as MovieImg } from "../../assets/movie.svg";
import { ReactComponent as SearchImg } from "../../assets/search.svg";
import { ReactComponent as TrendImg } from "../../assets/trend.svg";
import { ReactComponent as TvImg } from "../../assets/tv.svg";

import "./nav.comp.scss";


const Navigation = () => {
  return (
    <div className="navigation-container">
      <div>
        <Link to={'/'} className="nav-link">
          <TrendImg />
          <p>Trending</p>
        </Link>
        <Link to={'/movies'} className="nav-link">
          <MovieImg />
          <p>Movies</p>
        </Link>
        <Link to={'/series'} className="nav-link">
          <TvImg />
          <p>Series</p>
        </Link>
        <Link to={'/search'} className="nav-link">
          <SearchImg />
          <p>Search</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
