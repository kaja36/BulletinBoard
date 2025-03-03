import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="no-style-link">
        <p className="header_title">掲示板</p>
      </Link>
      <Link to="/threads/new" className="header_button">
        <u>スレッドを立てる</u>
      </Link>
    </header>
  );
}

export default Header;
