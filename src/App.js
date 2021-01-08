import "./App.css";
import { navigate, Router } from "@reach/router";
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
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Authentication";
import {auth} from './firebase'
import InputUserDetails from "./components/InputUserDetails";
import Messages from "./components/Messages";
import Inbox from "./components/Inbox";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = useContext(AuthContext)


  useEffect(() => {
    if (user !== undefined) {
      setLoggedIn(true)
    }
  })

  const setLogin = (bool) => {
    setLoggedIn(bool)
  }

  const postLogin = () => {
    navigate("/home")
  }

  const postLogout = () => {
    navigate("/")
  }

  return (
    <AuthProvider>
        {loggedIn ? 
        <>
        {postLogin()}
        <Header setLoggedIn={setLogin} loggedIn={loggedIn}/>
        <Router>
          <InputUserDetails path='/signUpDetails' />
          <Ads path='/home' />
          <PostAd path='/new-ad' />
          <Profile path='/profile' />
          <UserPage path='/user/:username' />
          <Messages path='/messages' />
          <Inbox path='/inbox' />
        </Router>
        <Footer />
        </>
          :
        <>
          {postLogout()}
          <Header setLoggedIn={setLogin} loggedIn={loggedIn}/>
          <Router>
            <LandingPage path='/' />
            <Login path='/login' setLogin={setLogin} />
            <Signup path='/signUp' />
          </Router>
          <Footer />
        </>
         }
    </AuthProvider>
  );
}

export default App;
