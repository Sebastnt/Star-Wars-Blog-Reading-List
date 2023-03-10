import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCharacters } from "../helpers/getCharacters";
import { Navbar } from "../component/navbar.jsx";

import "../../styles/info.css";

export const InfoCharacters = () => {

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    const setCharactersInfoAsync = async () => {
		const singleCharacter = await getCharacters(id);
		setCharacter(singleCharacter);
	}

    useEffect(() => {setCharactersInfoAsync()},[])

    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="infotop d-flex justify-content-evenly p-2">

                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="infocard" alt="..." />
                    <div className="info p-3 text-center">
                        <h1>{character.name}</h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="infofooter mt-4 p-3"> 
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Year of Birth</th>
                                <th scope="col">Height</th>
                                <th scope="col">Mass</th>
                                <th scope="col">Skin Color</th>
                                <th scope="col">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{character.name}</td>
                                <td>{character.birth_year}</td>
                                <td>{character.height}</td>
                                <td>{character.mass}</td>
                                <td>{character.skin_color}</td>
                                <td>{character.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </>
    )
}
