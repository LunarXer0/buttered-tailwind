import React from "react";

import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import MovieGrid from "../components/MovieGrid";

const Collection = props => (
  <React.Fragment>
    <ProfileCard />
    <MovieGrid />
  </React.Fragment>
);

export default Collection;
