import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";
import email from "../assets/email.png";

const Footer = () => {
  return (
    <div className="w-full pt-10 px-4 grid lg:grid-cols-4 gap-8 text-black">
      <div className="flex justify-center items-center w-full">
        <img src={Logo} alt="logo" className="w-3/4 md:w-1/2 lg:w-full" />
      </div>

      <div className="flex text-center text-sm justify-center items-center md:-ml-6">
        STEVE IS CAA AND FULLY INSURED FPV AND COMMERCIAL DRONE PILOT OPERATING IN ESSEX AND LONDON.
      </div>

      <div className="flex flex-col justify-center items-center ml-4 text-md">
        {/* Use an onClick handler to open the mail client */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Steve@CinematicFPV.co.uk";
          }}>
          <img src={email} alt="Email us" className="w-[100%] h-[70%] mt-4 -mb-3" />
        </a>
        <hr className="border-t border-gray-300 my-1 w-[90%] mx-auto" />
        <p>+44 7968 033307</p>
      </div>

      <div className="flex md:w-[90%] my-6 justify-between items-center ml-5">
        <a href="https://www.youtube.com/@cinematicfpv" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={50} className="hover:text-red-500" />
        </a>
        <a
          href="https://www.instagram.com/cinematicfpvuk/"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram size={50} className="hover:text-red-500" />
        </a>
        <a href="https://www.linkedin.com/cinematicfpv" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} className="hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
