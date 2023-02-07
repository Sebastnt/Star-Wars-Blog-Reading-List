import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const Films = () => {
    
	const [films, setFilms] = useState([]);
	

	const getFilms = async () => {
		try {
			const resp = await fetch('https://swapi.dev/api/films')
			const data = await resp.json();
			const results = data.results;
			setFilms(results);
		}catch(e) {
			console.log("fallo mi llamada")
		}
	}
	
	useEffect(() => {getFilms()},[])
	
	
    return (
        <div className="container mt-2">
			<h2>Films</h2>
			<div className="card-container mt-4 p-2 d-flex justify-content-between">
				{films.map( ( {title, episode_id, director, producer, release_date}, i ) => (
					<div key= {i} className="card me-5">
						<img src={`https://starwars-visualguide.com/assets/img/films/${i+1}.jpg`} className="card-img-top" alt="Loading Image from API" />
						<div className="card-body p-3">
							<h4 className="card-title">{title} {episode_id}</h4>
							<p className="card-text"> Director: {director}</p>
							<p className="card-text"> Producer: {producer}</p>
							<p className="card-text"> Release Date: {release_date}</p>
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