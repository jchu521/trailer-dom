import React from "react";
import "./movie-cast-util.scss";

function MovieCast({ cast }) {
	if (!cast) {
		return null;
	}
	return (
		<React.Fragment>
			{cast.map((el) => {
				return (
					<div key={el.id} className="actor-card">
						<img
							src={`${process.env.ACTOR_PHOTO_END_POINT}${el.profile_path}`}
							alt="actor-photo"
						/>
						<strong>{el.name}</strong>
						<span>{el.character}</span>
					</div>
				);
			})}
		</React.Fragment>
	);
}

export default MovieCast;
