import React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const Search = ({ searchResults }) => (
  <React.Fragment>
    <SearchBar />
    {searchResults && <MovieGrid />}
  </React.Fragment>
);

const mapStateToProps = store => ({
  searchResults: store.movies.searchResults
});

export default connect(mapStateToProps)(Search);
