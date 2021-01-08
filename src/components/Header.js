import React, {useContext} from "react";
import { Link } from "@reach/router";
import {auth} from '../firebase';
import UserContext from '../providers/UserProvider'
import { HeaderStyled } from "../styles";



const Header = () => {
  const user = useContext(UserContext);

  return (<div>
    { user ?
    <HeaderStyled className='header'>
      <Link className='header-title' to='/home'>
        A Walk in the Park
      </Link>
    </HeaderStyled>
    :
    <HeaderStyled className='header'>
      <Link className='header-title' to='/'>
        A Walk in the Park
      </Link>
      <button onClick = {() => {auth.signOut()}}>Sign Out</button>
    </HeaderStyled>
    }
  </div>
    )
};

export default Header;
