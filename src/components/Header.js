import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/music-album.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <span className="logo">
            <img src={LogoIcon} alt="Logo" />
            <h1>Top100</h1>
          </span>
        </Link>
        <Link to="/favourites">
          <li className="header-menu__item link link--white">Favourites</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
