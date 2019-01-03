import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { resetSearchView } from "../redux/actions/actions";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const Search = ({ searching, resetSearchView }) => {
  useEffect(() => {
    return () => resetSearchView();
  });

  return (
    <React.Fragment>
      <SearchBar />
      {searching && <MovieGrid />}
    </React.Fragment>
  );
};

const mapStateToProps = store => ({
  searching: store.movies.searching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
