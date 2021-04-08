import React from "react";
import Logos from "../../assets/logos/Logo-brainflix.svg";
import "./Nav.scss";



const Nav = () => {
  return (
    <nav className="nav">
      <a href="../../../public/index.html"><img src={Logos} className="nav__logo" alt="Brainflix Logo" /></a>
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
