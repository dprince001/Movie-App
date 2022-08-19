import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

import { Button } from '@mui/material';
import { YouTube } from '@mui/icons-material';

import { ReactComponent as Spinner } from "../../assets/loader.svg";


import './clickedMovie.scss'

const ClickedMovie = () => {
    const { movieID } = useParams();
    const { movieType } = useParams();



    const [loading, setLoading] = useState(false);
    const [trailerLink, setTrailerLink] = useState('');
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetails = async () => {
        setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/${movieType}/${movieID}?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US`
      );
      setMovieDetails(res.data);
      setLoading(false);
    };

    const fetchTrailerLink = async() => {
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/${movieType}/${movieID}/videos?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US`
        );
        setTrailerLink(data.results[0].key);
    }

    useEffect(() => {
      fetchMovieDetails();
      fetchTrailerLink();
    }, []);

    const { overview, poster_path, release_date, title, name, tagline } = movieDetails;

    if (loading) {
      return <Spinner className="spinner" />;
    }


  return (
    <div className="clicked-movie-container">
      <div className="image-container">
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      </div>
      <div className="details-container">
        {title ? (
          <p className="title">{title}</p>
        ) : (
          <p className="title">{name}</p>
        )}
        <p className="tagline">{tagline}</p>
        <p className="overview">{overview}</p>
        <Button
          className="youtube"
          startIcon={<YouTube />}
          target="_blank"
          href={`https://www.youtube.com/watch?v=${trailerLink}`}
        >
          WATCH THE TRAILER
        </Button>
      </div>
    </div>
  );
}

export default ClickedMovie