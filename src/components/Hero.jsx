import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const setVideoControls = () => {
      if (window.innerWidth <= 768) {
        videoRef.current.setAttribute("controls", "controls");
      } else {
        videoRef.current.removeAttribute("controls");
      }
    };

    setVideoControls();
    window.addEventListener("resize", setVideoControls);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", setVideoControls);
    };
  }, []);

  return (
    <div className="w-[100vw] lg:w-[90vw] h-full overflow-hidden mx-auto">
      <video
        className="object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        onClick={handleVideoClick}
      />
      <p className="md:hidden text-center text-gray-500">*Tap video for full screen</p>
    </div>
  );
};

export default Hero;
