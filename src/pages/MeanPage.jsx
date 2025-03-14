import { useState } from "react";

const MeanPage = () => {
	const [numbers, setNumbers] = useState("");
	const [mean, setMean] = useState(0);

	const calculate_mean = () => {
		const numbers_array = numbers.split(" ").map(Number);
		let sum = 0;

		numbers_array.forEach((i) => {
			sum += i;
		});

		setMean(sum / numbers_array.length);
	};

	return (
		<div>
			<h2>Mean Calculator</h2>
			<div>
				<input
					type="text"
					value={numbers}
					onChange={(e) => setNumbers(e.target.value)}
					placeholder="Enter numbers seperated by spaces"
				/>
				<button onClick={calculate_mean}>Submit</button>
				<p>Mean: {mean}</p>
			</div>
		</div>
	);
};

export default MeanPage;
