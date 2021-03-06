import React from "react";
import "./DownloadVr.css";
import PlayStore from "../../../assets/images/google-play2.png";
import AppStore from "../../../assets/images/app-store2.png";
import Vr from "../../../assets/images/dark_vr.png";

const DownloadVr = (props) => {
  return (
    <div className="DownloadVr">
      <div className="DownloadVrLeft">
        <h1>Enjoy entertainment beyond reality</h1>
        <p>
          There is alot happening around you! enjoy it all from the confort your
          smart mobile phones in virtual reality
        </p>
        <div className="Stores">
          <img src={PlayStore} alt="play store" />
          <img src={AppStore} alt="app store" />
        </div>
      </div>
      <div className="DownloadVrRight">
        <img src={Vr} alt="dark vr" />
      </div>
    </div>
  );
};

export default DownloadVr;
