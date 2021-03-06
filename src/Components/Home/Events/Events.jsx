import React from "react";
import "./Events.css";
import Image from "../../../assets/images/WEB.jpg";

const Events = () => {
  return (
    <>
      <h3 className="EventsHeader">Events</h3>
      <div className="Events">
        <div className="Event">
          <img src={Image} alt="event 1" />
          <div className="EventContent">
            <p className="EventContentTitle">The Wondaland VR Experience</p>
            <p>March 19, 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
