import { useState } from "react";

const MeanMedianModePage = () => {
	const [numbers, setNumbers] = useState("");
	const [mean, setMean] = useState(null);
	const [mode, setMode] = useState(null);
	const [median, setMedian] = useState(null);
	const [range, setRange] = useState(null);
	const [minimum, setMinimum] = useState(null);
	const [maximum, setMaximum] = useState(null);
	const [count, setCount] = useState(null);
	const [sum, setSum] = useState(null);
	const [calculatedResults, setCalculatedResults] = useState(false);

	const significant_figures = 4;

	const calculate_statistics = () => {
		const numbers_array = numbers.split(" ").map(Number);
		numbers_array.sort((a, b) => a - b);
		calculate_mean_mode_count_sum(numbers_array);
		calculate_median_range(numbers_array);
		setCalculatedResults(true);
	};

	const calculate_mean_mode_count_sum = (numbers_array) => {
		let sum = 0;
		const frequency = {};

		for (const number of numbers_array) {
			frequency[number] = (frequency[number] || 0) + 1;
			sum += number;
		}

		let max_frequency = 0;
		let results = "";

		for (const num in frequency) {
			if (frequency[num] > max_frequency) {
				max_frequency = frequency[num];
				results = num.toString();
			} else if (frequency[num] === max_frequency) {
				// results.push(num);
				results += ", ";
				results += num;
			}
		}
		setMode(results);
		setMean(
			Math.trunc(
				(sum / numbers_array.length) * Math.pow(10, significant_figures)
			) / Math.pow(10, significant_figures)
		);
		setCount(numbers_array.length);
		setSum(sum);
	};

	const calculate_median_range = (numbers_array) => {
		if (numbers_array.length % 2 === 1) {
			setMedian(numbers_array[(numbers_array.length / 2) | 0]);
		} else {
			setMedian(
				(numbers_array[(numbers_array.length / 2) | 0] +
					numbers_array[((numbers_array.length / 2) | 0) - 1]) /
					2
			);
		}

		setMinimum(numbers_array[0]);
		setMaximum(numbers_array[numbers_array.length - 1]);
		setRange(numbers_array[numbers_array.length - 1] - numbers_array[0]);
	};

	return (
		<div className="mean_median_mode_container">
			<input
				type="text"
				value={numbers}
				onChange={(e) => setNumbers(e.target.value)}
				placeholder="Enter numbers seperated by spaces."
			/>
			<button onClick={calculate_statistics}>Calculate</button>
			{calculatedResults ? (
				<div className="calculator_results">
					<p>Mean: {mean}</p>
					<p>Median: {median}</p>
					<p>Mode(s): {mode}</p>
					<p>Range: {range}</p>
					<p>Minimum: {minimum}</p>
					<p>Maximum: {maximum}</p>
					<p>Count: {count}</p>
					<p>Sum: {sum}</p>
				</div>
			) : (
				<p>NO RESULTS</p>
			)}
		</div>
	);
};

export default MeanMedianModePage;
