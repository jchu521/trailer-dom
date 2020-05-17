import React, { useEffect } from "react";
import { connect } from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar";
import { getNowPlayingAPI } from "../../apis/Movies/index";

import "./Header.scss";

const Header = (props) => {
  const { startedSearch } = props;
  const fetchNowPlayingMovies = async () => {
    let r = await getNowPlayingAPI();
    return r;
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <header className="header">
      <div className="header container">
        <div className="header row">
          <div className={`col-sm-${startedSearch ? "5" : "8"}`}>Logo</div>
          <div className="col-sm-1">Home</div>
          <div className="col-sm-1">Movies</div>
          <div className="col-sm-1">Series</div>
          <div className={`col-sm-${startedSearch ? "4" : "1"}`}>
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ SearchState }) => ({
  startedSearch: SearchState.startedSearch,
});

export default connect(mapStateToProps)(Header);
