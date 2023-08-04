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
    <div className="w-[100vw] h-full overflow-hidden mx-auto md:relative">
      <div className="relative" ref={wrapperRef}>
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
          className="hidden md:block cursor-default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300">
          <p className="text-white text-6xl bg-transparent px-4 py-2">Tap to expand</p>
        </div>
      </div>
      <p className="md:hidden text-center text-gray-500">*Tap video for full screen</p>

      <style jsx>{`
        /* ... existing styles ... */
      `}</style>
    </div>
  );
};

export default Hero;
