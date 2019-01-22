import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Hero from "../components/Hero";
import {
  addMovieToLocalStorage,
  checkIfMovieIsInLocalStorage
} from "../utilities/localStorage";

const MovieDetails = ({ selectedMovie }) => {
  return (
    <Fragment>
      <Hero backdrop={selectedMovie.backdrop_path} />;
      <div className="mx-auto text-center">
        <button
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => addMovieToLocalStorage(selectedMovie)}
        >
          {checkIfMovieIsInLocalStorage(selectedMovie)
            ? "Watched"
            : "Add To Collection"}
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = store => ({
  selectedMovie: store.movies.selectedMovie
});

export default connect(mapStateToProps)(MovieDetails);
