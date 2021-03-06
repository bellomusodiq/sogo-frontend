import React, { useState } from "react";
import "./HomeVideo.css";
import Play from "../../../assets/images/play.png";
import VideoModal from "../../UI/VideoModal/VideoModal";

const HomeVideo = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const videoUrl = "https://youtu.be/zPhVLxqzTlk";
  return (
    <>
      {openVideo ? (
        <VideoModal videoUrl={videoUrl} onClose={() => setOpenVideo(false)} />
      ) : null}
      <div className="HomeVideo">
        <div className="HomevideoLeft">
          <h3>Enjoy virtual reality events anywhere, anytime with SOGO VR</h3>
          <p>
            A simple and easy application for anyone to make use of anywhere and
            at anytime. Download from the Appstore or Playstore today and dont
            forget to get your headset from our VR Shop!
          </p>
        </div>
        <div className="HomevideoRight">
          {/* <img src={Play} alt="play" onClick={() => setOpenVideo(true)} /> */}
          <iframe
            width="504"
            height="340"
            src="https://www.youtube.com/embed/zPhVLxqzTlk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
