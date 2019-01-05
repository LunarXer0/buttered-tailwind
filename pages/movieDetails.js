import React, { useEffect } from "react";
import { connect } from "react-redux";

const MovieDetails = ({ selectedMovie }) => {
  useEffect(() => {
    //console.log(selectedMovie);
  });

  return (
    <div className="max-w-md my-24 flex mx-auto">
      <div
        className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${
            selectedMovie.poster_path
          })`
        }}
      />
      <div className="border-r border-b border-l border-twitter-grey lg:border-l-0 lg:border-t lg:border-twitter-grey bg-twitter rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-white font-bold text-xl mb-2">
            {selectedMovie.original_title}
          </div>
          <p className="text-grey-darker text-base">{selectedMovie.overview}</p>
        </div>
        <div className="text-sm">
          <button className="bg-yellow-dark hover:bg-twitter text-white font-semibold hover:text-twitter-red py-2 px-4 border border-white hover:border-twitter-red rounded">
            Add To Collection
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  selectedMovie: store.movies.selectedMovie
});

export default connect(mapStateToProps)(MovieDetails);
