import { createContext, useState } from "react";

export const GenreContext = createContext({
    clickedGenre: false,
    setClickedGenre: () => {},
    clickedArr: [], 
    setClickedArr: () => {} 
})

export const GenreProvider = ({children}) => {

    const [clickedGenre, setClickedGenre] = useState(false);
    const [clickedArr, setClickedArr] = useState([]);

    const value = {clickedGenre, setClickedGenre, clickedArr, setClickedArr}


    return (
        <GenreContext.Provider value={value}>
            {children}
        </GenreContext.Provider>
    )
}