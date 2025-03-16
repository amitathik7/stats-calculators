import { useState } from "react";
import "../styles/ZScorePage.css";

function trapezoidal_rule(func, a, b, n) {
	if (n <= 0) throw new Error("Number of intervals 'n' must be positive");

	const dx = (b - a) / n;
	let sum = 0.5 * (func(a) + func(b));

	for (let i = 1; i < n; i++) {
		const x = a + i * dx;
		sum += func(x);
	}

	return sum * dx;
}

function normal_distribution_function(z) {
	return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-(z ** 2) / 2);
}

const ZScorePage = () => {
	const [zScore, setZScore] = useState("");
	const [probability, setProbability] = useState(null);

	const calculate_zscore = () => {
		if (zScore !== "") {
			setProbability(
				Math.trunc(
					trapezoidal_rule(normal_distribution_function, -5, zScore, 10000) *
						10000
				) / 10000
			);
		}
	};

	return (
		<div className="z-score-container">
			<h1>Z-Score Calculator</h1>
			<div className="input-group">
				<input
					type="text"
					value={zScore}
					onChange={(e) => setZScore(e.target.value)}
					placeholder="Enter z-score"
					className="z-score-input"
				/>
				<button onClick={calculate_zscore} className="calculate-btn">
					Calculate
				</button>
				{probability && <p className="probability-result">{probability}</p>}
			</div>
		</div>
	);
};

export default ZScorePage;
