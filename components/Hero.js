import React, { useState, useEffect } from "react";

const Hero = ({ backdrop }) => {
  const [tmdbPosterPath, setTMDBPosterPath] = useState("");
  const path = `https://image.tmdb.org/t/p/original${backdrop}`;

  return (
    <div
      className="w-4/5 mx-auto"
      style={{
        height: "35rem",
        backgroundImage: `url(${path})`,
        backgroundSize: "cover"
      }}
    />
  );
};

export default Hero;
