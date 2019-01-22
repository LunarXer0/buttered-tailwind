import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Home from "../pages/home";
import { resetSearchView } from "../redux/actions/actions";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
};

const mapStateToProps = store => ({
  searching: store.movies.searching,
  movies: store.movies.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
