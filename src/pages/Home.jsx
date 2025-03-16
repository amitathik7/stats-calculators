import { Link } from "react-router-dom";

import "../styles/HomePage.css";

const Home = () => {
	const calculators = [
		{
			name: "Mean, Median, Mode Calculator",
			link: "/mean_median_mode_calculator",
		},
		{
			name: "Z-Score Calculator",
			link: "/z_score_calculator",
		},
	];
	return (
		<div className="home_page_container">
			<h1 className="home_page_title">Calculator Website Home Page Title</h1>
			<div className="calculators_container">
				{calculators.map((item, index) => (
					<div className="individual_calculator_container">
						<Link to={item.link}>
							<button className="calculator_navigation_button">{item.name}</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
