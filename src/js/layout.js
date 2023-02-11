import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { InfoCharacters } from "./views/infoCharacters.jsx";
import { InfoPlanets } from "./views/infoPlanets.jsx";
import { InfoFilms } from "./views/infoFilms.jsx";
import injectContext from "./store/appContext";
import { FavoritesProvider } from "./context/FavoritesProvider.jsx";


import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<FavoritesProvider>
					<ScrollToTop>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/infoCharacters/:id" element={<InfoCharacters />} />
							<Route path="/infoPlanets/:id" element={<InfoPlanets />} />
							<Route path="/infoFilms/:id" element={<InfoFilms />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</FavoritesProvider>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
