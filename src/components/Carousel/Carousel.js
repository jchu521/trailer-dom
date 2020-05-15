import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import axios from "axios";
import ItemsCarousel from "react-items-carousel";
import CarouselCard from "../Carousel-card/Carousel-card";
import withWindowWidth from "../withWindowWidth/withWindowWidth";

const baseEndPoint = process.env.END_POINT;
const endPoint = `${baseEndPoint}/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`;

function Carousel({ width }) {
	const [movie, setMovie] = useState(null);

	const cardNumber = Math.ceil((width * 0.9 - 20) / (185 + 16));
	console.log(cardNumber);

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
		<div className="container carousel">
			<ItemsCarousel
				infiniteLoop={true}
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={cardNumber}
				gutter={8}
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

export default withWindowWidth(Carousel);
