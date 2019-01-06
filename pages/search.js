import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchToSearchView, resetSearchView } from "../redux/actions/actions";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

const Search = ({ searching, switchToSearchView, resetSearchView }) => {
  useEffect(() => {
    searching === false && switchToSearchView();
    return () => {
      resetSearchView();
    };
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
      {searching === true && <MovieGrid />}
    </React.Fragment>
  );
};

const mapStateToProps = store => ({
  searching: store.movies.searching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ switchToSearchView, resetSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
