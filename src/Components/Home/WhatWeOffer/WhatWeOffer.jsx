import React from "react";
import "./WhatWeOffer.css";
import LiveImage from "../../../assets/images/LIVE AND PLAYBACK SHOWS.jpg";
import Variety from "../../../assets/images/VARIETY OF MUSIC.jpg";
import Special from "../../../assets/images/SPECIAL FEATURES.jpg";
import Vocumentaries from "../../../assets/images/VOCUMENTARIES.jpg";

const WhatWeOffer = () => {
  return (
    <div className="WhatWeOffer">
      <h3>What we offer</h3>
      <div className="Offers">
        <div className="Offer">
          <img src={LiveImage} alt="offer" />
          <div className="OfferContent">
            <p className="OfferTitle">Live and Playback Shows</p>
            <p>
              Thrilling live shows and curated playback events from around the
              world in virtual reality
            </p>
          </div>
        </div>
        <div className="Offer">
          <img src={Variety} alt="offer" />
          <div className="OfferContent">
            <p className="OfferTitle">Variety of Music</p>
            <p>
              Choose from a wide range of sounds. Pick your genre, find your
              artist and catch your trips!
            </p>
          </div>
        </div>
        <div className="Offer">
          <img src={Special} alt="offer" />
          <div className="OfferContent">
            <p className="OfferTitle">Special Features</p>
            <p>
              One-On-One with your favourite stars and celebrities and other
              exciting curated content
            </p>
          </div>
        </div>
        <div className="Offer">
          <img src={Vocumentaries} alt="offer" />
          <div className="OfferContent">
            <p className="OfferTitle">Vocumentaries</p>
            <p>
              Select curated content about individuals, society and critical
              subject matters in Virtual Reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
