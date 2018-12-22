import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { switchToSearchView } from "../redux/actions/actions";

const NavBar = ({ switchToSearchView }) => (
  <div className="p-2 bg-yellow-dark rounded flex justify-between">
    <Link href="/">
      <h1 className="text-white cursor-pointer inline-block font-sans text-left uppercase leading-normal">
        Buttered
      </h1>
    </Link>
    <Link href="/search">
      <button
        className="bg-transparent hover:bg-yellow-dark text-purple-light font-semibold hover:text-white py-2 px-4 border border-purple-light hover:border-purple-light rounded"
        onClick={switchToSearchView}
      >
        Search Movie
      </button>
    </Link>

    {/* <input
        className="appearance-none bg-transparent border-none w-full  text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Search Movie"
      /> */}
  </div>
);

const mapStateToProps = store => ({
  searching: store.movies.searching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ switchToSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
