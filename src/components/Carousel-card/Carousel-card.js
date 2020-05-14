import React from "react";
import "./Carousel-card.scss";
import PropTypes from "prop-types";

const basePosterUrl = process.env.POSTER_END_POINT_SMALL;

CarouselCard.propTypes = {
	posterPath: PropTypes.any,
	voteAverage: PropTypes.any,
	releaseDate: PropTypes.any,
	title: PropTypes.any,
};

function CarouselCard(props) {
	const { posterPath, voteAverage, releaseDate, title } = props;
	// const title = "Bloodshot";
	// const releaseDate = "2020-01-20";
	// const voteAverage = "7.11";
	// const posterPath = "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg";
	const posterUrl = `${basePosterUrl}${posterPath}`;

	return (
		<div className="carousel-card">
			<img src={posterUrl} alt="poster" className="card-img" />
			<strong className="card-title">{title}</strong>
			<div className="sub-container">
				<span className="card-date">{releaseDate}</span>
				<span className="card-vote">{voteAverage}</span>
			</div>
		</div>
	);
}

export default CarouselCard;
