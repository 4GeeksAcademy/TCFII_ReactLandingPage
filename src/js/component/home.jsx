import React from "react";
import { Navbar } from "./Navbar";
import { CardRow } from "./CardRow";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<CardRow>
				<Card />
				<Card />
				<Card />
				<Card />
			</CardRow>
			<Footer />
			{/*<Jumbotron />
			<Footer /> */}
		</>
	);
};

export default Home;
