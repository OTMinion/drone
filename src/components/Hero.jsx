import React, { useRef } from "react";
import videoBg from "../assets/videoBg.mp4";

const Hero = () => {
  const videoRef = useRef();

  const handleVideoClick = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      // Chrome, Safari & Opera
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="w-[100vw] lg:w-[90vw] h-full overflow-hidden mx-auto">
      <video
        className="object-cover"
        src={videoBg}
        onClick={handleVideoClick}
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
      />
      <p className="md:hidden text-center text-gray-500">*Tap video for full screen</p>
    </div>
  );
};

export default Hero;
