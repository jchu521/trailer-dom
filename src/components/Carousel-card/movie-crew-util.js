import React from "react";

function MovieCrew({ crew }) {
	if (!crew) {
		return null;
	}
	const directorScreenPlayWriter = crew.filter((el) => {
		return (
			el.job === "Director" || el.job === "Screenplay" || el.job === "Writer"
		);
	});
	// console.log(directorScreenPlayWriter);
	return (
		<React.Fragment>
			{directorScreenPlayWriter.map((el, index) => {
				return (
					<div key={index}>
						<strong>{el.job}</strong>
						<span>{el.name}</span>
					</div>
				);
			})}
		</React.Fragment>
	);
}

export default MovieCrew;
