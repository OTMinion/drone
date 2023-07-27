import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full  py-10 px-4  grid lg:grid-cols-4 gap-8 text-black">
      <div className="flex justify-center items-center w-full">
        <img src={Logo} alt="logo" className="w-3/4 md:w-1/2 lg:w-full" />
      </div>

      <div className="flex text-center text-sm justify-center items-center md:-ml-6">
        AERIALJOHNNY IS CAA AND FULLY INSURED FPV AND COMMERCIAL DRONE PILOT OPERATING IN ESSEX AND
        LONDON.
      </div>

      <div className="flex justify-center items-center ml-4 text-sm">
        JOHNATHAN@AERIALJOHNNY.CO.UK
      </div>

      <div className="flex md:w-[90%] my-6 justify-between items-center ml-5">
        <FaFacebookSquare size={50} />
        <FaInstagram size={50} />
        <FaTwitterSquare size={50} />
      </div>
    </div>
  );
};

export default Footer;
