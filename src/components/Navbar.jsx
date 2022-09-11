import React from "react";
import "../styles/Navbar.css";
import icon from "../img/navbar/Sticker_pack02_Иконка.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={icon} alt="" className="navbar-logo" />
      <div className="navbar-text">
        ЛИЧНЫЙ КАБИНЕТ <span className="navbar-text-round"></span>
      </div>
    </div>
  );
};

export default Navbar;
