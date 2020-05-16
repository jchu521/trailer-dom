import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import CancelIcon from "@material-ui/icons/Cancel";

function Modal({ detail, modalClose, show }) {
	if (!show) {
		return null;
	}
	console.log(detail);
	const domNode = document.getElementById("modal-root");
	return ReactDOM.createPortal(
		<div className="modal-container">
			<div className="modal-box">
				<p>wtf</p>
				<button onClick={modalClose} className="close-modal">
					<CancelIcon fontSize="large" />
				</button>
			</div>
		</div>,
		domNode
	);
}

export default Modal;
