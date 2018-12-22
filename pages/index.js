import "../styles/index.css";
import { connect } from "react-redux";

import NavBar from "../components/NavBar";
import Collection from "../pages/collection";

const Profile = () => (
  <React.Fragment>
    <NavBar />
    <div className="p-5">
      <Collection />
    </div>
  </React.Fragment>
);

export default Profile;
