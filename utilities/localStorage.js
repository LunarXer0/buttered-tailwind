export const addMovieToLocalStorage = movie => {
  let localStorageMovies = getLocalStorageMovies();
  const found = checkIfMovieIsInLocalStorage(movie);
  if (!found) {
    localStorageMovies.push(movie);
    localStorage.setItem("movies", JSON.stringify(localStorageMovies));
  }
};

export const checkIfMovieIsInLocalStorage = movie => {
  const localStorageMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const found = localStorageMovies.some(
    localStoageMovie => localStoageMovie.id === movie.id
  );
  return found;
};

export const getLocalStorageMovies = () => {
  return JSON.parse(localStorage.getItem("movies")) || [];
};
