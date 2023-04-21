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
			<div className="container m-5">
				<div className="row justify-content-between">
					<Card className="col-sm-12"/>
					<Card className="col-sm-12"/>
					<Card className="col-sm-12"/>
					<Card className="col-sm-12"/>	
				</div>
			</div>
			<Footer/>			
		</div>
	);
};

export default Home;