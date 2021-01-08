import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Ads from "./components/Ads";
import PostAd from "./components/PostAd";
import Profile from "./components/Profile";
import UserPage from "./components/UserPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./Authentication";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import InputUserDetails from "./components/InputUserDetails";
import Messages from "./components/Messages";
import Inbox from "./components/Inbox";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <LandingPage path='/' />
        <Login path='/login' />
        <Signup path='/signUp' />
        <InputUserDetails path='/signUpDetails' />
        <Ads path='/home' />
        <PostAd path='/new-ad' />
        <Profile path='/profile' />
        <UserPage path='/user/:username' />
        <Messages path='/messages' />
        <Inbox path='/inbox' />
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
