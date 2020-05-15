import React, { useEffect, useState } from "react";
import "./Carousel-card.scss";
import StarRateIcon from "@material-ui/icons/StarRate";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import Modal from "../modal/modal";

const basePosterUrl = process.env.POSTER_END_POINT_SMALL;
const baseUrl = process.env.END_POINT;

// CarouselCard.propTypes = {
// 	posterPath: PropTypes.any,
// 	voteAverage: PropTypes.any,
// 	releaseDate: PropTypes.any,
// 	title: PropTypes.any,
// };

function CarouselCard({ posterPath, voteAverage, releaseDate, title, id }) {
	const endPoint = `${baseUrl}/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`;
	const [movieDetail, setMovieDetail] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		axios
			.get(endPoint)
			.then((res) => setMovieDetail(res))
			.catch((err) => console.log(err));
	}, []);

	const handleClick = () => {
		setModalShow(!modalShow);
	};

	const posterUrl = `${basePosterUrl}${posterPath}`;

	return (
		<div className="carousel-card">
			<Tooltip title={title} placement="top">
				<img
					src={posterUrl}
					alt="poster"
					className="card-img"
					onClick={() => setModalShow(!modalShow)}
				/>
			</Tooltip>
			<strong className="card-title">{title}</strong>
			<div className="sub-container">
				<span className="card-date">{releaseDate}</span>
				<span className="card-vote">
					<StarRateIcon fontSize="small" />
					{voteAverage}
				</span>
			</div>

			<Modal detail={movieDetail} onClick={handleClick} show={modalShow} />
		</div>
	);
}

export default CarouselCard;
