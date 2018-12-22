import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovie } from "../redux/actions/actions";

const SearchBar = ({ searchMovie }) => (
  <div className="flex justify-center">
    <input
      className="w-1/4 appearance-none rounded-sm bg-white text-grey-darker leading-tight focus:outline-none"
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
