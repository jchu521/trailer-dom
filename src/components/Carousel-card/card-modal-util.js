import React from "react";
import "./card-modal-util.scss";

function CardModal({ movieDetail, movieCredit }) {
	if (!movieCredit || !movieDetail) {
		return null;
	}
	console.log(movieDetail);
	return (
		<div className="outter-container row">
			<div className="col-sm-12 brief-section">
				<span className="col-sm-12">
					{movieDetail.title}({movieDetail.release_date})
				</span>
				<div className="row poster-info-container">
					<div className="poster-container col-sm-6">
						<div className="row">
							<img
								className="col-sm-12"
								src={`${process.env.POSTER_END_POINT_MEDIUM}${movieDetail.poster_path}`}
								alt="poster"
							/>
						</div>
					</div>
					<div className="brief-info col-sm-6">
						<div className="genres row">
							{movieDetail.genres.map((el, index) => (
								<span key={index}>{el.name}</span>
							))}
						</div>
						<div className="tagline row">{movieDetail.tagline}</div>
					</div>
				</div>
			</div>
			<p className="overview row">{movieDetail.overview}</p>
			<div className="actors row"></div>
		</div>
	);
}

export default CardModal;
