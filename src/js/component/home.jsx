import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondscounter.jsx";

const Home = () => {
	const clock = <i className="fa-solid fa-clock fa-5x"></i>;
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// setSeconds(seconds < 9 ? seconds + 1 : 0);//
			setSeconds(seconds + 1);
		}, 1000);

		return () => clearInterval(interval);
	});

	return (
		<div className="Home row bg-dark text-light justify-content-center ">
			<SecondsCounter clock={clock} />
			<SecondsCounter seconds={Math.floor(seconds / 100000) % 10} />
			<SecondsCounter seconds={Math.floor(seconds / 10000) % 10} />
			<SecondsCounter seconds={Math.floor(seconds / 1000) % 10} />
			<SecondsCounter seconds={Math.floor(seconds / 100) % 10} />
			<SecondsCounter seconds={Math.floor(seconds / 10) % 10} />
			<SecondsCounter seconds={seconds % 10} />
		</div>
	);
};

export default Home;
