import React from "react";
import "./chevrons.scss";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const ChevronLeft = () => {
	return (
		<div className="chev-left">
			<ChevronLeftIcon fontSize="large" />
		</div>
	);
};

export const ChevronRight = () => {
	return (
		<div className="chev-right">
			<ChevronRightIcon fontSize="large" />
		</div>
	);
};
