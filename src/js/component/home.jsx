import React from "react";
import Navbar from "./navbar.jsx"

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Card/>
			<Jumbotron/>
			<Footer/>			
		</div>
	);
};

export default Home;