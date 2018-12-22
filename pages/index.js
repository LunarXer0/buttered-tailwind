import "../styles/index.css";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileCard";
import MovieGrid from "../components/MovieGrid";

const Profile = () => (
  <React.Fragment>
    <NavBar />
    <div className="p-5">
      <ProfileHeader />
      <MovieGrid />
    </div>
  </React.Fragment>
);

export default Profile;
