import React from "react";

class MovieDetails extends React.Component {
  render() {
    return (
      <div className="max-w-md mx-auto w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        />
        <div className="border-r border-b border-l border-twitter-grey lg:border-l-0 lg:border-t lg:border-twitter-grey bg-twitter rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-white font-bold text-xl mb-2">Baby Driver</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="text-sm">
            <button className="bg-yellow-dark hover:bg-twitter text-white font-semibold hover:text-twitter-red py-2 px-4 border border-white hover:border-twitter-red rounded">
              Add To Collection
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
