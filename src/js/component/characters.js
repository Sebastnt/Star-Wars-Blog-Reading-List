import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCharacters } from "../helpers/getCharacters";


export const Characters = ( {favorites} ) => {


	const [characters, setCharacters] = useState([]);

	const setCharactersAsync = async () => {
		const characterList = await getCharacters();
		setCharacters(characterList?.results);
	}

	useEffect(() => {setCharactersAsync()},[])


    return (
        <div className="container mt-2">
			<h2>Characters</h2>
			<div className="card-container mt-4 p-2 d-flex justify-content-between">
				{characters.map( ( {name, hair_color, eye_color, gender}, i ) => (
					<div key= {i} className="card me-5">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} className="card-img-top" alt="Loading from API" />
						<div className="card-body p-3">
							<h4 className="card-title">{name}</h4>
							<p className="card-text"> Gender: {gender}</p>
							<p className="card-text"> Hair Color: {hair_color}</p>
							<p className="card-text"> Eye-Color: {eye_color}</p>
						</div>
						<div className="card-footer d-flex justify-content-between">
							<Link to={`/info/${i+1}`}>
								<button className="btn btn-outline-primary">Learn More!</button>
							</Link>
							<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
						</div>
					</div>
				))}
			</div>
		</div>
    )
}