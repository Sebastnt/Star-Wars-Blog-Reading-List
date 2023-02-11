import React, {useState} from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";
import { Films } from "../component/films.jsx";
import { Navbar } from "../component/navbar.jsx";


export const Home = () => {

	return (
		<>
			<Navbar />
			<Characters />
			<Planets />
			<Films />
		</>
	)
};
