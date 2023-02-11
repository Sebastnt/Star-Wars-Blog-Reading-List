import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlanets } from "../helpers/getPlanets";
import { Navbar } from "../component/navbar.jsx";

import "../../styles/info.css";

export const InfoPlanets = () => {

    const {id} = useParams();

    const [planet, setPlanet] = useState({});
    
    const setPlanetInfoAsync = async () => {
		const singlePlanet = await getPlanets(id);
		setPlanet(singlePlanet);
	}

    useEffect(() => {setPlanetInfoAsync()},[])

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="infotop d-flex justify-content-evenly p-2">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
						onError={(e) => {
						e.target.onError = null; 
						e.target.src ="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg";
						}} className="infocard" alt="..." />
                    <div className="info p-3 text-center">
                        <h1>{planet.name}</h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="infofooter mt-4 p-3"> 
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Rotation Period</th>
                                <th scope="col">Orbital Period</th>
                                <th scope="col">Diameter</th>
                                <th scope="col">Gravity</th>
                                <th scope="col">Population</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{planet.name}</td>
                                <td>{planet.rotation_period}</td>
                                <td>{planet.orbital_period}</td>
                                <td>{planet.diameter}</td>
                                <td>{planet.gravity}</td>
                                <td>{planet.population}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </>
    )
}