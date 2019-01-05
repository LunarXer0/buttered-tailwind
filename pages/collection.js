import React, { useEffect } from "react";

import ProfileCard from "../components/ProfileCard";
import MovieGrid from "../components/MovieGrid";

const Collection = props => {
  return (
    <React.Fragment>
      <ProfileCard />
      <MovieGrid />
    </React.Fragment>
  );
};
export default Collection;
