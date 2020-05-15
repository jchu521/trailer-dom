import React from "react";
import useWindowWith from "../useWindowWidth/useWindowWidth";

const withWindowWidth = (Component) => {
	return (props) => {
		const width = useWindowWith();

		return <Component width={width} {...props} />;
	};
};

export default withWindowWidth;
