import React from "react";
import "../../styles/home.css";

import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { Planets } from "../component/planets";

export const Home = () => {
	return (
		<>
			<Characters />
			<Planets />
			<Vehicles />
		</>
	)
};
