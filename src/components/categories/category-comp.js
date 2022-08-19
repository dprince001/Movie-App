import { useEffect, useState } from 'react'
import axios from 'axios'

import Genre from './genre/genre-comp'

import './category-comp.scss'



const Category = ({type}) => {

    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(1);

    // const fetchCategories = async () => {
    //     const {data} = await axios.get(
    //       `https://api.themoviedb.org/3/genre/${type}/list?api_key=90ee1b388e8335299ffc93e65938366f&language=en-US`
    //     );
    //     setGenres(data.genres);
    // }

    
    // useEffect(() => {
    //     fetchCategories();
    // }, [])


  

  return (
    <div className='categories'>
       {genres.map(genre => {
        const {id, name} = genre;
        return (
          <Genre key={id} name={name} allGenres={genres} genre={genre} id={id}/>
        );
        })}
    </div>
  )
}

export default Category