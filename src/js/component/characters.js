import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";



export const Characters = () => {


	const [characters, setCharacters] = useState([]);
	const [people, setPeople] = useState([]);

	const getCharacters = async () => {
		try {
			const resp = await fetch('https://www.swapi.tech/api/people')
			const data = await resp.json();
			const results = data.results
			setCharacters(results)
		}catch(e) {
			console.log("fallo mi llamada")
		}
	}
	//Agregar useEffect aca?

	getCharacters();


    return (
        <div className="container mt-2">
			<h2>Characters</h2>
			<div className="card-container mt-4 p-2 d-flex justify-content-between">
				{characters.map( ( {uid, name, url} ) => (
					<div key= {uid} className="card me-5">
						<img src="https://c8.alamy.com/compes/2b8w8da/star-wars-1977-lucasfilm-20th-century-fox-con-mark-hamill-como-luke-skywalker-2b8w8da.jpg" className="card-img-top" alt="..." />
						<div className="card-body p-3">
							<h4 className="card-title">{name}</h4>
							<p className="card-text"> Gender: algo</p>
							<p className="card-text"> Hair Color: algo</p>
							<p className="card-text"> Eye-Color: algo</p>
						</div>
						<div className="card-footer d-flex justify-content-between">
							<Link to="/info">
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