import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="SecondsCounter border-3 border-top-0 border-bottom-0 border border-secondary rounded d-flex align-items-center justify-content-center ">
			{props.clock}
			{props.seconds}
		</div>
	);
};

SecondsCounter.propTypes = {
	clock: propTypes.object,
	seconds: propTypes.number,
};

export default SecondsCounter;
