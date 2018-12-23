import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchToSearchView } from "../redux/actions/actions";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

class Search extends React.Component {
  componentDidMount() {
    const { switchToSearchView, searching } = this.props;
    !searching && switchToSearchView();
  }
  render() {
    const { searching } = this.props;
    return (
      <React.Fragment>
        <SearchBar />
        {searching && <MovieGrid />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  searching: store.movies.searching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ switchToSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
