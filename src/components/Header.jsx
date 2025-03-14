import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<p>Personal Calculators</p>
			<Link to={"/"} style={{ textDecoration: "None" }}>
				<p>Home</p>
			</Link>
		</div>
	);
};

export default Header;
