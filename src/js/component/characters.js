import React from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
    return (
        <div className="container mt-2">
				<h2>Characters</h2>
				<div className="mt-4 p-2">
					<div className="card">
						<img src="https://c8.alamy.com/compes/2b8w8da/star-wars-1977-lucasfilm-20th-century-fox-con-mark-hamill-como-luke-skywalker-2b8w8da.jpg" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-footer d-flex justify-content-between">
							<Link to="/demo">
								<button className="btn btn-outline-primary">Learn More!</button>
							</Link>
							<button className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
						</div>
					</div>
				</div>
			</div>
    )
}