import React, { useState } from "react";

const SearchBar = () => {
  const [searchType, setSearchType] = useState("movies");
  return (
    <div className="mt-10 flex justify-center">
      <select
        onChange={e => setSearchType(e.target.value)}
        className="bg-twitter appearance-none p-2 rounded-none border-r-2 border-black text-white"
      >
        <option value="movies">Movies 🔽</option>
        <option value="tv">TV Shows</option>
      </select>
      <input
        className="inline-block m-0 py-3 px-3 w-full focus:outline-none bg-twitter text-white"
        placeholder="Search for a movie, TV Show"
      />
    </div>
  );
};

export default SearchBar;
