import React from "react";
import "./Header.css";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Googleplay from "../../../assets/images/google-play.png";
import Appstore from "../../../assets/images/app-store.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderContent">
        <div className="HeaderLogoNav">
          <div className="Logo">
            <img src={Logo} alt="logo" />
          </div>
          <nav className="Nav">
            <div className="NavItems">
              <Link to="/about">
                <span>About</span>
                <span className="Active"></span>
              </Link>
              <Link to="/events">
                <span>Events</span>
              </Link>
              <Link to="/shop">
                <span>Vr Shop</span>
              </Link>
              <Link to="/contact">
                <span>contact Us</span>
              </Link>
            </div>
          </nav>
          <Button title="Download" onClick={() => {}} />
        </div>
        <div className="HeaderSection">
          <div className="HeaderSectionLeft">
            <h1>Explore the world of entertainment with SOGO VR</h1>
            <p>
              There is a lot happening around you, enjoy it all in your comfort
              with your smart mobile phones in virtual reality
            </p>
            <div className="StoreButtons">
              <img src={Googleplay} alt="google play" />
              <img src={Appstore} alt="app store" />
            </div>
          </div>
          <div className="HeaderSectionRight"></div>
        </div>
      </div>
      <div className="HeaderArc"></div>
    </div>
  );
};

export default Header;
