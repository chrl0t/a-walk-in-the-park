import React from "react";
import { Link } from "@reach/router";
import {HeaderStyled} from '../styles';

const Header = () => {
  return (
    <HeaderStyled className="header">
      <Link to='/home'>
        A Walk in the Park
      </Link>
    </HeaderStyled>
  );
};

export default Header;
