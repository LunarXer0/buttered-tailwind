import React, { Component } from "react";
import { getRandomBackDrop } from "../redux/actions/actions";

export default class Hero extends Component {
  state = {
    backdropPath: null
  };
  async componentDidMount() {
    const BACKDROP_PATH = await getRandomBackDrop();
    this.setState({ backdropPath: BACKDROP_PATH });
  }
  render(poster) {
    const { backdropPath } = this.state;
    return (
      <div className="w-full z-0 text-center">
        {backdropPath && (
          <img
            src={`https://image.tmdb.org/t/p/original${
              this.state.backdropPath
            }`}
            alt="poster"
          />
        )}
      </div>
    );
  }
}
