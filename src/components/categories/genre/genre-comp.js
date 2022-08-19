import { useEffect, useState } from "react";
import { useContext } from "react";
import { GenreContext } from "../../../contexts/genrecontext";


const Genre = ({ name, genre, id, allGenres }) => {

  const [clicked, setClicked] = useState(false);
  const [clickedIDsArr, setClickedIDsArr] = useState([]); 
  // const clickedArr = [];


  const allGenresID = allGenres.map(genre => genre.id);
  console.log(allGenresID);


  const handleCategoryClick = (clickedGenreID, allGenresID) => {
    // check for match
    const IdExists = allGenresID.find(id => id === clickedGenreID);
    console.log(IdExists);


    // if match exists then remove the id from the clicked genres


    // otherwise genre hasnt been clicked before so return an array with only that item id

    // return [...clickedIDsArr, clickedGenreID];
  }

  // setClickedIDsArr(handleCategoryClick(id, allGenresID));

  const handleClick = () => {
    handleCategoryClick(id, allGenresID);
  }

  console.log(clickedIDsArr);


  return (
    <p className={`genre ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      {name}
    </p>
    // <p className={`genre ${clickedGenre ? 'clicked' : ''}`} onClick={() => handleCategoryClick(id)}>
    //   {name}
    // </p>
  );
};

export default Genre;
