import React, { useEffect, useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Tooltip from "@material-ui/core/Tooltip";
import { getMovieDetailAPI } from "../../apis/Movies/index";
import Modal from "../modal/modal";
import "./Carousel-card.scss";

function CarouselCard({ posterPath, voteAverage, releaseDate, title, id }) {
	const [movieDetail, setMovieDetail] = useState(null);
	const [modalShow, setModalShow] = useState(false);

	const fetchMovieDetail = async () => {
		let result = await getMovieDetailAPI(id);
		setMovieDetail(result);
	};

	useEffect(() => {
		fetchMovieDetail();
	}, []);

	const handleClick = () => {
		setModalShow(!modalShow);
	};

	return (
		<div className="carousel-card">
			<Tooltip title={title} placement="top">
				<img
					src={`${process.env.POSTER_END_POINT_SMALL}${posterPath}`}
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

			<Modal detail={movieDetail} modalClose={handleClick} show={modalShow} />
		</div>
	);
}

export default CarouselCard;
