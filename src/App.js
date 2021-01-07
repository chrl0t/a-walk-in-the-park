import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Ads from "./components/Ads";
import PostAd from "./components/PostAd";
import Profile from "./components/Profile";
import UserPage from "./components/UserPage";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import UserProvider, { UserContext } from './providers/UserProvider';
import { useContext } from "react";

function App() {
  const user = useContext(UserContext);
  console.log(user)
  return (
    <UserProvider>
      {user ? 
    <div className='container'>
      <Header />
      <Router>
        <LandingPage path='/' />
        <Ads path='/home' />
        <PostAd path='/new-ad' />
        <Profile path='/profile' />
        <UserPage path='/user/:username' />
      </Router>
      <Footer /> 
    </div> 
    :
    <div>
      <Header />
      <Router>
        <LandingPage path='/' />
        <SignIn path="/login"/>
        <SignUp path='/signUp' />
        <PasswordReset path='/passwordReset'/>
      </Router>
    </div>}
    </UserProvider>
  
  )}

export default App;
