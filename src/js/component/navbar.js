import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">STAR WARS</span>
			</Link>
			<div className="dropdown ml-auto">
				<button className="btn btn-primary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge bg-secondary rounded-pill">0</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
					<li className="favorite d-flex justify-content-between p-2">(Empty)<i className="fas fa-trash"></i></li>
				</ul>
			</div>
		</nav>
	);
};
