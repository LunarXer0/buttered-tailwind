import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchLocalStorageMovies } from "../redux/actions/actions";

import Movie from "./Movie";

const MovieGrid = ({
  movies,
  searching,
  searchResults,
  fetchLocalStorageMovies
}) => {
  useEffect(() => {
    searching === false && fetchLocalStorageMovies();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-start m-10">
      {!searching &&
        movies.map(movie => (
          <Movie
            key={movie.id}
            details={movie}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          />
        ))}
      {searching &&
        searchResults &&
        searchResults.map(movie => (
          <Movie
            key={movie.id}
            details={movie}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          />
        ))}
    </div>
  );
};

const mapStateToProps = store => ({
  haveLoaded: store.movies.haveLoaded,
  movies: store.movies.movies,
  searching: store.movies.searching,
  searchResults: store.movies.searchResults
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchLocalStorageMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGrid);
