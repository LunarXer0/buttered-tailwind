//@ts-check
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovie } from "../redux/actions/actions";

const SearchBar = ({ searchMovie }) => (
  <div className="text-center w-1/3 mx-auto p-5 rounded-lg bg-twitter border border-solid border-twitter-grey">
    <h2 className="my-5 uppercase text-twitter-red">Search Movie</h2>
    <img
      className="mb-5"
      src="/static/undraw_movie_night.svg"
      width="200px"
      height="200px"
      alt="search undraw"
    />
    <br />
    <input
      className="w-1/2 p-2 appearance-none rounded-sm bg-yellow-light text-grey-darker leading-tight focus:outline-none"
      placeholder="Search Movie"
      onChange={e => searchMovie(e.target.value)}
    />
  </div>
);

const mapStateToProps = store => ({
  searchResults: store.movies.searchResults
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchMovie }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
