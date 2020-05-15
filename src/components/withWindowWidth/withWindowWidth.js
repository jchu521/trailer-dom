import React from "react";
import useWindowWith from "../useWindowWidth/useWindowWidth";

const withWindowWidth = (Component) => {
	const withWindowWidth = (props) => {
		withWindowWidth.displayName = `withWindowWidth(${
			Component.displayName || "Component"
		})`;
		const width = useWindowWith();

		return <Component width={width} {...props} />;
	};
	return withWindowWidth;
};

export default withWindowWidth;
