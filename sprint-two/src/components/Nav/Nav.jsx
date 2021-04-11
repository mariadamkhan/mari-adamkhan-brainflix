import React from "react";
import Logos from "../../assets/logos/Logo-brainflix.svg";
import {Link} from "react-router-dom";
import "./Nav.scss";



const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/"><img src={Logos} className="nav__logo" alt="Brainflix Logo" /></Link>
      <form id="form" className="nav__form" name="form">
        <input
          type="search"
          name="search"
          className="nav__search"
          placeholder="Search"
        />
      </form>
      <div className="nav__wrap">
        <button type="submit" className="nav__cta">Upload</button>
        <div className="nav__avatar"></div>
      </div>
    </nav>
  );
};

export default Nav;
