const initialState = {
  haveLoaded: false,
  movies: [],
  searching: false,
  searchResults: []
};

export const FETCH_MOVIES = "FETCH_MOVIES";
export const ENTER_SEARCH_VIEW = "ENTER_SEARCH_VIEW";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const RESET_SEARCH_VIEW = "RESET_SEARCH_VIEW";
export const RESET_HAVE_LOADED_STATE = "RESET_HAVE_LOADED_STATE";

const movies = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        haveLoaded: true,
        movies: data
      };
    case "ENTER_SEARCH_VIEW":
      return {
        ...state,
        searching: true
      };
    case "SEARCH_MOVIE":
      return {
        ...state,
        searchResults: data
      };
    case "RESET_SEARCH_VIEW":
      return {
        ...state,
        searching: false,
        searchResults: []
      };
    case "RESET_HAVE_LOADED_STATE":
      return {
        ...state,
        haveLoaded: false
      };
    default:
      return state;
  }
};

export default movies;
