import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getNowPlayingAPI } from "../../apis/Movies/index";
import "./Header.scss";

export default function Header() {
  const fetchNowPlayingMovies = async () => {
    let r = await getNowPlayingAPI();
    console.log(r);
    return r;
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <header className="header">
      <div className="header container">
        <div className="header row">
          <div className="col-sm-8">Logo</div>
          <div className="col-sm-1">Home</div>
          <div className="col-sm-1">Movies</div>
          <div className="col-sm-1">Series</div>
          <div className="col-sm-1">Search</div>
        </div>
      </div>
      <SearchBar />
    </header>
  );
}
