import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Hero from "../components/Hero";

const MovieDetails = ({ selectedMovie }) => {
  useEffect(() => {
    //console.log(selectedMovie);
  });

  return (
    <Fragment>
      <Hero backdrop={selectedMovie.backdrop_path} />;
    </Fragment>
  );
};

const mapStateToProps = store => ({
  selectedMovie: store.movies.selectedMovie
});

export default connect(mapStateToProps)(MovieDetails);
