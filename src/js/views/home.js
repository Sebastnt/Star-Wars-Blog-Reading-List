import React, {useState} from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Films } from "../component/films";
import { Navbar } from "../component/navbar";


export const Home = () => {

	const [favorites, setFavorites] = useState(0)


	return (
		<>
			<Navbar favorites={favorites} />
			<Characters />
			<Planets />
			<Films />
		</>
	)
};
