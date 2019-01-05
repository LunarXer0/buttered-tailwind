import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions/actions";
import Movie from "./Movie";

const MovieGrid = ({
  fetchMovies,
  haveLoaded,
  movies,
  searching,
  searchResults
}) => {
  useEffect(() => {
    !haveLoaded && fetchMovies();
  });

  return (
    <div className="w-full flex flex-wrap justify-start p-5 shadow-md m-auto mt-10 text-center">
      {!searching &&
        movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            {...movie}
          />
        ))}
      {searching &&
        searchResults &&
        searchResults.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
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
  bindActionCreators({ fetchMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGrid);
