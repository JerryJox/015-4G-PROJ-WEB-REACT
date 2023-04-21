import React from "react";

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
			<Jumbotron/>
			<div className="container-fluid row p-0 mx-5 d-flex justify-content-between">
				<Card className="col-md-auto"/>
				<Card className="col-md-auto"/>
				<Card className="col-md-auto"/>
				<Card className="col-md-auto"/>	
			</div>
			<Footer/>			
		</div>
	);
};

export default Home;