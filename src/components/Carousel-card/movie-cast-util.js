import React from "react";

function MovieCast({ cast }) {
	if (!cast) {
		return null;
	}
	return (
		<React.Fragment>
			{cast.map((el) => {
				return (
					<div key={el.id}>
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
