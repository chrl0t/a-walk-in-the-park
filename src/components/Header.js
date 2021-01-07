import React from "react";
import { Link } from "@reach/router";
import { HeaderStyled } from "../styles";

const Header = () => {
  const user = null;
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
    </HeaderStyled>
    }
  </div>
    )
};

export default Header;
