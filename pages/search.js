import React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const Search = ({ searching }) => (
  <React.Fragment>
    <SearchBar />
    {searching && <MovieGrid />}
  </React.Fragment>
);

const mapStateToProps = store => ({
  searching: store.movies.searching
});

export default connect(mapStateToProps)(Search);
