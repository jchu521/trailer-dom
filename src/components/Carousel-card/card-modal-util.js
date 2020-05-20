import React from "react";
import "./card-modal-util.scss";
import MovieCrew from "./movie-crew-util";
import MovieCast from "./movie-cast-util";

function CardModal({ movieDetail, movieCredit }) {
	if (!movieCredit || !movieDetail) {
		return null;
	}

	// console.log(movieDetail);
	console.log(movieCredit);
	const { cast, crew } = movieCredit;
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
						<div className="crew-info">
							<MovieCrew crew={crew} />
						</div>
					</div>
				</div>
			</div>
			<p className="overview row">{movieDetail.overview}</p>
			<div className="actors row">
				<MovieCast cast={cast} />
			</div>
		</div>
	);
}

export default CardModal;
