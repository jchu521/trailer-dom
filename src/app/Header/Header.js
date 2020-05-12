import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="header container">
				<div className="header row">
					<span className="col-md-2 col-lg-5">logo</span>
					<div className="col-md-10 col-lg-7">131231231</div>
				</div>
			</div>
			<SearchBar />
		</header>
	);
}
