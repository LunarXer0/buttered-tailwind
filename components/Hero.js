import React, { Component } from "react";
import getMovieForHero from "../redux/actions/actions";

export default class Hero extends Component {
  state = {
    posterPath: ""
  };
  async componentDidMount() {
    const posterPath = await getMovieForHero();
    this.setState({ posterPath });
  }
  render(poster) {
    return (
      <div className="w-full z-0 text-center">
        <img
          src={`https://image.tmdb.org/t/p/w1280${this.state.posterPath}`}
          alt="poster"
        />
      </div>
    );
  }
}
