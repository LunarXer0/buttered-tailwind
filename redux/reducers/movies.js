const initialState = {
  haveLoaded: false,
  movies: []
};

const movies = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        haveLoaded: true,
        movies: data
      };
    default:
      return state;
  }
};

export default movies;
