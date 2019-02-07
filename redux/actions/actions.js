import {
  FETCH_MOVIES,
  ENTER_SEARCH_VIEW,
  SEARCH_MOVIE,
  RESET_SEARCH_VIEW,
  HANDLE_MOVIE_SELECTION,
  FETCH_LOCAL_STORAGE_MOVIES,
  POPULAR_MOVIES
} from "../reducers/movies";

import {
  getLocalStorageMovies,
  getLocalStorageItem
} from "../../utilities/localStorage";

const TMDB_API_KEY = "a5326823e52c473ffda44ace64b7d44d";

export const fetchMovies = () => async dispatch => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1&region=US`
  );
  const { results } = await res.json();
  return dispatch({
    type: FETCH_MOVIES,
    data: results
  });
};

export const fetchLocalStorageMovies = () => async dispatch => {
  const movies = getLocalStorageItem("movies");
  return dispatch({
    type: FETCH_LOCAL_STORAGE_MOVIES,
    data: movies
  });
};

export const getPopularMovies = () => async dispatch => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`
  );
  const { results } = await res.json();
  const sorted = results.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });

  return dispatch({
    type: POPULAR_MOVIES,
    data: sorted
  });
};

export const switchToSearchView = () => dispatch => {
  return dispatch({
    type: ENTER_SEARCH_VIEW
  });
};

export const resetSearchView = () => async dispatch => {
  return dispatch({
    type: RESET_SEARCH_VIEW
  });
};

export const handleMovieSelection = data => async dispatch => {
  return dispatch({
    type: HANDLE_MOVIE_SELECTION,
    data
  });
};

export const searchMovie = title => async dispatch => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
  );
  const { results } = await res.json();
  return dispatch({
    type: SEARCH_MOVIE,
    data: results
  });
};
