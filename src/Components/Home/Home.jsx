import React from "react";
import SimpleSlider from "../UI/Slider";
import "./Home.css";
import Img1 from "../../assets/images/doblesis.png";
import Img2 from "../../assets/images/commonwealth.png";
import Img3 from "../../assets/images/republicom.png";
import Functions from "./Functions/Functions";
import HomeVideo from "./HomeVideo/HomeVideo";
import DownloadVr from "./DownloadVr/DownloadVr";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Contacts from "./Contacts/Contacts";
import Events from "./Events/Events";

const Home = () => {
  const sliderContent = [
    {
      children: () => <img className="SponsorImage" src={Img1} alt="sponsor" />,
    },
    {
      children: () => <img className="SponsorImage" src={Img2} alt="sponsor" />,
    },
    {
      children: () => <img className="SponsorImage" src={Img3} alt="sponsor" />,
    },
    {
      children: () => <img className="SponsorImage" src={Img1} alt="sponsor" />,
    },
    {
      children: () => <img className="SponsorImage" src={Img2} alt="sponsor" />,
    },
    {
      children: () => <img className="SponsorImage" src={Img3} alt="sponsor" />,
    },
  ];
  return (
    <div className="Home">
      <div className="SliderContent">
        <SimpleSlider content={sliderContent} />
      </div>
      <Functions />
      <HomeVideo />
      <DownloadVr />
      <WhatWeOffer />
      <Events />
      <Contacts />
    </div>
  );
};

export default Home;
