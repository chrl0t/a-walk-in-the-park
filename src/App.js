import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Ads from "./components/Ads";
import PostAd from "./components/PostAd";
import Profile from "./components/Profile";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className='container'>
      <Header />
      <Router>
        <LandingPage path='/landing' />
        <Ads path='/home' />
        <PostAd path='/new-ad' />
        <Profile path='/profile' />
        <UserPage path='/user/:username' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
