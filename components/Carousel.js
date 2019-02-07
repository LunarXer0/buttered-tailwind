import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPopularMovies } from "../redux/actions/actions";
import Movie from "./Movie";

const Carousel = ({ popularMovies, getPopularMovies }) => {
  const [movies, setMovies] = useLocalStorage("movies", "");
  const [popMovies, setPopMovies] = useState("");

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="mt-10">
      {popularMovies &&
        popularMovies
          .slice(0, 12)
          .map(movie => (
            <Movie
              key={movie.id}
              poster={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              title={movie.title}
            />
          ))}
    </div>
  );
};

const mapStateToProps = store => ({
  popularMovies: store.movies.popularMovies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPopularMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

function useLocalStorage(key, initialValue) {
  const [item, setInnerValue] = useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
}
