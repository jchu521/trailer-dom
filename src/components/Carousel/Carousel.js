import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import CarouselCard from "../Carousel-card/Carousel-card";
import withWindowWidth from "../withWindowWidth/withWindowWidth";
import { ChevronLeft, ChevronRight } from "../chevrons/chevrons";
import { getPopularAPI } from "../../apis/Movies/index";
import { connect } from "react-redux";
import "./Carousel.scss";

function Carousel({ width }) {
	const [movie, setMovie] = useState(null);

	// Calculate the card number needed
	const cardNumber =
		width <= 360 ? 2 : Math.ceil((width * 0.9) / (185 + 16)) - 1;

	const fetchPopularMovie = async () => {
		let result = await getPopularAPI();
		setMovie(result);
	};

	useEffect(() => {
		fetchPopularMovie();
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
				leftChevron={<ChevronLeft />}
				rightChevron={<ChevronRight />}
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
							id={el.id}
						/>
					))}
			</ItemsCarousel>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		movie: state.movie,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPopularMovie: () => dispatch(fetchPopularMovie),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withWindowWidth(Carousel));
