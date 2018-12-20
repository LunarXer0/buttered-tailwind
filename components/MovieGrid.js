import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions/actions";

class MovieGrid extends React.Component {
  componentDidMount() {
    const { fetchMovies, haveLoaded } = this.props;
    !haveLoaded && fetchMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <div className="w-full flex flex-wrap justify-center py-10 px-6 shadow-md m-auto mt-24 text-center">
        {movies.map(movie => (
          <div
            className="max-w-xs mb-5 mx-5 rounded overflow-hidden shadow-lg"
            key={movie.id}
          >
            <img
              className="w-full"
              src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{movie.title}</div>
              <p className="text-grey-darker text-base">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  haveLoaded: store.movies.haveLoaded,
  movies: store.movies.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGrid);
