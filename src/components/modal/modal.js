import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import { getMovieCreditAPI } from "../../apis/Movies/index";

function Modal({ detail, modalClose, show }) {
	if (!show) {
		return null;
	}
	console.log(detail);

	const [movieCredits, setMovieCredits] = useState(null);

	const fetchMovieCredit = async () => {
		let result = await getMovieCreditAPI(detail.id);
		setMovieCredits(result);
	};

	useEffect(() => {
		fetchMovieCredit();
	}, []);

	const domNode = document.getElementById("modal-root");
	return ReactDOM.createPortal(
		<div className="modal-container">
			<div className="modal-box">
				<button onClick={modalClose} className="close-modal">
					<CancelIcon fontSize="large" />
				</button>
			</div>
		</div>,
		domNode
	);
}

export default Modal;
