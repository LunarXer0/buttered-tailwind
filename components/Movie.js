import React from "react";

const Movie = props => (
  <img className="m-2" src={props.poster} alt={props.title} />
);

export default Movie;
