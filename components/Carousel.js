import React, { useState } from "react";
import Movie from "./Movie";

const Carousel = () => {
  const [movies, setMovies] = useLocalStorage("movies", "");
  console.log(movies);
  return (
    <div className="mt-10">
      {movies &&
        movies.map(movie => (
          <Movie
            key={movie.id}
            poster={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            title={movie.title}
          />
        ))}
    </div>
  );
};

export default Carousel;

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
