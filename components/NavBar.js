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
        className="bg-transparent hover:bg-twitter text-white font-semibold hover:text-twitter-red py-2 px-4 border border-white hover:border-twitter-red rounded"
        onClick={switchToSearchView}
      >
        Search Movie
      </button>
    </Link>
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
