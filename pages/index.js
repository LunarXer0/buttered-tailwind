import "../styles/index.css";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import MovieGrid from "../components/MovieGrid";

const Profile = () => (
  <React.Fragment>
    <NavBar />
    <div className="p-3">
      <ProfileHeader />
      <MovieGrid />
    </div>
  </React.Fragment>
);

export default Profile;
