import React, {useCallback, useState} from "react";
import { Link, navigate } from "@reach/router";
import { HeaderStyled } from "../styles";
import app from '../firebase'



const Header = () => {
  const [err, setErr] = useState()

  const handleLogout = useCallback(async e => {
    try {
      await app
        .auth()
        .signOut()
        navigate("/")
    } catch (error) {
      setErr(err)
      alert(err)
    }
  })

  return (
    <>
    <p onClick={handleLogout}>Sign out</p>
    <HeaderStyled className='header'>
      <Link className='header-title' to='/home'>
        A Walk in the Park
      </Link>
    </HeaderStyled>
    </>
    )
};

export default Header;
