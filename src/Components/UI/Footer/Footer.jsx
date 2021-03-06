import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterTop">
        <div className="FooterLeft">
          <div className="FooterList">
            <a className="FooterHeading">COMPANY</a>
            <a className="FooterListItem">About Us</a>
            <a className="FooterListItem">Features</a>
            <a className="FooterListItem">FAQ</a>
          </div>
          <div className="FooterList">
            <a className="FooterHeading">SOCIAL</a>
            <a className="FooterListItem">Twitter</a>
            <a className="FooterListItem">Facebook</a>
            <a className="FooterListItem">Instagram</a>
            <a className="FooterListItem">LinkedIn</a>
          </div>
          <div className="FooterList">
            <a className="FooterHeading">LEGAL</a>
            <a className="FooterListItem">Private Policy</a>
            <a className="FooterListItem">Terms of Service</a>
          </div>
        </div>
        <div className="FooterRight">
          <p className="FooterRightHeading">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form className="SubscribeForm">
            <input type="text" />
            <button type="submit">Subscibe</button>
          </form>
          <p className="FooterRightHeading">KEEP IN TOUCH</p>
          <div className="Location">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p>1 Ojuelegba Road, Yaba, oworonshoki, Lagos</p>
          </div>
          <div className="ContactDetails">
            <div className="ContactDetail">
              <span>
                <i className="far fa-envelope"></i>
              </span>
              <a href="mailto:info@sogovr.com">info@shogovr.com</a>
            </div>
            <div className="ContactDetail">
              <span>
                <i className="fas fa-phone"></i>
              </span>
              <a>+232 810 0000</a>
            </div>
          </div>
        </div>
      </div>
      <p className="Copyright">Copyright © Sogovr2021</p>
      <p className="Copyright">All Rights Reserved</p>
    </div>
  );
};

export default Footer;
