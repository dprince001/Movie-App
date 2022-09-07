import { useEffect, useState } from "react";

const Genre = ({ name, genre, id, allGenres }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedIDsArr, setClickedIDsArr] = useState([]);
  // const clickedArr = [];

  const allGenresID = allGenres.map((genre) => genre.id);
  console.log(allGenresID);

  const handleAdd = (id, allIDs) => {
    setClicked(!clicked);
    setClickedIDsArr([...clickedIDsArr, id]);
  };

  console.log(clickedIDsArr);


  return (
    <p
      className={`genre ${clicked ? "clicked" : ""}`}
      onClick={() => handleAdd(id, allGenresID)}
    >
      {name}
    </p>
  );
};

export default Genre;
