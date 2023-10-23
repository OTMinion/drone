import { useEffect, useRef } from "react";
import videoBg from "../assets/videoBg.mp4";
import ReactPlayer from "react-player";

const Hero = () => {
  const playerRef = useRef();
  const wrapperRef = useRef();
  const overlayRef = useRef();

  const handleVideoClick = () => {
    playerRef.current.getInternalPlayer().webkitEnterFullscreen();
  };

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const overlayElement = overlayRef.current;

    const handleMouseEnter = () => {
      overlayElement.style.opacity = "1";
      wrapperElement.style.filter = "grayscale(50%)"; // Add the 'grayScale' style on hover
    };

    const handleMouseLeave = () => {
      overlayElement.style.opacity = "0";
      wrapperElement.style.filter = "none"; // Remove the 'grayScale' style on mouse leave
    };

    wrapperElement.addEventListener("mouseenter", handleMouseEnter);
    wrapperElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapperElement.removeEventListener("mouseenter", handleMouseEnter);
      wrapperElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pt-40 md:pt-[140px] w-[100vw] h-full overflow-hidden mx-auto px-5">
      <h1 className="text-3xl md:hidden text-blue-500 text-center pb-5">
        SPECIALISED DRONE FILMING
      </h1>
      <div ref={wrapperRef} className="relative">
        {" "}
        {/* Add relative positioning here */}
        <ReactPlayer
          className="object-cover"
          url={videoBg}
          playing
          loop
          muted
          width="100%"
          height="100%"
          ref={playerRef}
          onClick={handleVideoClick}
          playsinline
        />
        <div
          ref={overlayRef}
          onClick={handleVideoClick}
          className=" md:block cursor-default absolute top-1/3 left-80  bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
          {/* Adjust the positioning here */}
          <p className="text-white text-7xl bg-transparent px-4 py-2 hidden md:block">
            Click for full screen
          </p>
        </div>
      </div>
      <p className="md:hidden text-center text-gray-500">
        *Tap video and turn sideways for full screen
      </p>
    </div>
  );
};

export default Hero;
