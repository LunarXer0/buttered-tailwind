import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Collection from "../pages/collection";
import { resetSearchView } from "../redux/actions/actions";

// class Profile extends React.Component {
//   componentDidMount() {
//     const { searching, resetSearchView } = this.props;
//     {
//       searching && resetSearchView();
//     }
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Collection />
//       </React.Fragment>
//     );
//   }
// }

const Profile = ({}) => {
  return (
    <React.Fragment>
      <Collection />
    </React.Fragment>
  );
};

const mapStateToProps = store => ({
  searching: store.movies.searching,
  movies: store.movies.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetSearchView }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
