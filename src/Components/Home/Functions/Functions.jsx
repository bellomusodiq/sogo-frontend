import React from "react";
import "./Functions.css";
import Devices from "../../../assets/images/phones.png";

const Functions = () => {
  return (
    <div className="Functions">
      <p className="FunctionsHeader">the best seat in the house</p>
      <div className="FunctionsContent">
        <div className="FunctionsLeft">
          <img src={Devices} alt="devices" />
        </div>
        <div className="FunctionsRight">
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">Smartphone Compactible</p>
            <p className="FunctionRightItemBody">
              Available on most android and iOS devices and it's compactible
              versions
            </p>
          </div>
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">Awesome Content</p>
            <p className="FunctionRightItemBody">
              Catch the most thrilling live and playback events in 360 virtual
              reality.
            </p>
          </div>
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">High Resolution Videos</p>
            <p className="FunctionRightItemBody">
              Up to 4k quality videos on your mobile devices in 360 with your VR
              glasses
            </p>
          </div>
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">Seamless Streaming</p>
            <p className="FunctionRightItemBody">
              Enjoy a smooth uninterrupted 360 video experience in virtual
              reality
            </p>
          </div>
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">Exclusive all-round access</p>
            <p className="FunctionRightItemBody">
              Get the VIP experience with the best seat in the house, saving you
              time and money
            </p>
          </div>
          <div className="FunctionRightItem">
            <p className="FunctionRightItemTitle">All VR headsets</p>
            <p className="FunctionRightItemBody">
              Compactible with various types of VR headsets from google
              cardboard to high-end standalone sets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
