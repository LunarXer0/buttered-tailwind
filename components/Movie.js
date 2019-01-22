import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Link from "next/link";
import { handleMovieSelection } from "../redux/actions/actions";

const Movie = ({ poster, title }) => (
  <React.Fragment>
    <Link href="/movieDetails">
      <a>
        <img className="m-2" src={poster} alt={title} />
      </a>
    </Link>
  </React.Fragment>
);

const mapStateToProps = store => ({
  selectedMovie: store.movies.selectedMovie
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleMovieSelection
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
