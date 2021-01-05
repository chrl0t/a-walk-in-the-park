import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className='header'>
      <Link className='title' to='/home'>
        A Walk in the Park
      </Link>
    </header>
  );
};

export default Header;
