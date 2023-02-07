import React, {useState, useEffect} from "react";



const [favorites, setFavorites] = useState([])

export const addFavorites = () => {
    let tempFavorites = [...favorites, {label: name}];
    setFavorites(tempFavorites);
}

export const deleteFavorites = () => {
    let tempFavorites = [...favorites, {label: name}];
    setFavorites(tempFavorites);
}


