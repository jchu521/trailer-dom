import React, { useEffect, useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Tooltip from "@material-ui/core/Tooltip";
import { getMovieDetailAPI, getMovieCreditAPI } from "../../apis/Movies/index";
import Modal from "../modal/modal";
import CardModal from "./card-modal-util";
import "./Carousel-card.scss";

function CarouselCard({ posterPath, voteAverage, releaseDate, title, id }) {
	const [movieDetail, setMovieDetail] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [movieCredit, setMovieCredit] = useState(null);

	const fetchMovieDetail = async () => {
		let result = await getMovieDetailAPI(id);
		setMovieDetail(result);
	};

	const handleClick = async () => {
		let result = await getMovieCreditAPI(id);
		setMovieCredit(result);
		setModalShow(!modalShow);
	};

	const handleModalClose = (e) => {
		e.preventDefault();
		setModalShow(!modalShow);
	};

	useEffect(() => {
		fetchMovieDetail();
	}, []);

	return (
		<div className="carousel-card">
			<Tooltip title={title} placement="top">
				<img
					src={`${process.env.POSTER_END_POINT_SMALL}${posterPath}`}
					alt="poster"
					className="card-img"
					onClick={handleClick}
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

			<Modal modalClose={handleModalClose} show={modalShow}>
				<CardModal movieDetail={movieDetail} movieCredit={movieCredit} />
			</Modal>
		</div>
	);
}

export default CarouselCard;
