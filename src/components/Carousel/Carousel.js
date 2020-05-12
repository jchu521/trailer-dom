import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import axios from "axios";
import ItemsCarousel from "react-items-carousel";
import CarouselCard from "../Carousel-card/Carousel-card";

const baseEndPoint = process.env.END_POINT;
const endPoint = `${baseEndPoint}/movie/338762?api_key=${process.env.MOVIEDB_API_KEY}`;

function Carousel() {
	const [movie, setMovie] = useState(null);
	console.log(endPoint);

	useEffect(() => {
		axios
			.get(endPoint)
			.then((res) => {
				if (res.status === 200) {
					setMovie(res.data);
					console.log(res.data);
				}
			})
			.catch((err) => window.alert(err));
	}, []);

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 10;
	return (
		<div className="container">
			<ItemsCarousel
				infiniteLoop={true}
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={3}
				gutter={20}
				leftChevron={<button>{"<"}</button>}
				rightChevron={<button>{">"}</button>}
				outsideChevron
				chevronWidth={chevronWidth}
			>
				<CarouselCard />
				<CarouselCard />
				<CarouselCard />
				<CarouselCard />
				<CarouselCard />
			</ItemsCarousel>
		</div>
	);
}

export default Carousel;
