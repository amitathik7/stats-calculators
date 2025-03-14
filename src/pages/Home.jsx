import { Link } from "react-router-dom";

import "../styles/HomePage.css"

const Home = () => {
	const calculators = [
		{
			name: "Mean Calculator",
			link: "/mean_calculator",
		},
		{
			name: "Mode Calculator",
			link: "/mode_calculator",
		},
		{
			name: "Median Calculator",
			link: "/median_calculator",
		},
	];
	return (
		<div className="home_container">
			<h1 className="title">Calculator Website Home Page Title</h1>
			<div className="calculators_container">
				{calculators.map((item, index) => (
					<Link to={item.link} className="individual_calculator_container">
						<div className="container_content">
							<h3>{item.name}</h3>
							<button className="navigation_button">Open Calculator</button>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
