import { useEffect, useState } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);

	useEffect(() => {
		const handler = () => {
			setWindowWidth(document.body.clientWidth);
		};
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	return windowWidth;
};

export default useWindowWidth;
