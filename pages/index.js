import "../styles/index.css";
import NavBar from "../components/NavBar";
import ProfileHeader from "../components/ProfileHeader";
import MovieGrid from "../components/MovieGrid";
import Hero from "../components/Hero";

const Profile = () => (
  <React.Fragment>
    <NavBar />
    <Hero />
    <div className="p-3 z-50">
      <ProfileHeader />
      <MovieGrid />
    </div>
  </React.Fragment>
);

export default Profile;
