import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import axios from "axios";
import ItemsCarousel from "react-items-carousel";
import CarouselCard from "../Carousel-card/Carousel-card";

const baseEndPoint = process.env.END_POINT;
const endPoint = `${baseEndPoint}/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`;

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
				numberOfCards={6}
				gutter={5}
				leftChevron={<button>{"<"}</button>}
				rightChevron={<button>{">"}</button>}
				outsideChevron
				chevronWidth={chevronWidth}
			>
				{movie &&
					movie.results &&
					movie.results.map((el) => (
						<CarouselCard
							key={el.id}
							posterPath={el.poster_path}
							releaseDate={el.release_date}
							title={el.title}
							voteAverage={el.vote_average}
						/>
					))}
			</ItemsCarousel>
		</div>
	);
}

export default Carousel;
