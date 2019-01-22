import React, { useState } from "react";

const SearchBar = () => {
  const [searchType, setSearchType] = useState("movies");
  return (
    <div className="mt-10 flex justify-center">
      <div className="inline-block relative w-24">
        <select
          onChange={e => setSearchType(e.target.value)}
          className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="movies">Movies</option>
          <option value="tv">TV Shows</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <input
        className="inline-block m-0 py-3 px-3 w-full focus:outline-none bg-twitter text-white"
        placeholder="Search for a movie, TV Show"
      />
    </div>
  );
};

export default SearchBar;
