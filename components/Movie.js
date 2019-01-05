import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Link from "next/link";
import { handleMovieSelection } from "../redux/actions/actions";

const Movie = ({ handleMovieSelection, poster, title, details }) => (
  <Link href="/movieDetails">
    <a>
      <img
        className="m-2"
        onClick={() => handleMovieSelection(details)}
        src={poster}
        alt={title}
      />
    </a>
  </Link>
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
