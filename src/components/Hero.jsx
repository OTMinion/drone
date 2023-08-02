import React, { useEffect, useRef } from "react";
import videoBg from "../assets/videoBg.mp4";
import "../index.css"; // Import the CSS file with the "grayScale" class

const Hero = () => {
  const videoRef = useRef();
  const wrapperRef = useRef();
  const overlayRef = useRef();

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
    const videoElement = videoRef.current;
    const wrapperElement = wrapperRef.current;
    const overlayElement = overlayRef.current;

    const handleMouseEnter = () => {
      overlayElement.style.opacity = "1";
      videoElement.classList.add("grayScale"); // Add the 'grayScale' class on hover
    };

    const handleMouseLeave = () => {
      overlayElement.style.opacity = "0";
      videoElement.classList.remove("grayScale"); // Remove the 'grayScale' class on mouse leave
    };

    wrapperElement.addEventListener("mouseenter", handleMouseEnter);
    wrapperElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapperElement.removeEventListener("mouseenter", handleMouseEnter);
      wrapperElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-[100vw] h-full overflow-hidden mx-auto">
      <div ref={wrapperRef}>
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
        <div
          ref={overlayRef}
          onClick={handleVideoClick}
          className="hidden md:block cursor-default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300">
          <p className="text-white text-6xl bg-transparent px-4 py-2">Tap to expand</p>
        </div>
      </div>
      <p className="md:hidden text-center text-gray-500">*Tap video for full screen</p>
    </div>
  );
};

export default Hero;
