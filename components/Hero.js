import React, { Component } from "react";
import { getRandomBackDrop } from "../redux/actions/actions";

export default class Hero extends Component {
  state = {
    tmdbPosterPath: null
  };
  async componentDidMount() {
    const BACKDROP_PATH = await getRandomBackDrop();
    const TMDB_POSTER_PATH = `https://image.tmdb.org/t/p/w1280${BACKDROP_PATH}`;
    this.setState({ tmdbPosterPath: TMDB_POSTER_PATH });
  }
  render(poster) {
    const { tmdbPosterPath } = this.state;
    return (
      <React.Fragment>
        {tmdbPosterPath && (
          <div
            className="w-full z-0 text-center h-64"
            style={{
              backgroundImage: `url(${tmdbPosterPath})`
            }}
          />
        )}
      </React.Fragment>
    );
  }
}
