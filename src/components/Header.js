import React, {useCallback, useState} from "react";
import { Link, navigate } from "@reach/router";
import { HeaderStyled } from "../styles";
import app from '../firebase'



const Header = (props) => {
  const [err, setErr] = useState()

  const handlePostLogout = () => {
    console.log("in handle post login")
    if (!err) {
      props.setLoggedIn(false)
    }
  }

  const handleLogout = useCallback(async e => {
    try {
      await app
        .auth()
        .signOut().then(()=>{
          handlePostLogout()
        })
    } catch (error) {
      setErr(err)
      alert(err)
    }
  })

  return (
    <>
    
    <HeaderStyled className='header'>
      {props.loggedIn ? <Link className='header-title' to='/home'>
        A Walk in the Park
      </Link> : <Link className='header-title' to='/'>
        A Walk in the Park
      </Link>}
 
    </HeaderStyled>
    {props.loggedIn ?  <p onClick={handleLogout}>Sign out</p> : null }
    </>
    )
};

export default Header;
