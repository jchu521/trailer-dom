import React from "react";
import ReactDOM from "react-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import "./modal.scss";

function Modal({ modalClose, show, ...otherProps }) {
	if (!show) {
		return null;
	}

	const domNode = document.getElementById("modal-root");
	return ReactDOM.createPortal(
		<div className="modal-container">
			<div className="modal-box">
				<button onClick={modalClose} className="close-modal">
					<CancelIcon fontSize="large" />
				</button>
				{otherProps.children}
			</div>
		</div>,
		domNode
	);
}

export default Modal;
