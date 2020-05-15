import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

function Modal({ detail, onClick, show }) {
	if (!show) {
		return null;
	}
	const domNode = document.getElementById("modal-root");
	return ReactDOM.createPortal(
		<div className="modal-container">
			<span>WTF</span>
			<span onClick={onClick}>X</span>
		</div>,
		domNode
	);
}

export default Modal;
