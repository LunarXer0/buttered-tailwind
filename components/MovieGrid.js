import React from "react";
import getMovieForHero from "../redux/actions/actions";

const MovieGrid = () => (
  <div className="w-1/2 shadow-md m-auto text-center">
    <button
      className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
      onClick={getMovieForHero}
    >
      Test API Key
    </button>
  </div>
);

export default MovieGrid;
