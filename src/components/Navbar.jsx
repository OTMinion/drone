import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex items-center h-30 w-full mx-auto px-4 text-black md:hidden">
        <a href="/">
          <img src={Logo} alt="logo" className="w-48 h-30 -mt-2 -ml-4" />
        </a>

        <div onClick={handleNav} className="absolute right-6  ">
          {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
      </div>

      <div className="text-center md:hidden mx-5">
        <hr className="border-t border-gray-400 my-10 w-[100%] -mt-4" />
        <h1 className="text-3xl -mt-6 mb-3 text-blue-500">SPECIALISED DRONE FILMING</h1>
      </div>

      <div className="hidden md:flex items-center h-30 w-full mx-auto px-4 text-black">
        <div className="md:w-1/6">
          <a href="/">
            <img src={Logo} alt="logo" className="w-48 h-30 -mt-1 -ml-4" />
          </a>
        </div>

        <div className="w-4/6 text-center">
          <h1 className="text-md md:text-5xl text-blue-500 -mx-5">SPECIALISED DRONE FILMING</h1>
          <ul className="hidden md:flex justify-center">
            <li className="p-4 hover:underline cursor-pointer">Home</li>
            <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
            <li className="p-4 hover:underline cursor-pointer">Drone Photos</li>
            <li className="p-4 hover:underline cursor-pointer">About</li>
            <li className="p-4 hover:underline cursor-pointer pr-20">Contact</li>
          </ul>
        </div>

        <div className="w-1/6">{/* Removed AiOutlineMenu from here */}</div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] md:hidden"
        }>
        <ul className="uppercase p-4 text-black">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Drone Videos</li>
          <li className="p-4 border-b border-gray-600">Drone Photos</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
