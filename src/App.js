import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header-comp";
import Navigation from "./components/navigation/nav-comp";
import Trending from "./pages/trending/trending-route";
import MoviePage from "./pages/movies/movies-route";
import SearchPage from "./pages/search/search-route";
import SeriesPage from "./pages/series/series-route";



function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
