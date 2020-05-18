import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import SearchIcon from "@material-ui/icons/Search";

import { handleToggleSearch, handleFetch } from "../../redux/actions";
import { search } from "../../apis/Search";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const { handleToggleSearch, startedSearch, handleSearch } = props;
  const inputRef = useRef(null);
  const delayedQuery = useRef(
    debounce((data) => handleSearch(search, data), 1000)
  ).current;

  useEffect(() => {
    if (startedSearch) inputRef.current.focus();
  }, [startedSearch]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const data = {
      query: value,
    };
    delayedQuery(data);
  };

  return (
    <div className="searchbar">
      <div className="searchbar row">
        {startedSearch ? (
          <span className="searchbar-input-wrapper row">
            <input
              ref={inputRef}
              className="searchbar-input m-l-2"
              onChange={handleInputChange}
            />
            <SearchIcon
              className="searchbar-input-icon"
              onClick={handleToggleSearch}
            />
          </span>
        ) : (
          <SearchIcon onClick={handleToggleSearch} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ SearchState }) => ({
  startedSearch: SearchState.startedSearch,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSearch: () => dispatch(handleToggleSearch()),
    handleSearch: (func, data) => dispatch(handleFetch(func, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
