import React from "react";
import "./card-modal-util.scss";

function CardModal({ movieDetail, movieCredit }) {
	if (!movieCredit || !movieDetail) {
		return null;
	}
	console.log(movieDetail);
	return (
		<React.Fragment>
			<div className="brief-section row">
				<div className="title-poster-container col-sm-6">
					<div className="row">
						<span className="col-sm-12">{movieDetail.title}</span>
						<img
							className="col-sm-12"
							src={`${process.env.POSTER_END_POINT_MEDIUM}${movieDetail.poster_path}`}
							alt="poster"
						/>
					</div>
				</div>
				<div className="brief-info col-sm-6">
					<span>info</span>
				</div>
			</div>
			<p className="overview">overview</p>
			<div className="actors"></div>
		</React.Fragment>
	);
}

export default CardModal;
