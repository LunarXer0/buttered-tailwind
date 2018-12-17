const TMDB_API_KEY = "a5326823e52c473ffda44ace64b7d44d";

const getMovieForHero = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1&region=US`
  );
  const movies = await res.json();
  const posterPath = movies.results[0].backdrop_path;
  return posterPath;
};

export default getMovieForHero;
