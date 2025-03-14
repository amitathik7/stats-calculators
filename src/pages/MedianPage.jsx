import { useState } from "react";

const MedianPage = () => {
	const [numbers, setNumbers] = useState("");
	const [median, setMedian] = useState(0.0);

	const calculate_median = () => {
		const numbers_array = numbers.split(" ").map(Number);
		numbers_array.sort((a, b) => a - b);
		console.log(numbers_array);
		if (numbers_array.length % 2 === 1) {
			setMedian(numbers_array[(numbers_array.length / 2) | 0]);
		} else {
			setMedian((numbers_array[(numbers_array.length / 2) | 0] + numbers_array[((numbers_array.length / 2) | 0) - 1]) / 2);
		}
	};

	return (
		<div>
			<h2>Median Calculator</h2>
			<p>Median Calculator Here</p>
			<input
				type="text"
				value={numbers}
				onChange={(e) => setNumbers(e.target.value)}
				placeholder="Enter numbers seperated by spaces"
			/>
			<button onClick={calculate_median}>Submit</button>
			<p>Median: {median}</p>
		</div>
	);
};

export default MedianPage;
