import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  let navbarClasses = "w-full z-50 bg-white transition-all duration-700 fixed";
  let navbarStyle =
    windowWidth < 640
      ? {
          paddingTop:
            scrollPosition > 100
              ? "0px"
              : scrollPosition > 50
              ? "10px"
              : scrollPosition > 10
              ? "20px"
              : "30px",
          paddingBottom: scrollPosition > 100 ? "0px" : "10px",
        }
      : {};

  let logoStyle =
    windowWidth < 640
      ? {
          width: scrollPosition > 100 ? "150px" : "200px",
          height: scrollPosition > 100 ? "120px" : "150px",
          paddingTop: scrollPosition > 100 ? "15px" : "0px",
          transition: "all 0.1s ease-in-out",
        }
      : {};

  return (
    <div className={navbarClasses} style={navbarStyle}>
      <div className="flex items-center h-28 w-full mx-auto px-4 text-black md:hidden pb-4">
        <a href="/">
          <img src={Logo} alt="logo" className="w-48 h-30  -ml-4" style={logoStyle} />
        </a>

        <div onClick={handleNav} className="absolute right-6  ">
          {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
      </div>

      <div className="hidden md:flex items-center h-30 w-full mx-auto px-4 text-black">
        <div className="md:w-1/6">
          <a href="/">
            <img src={Logo} alt="logo" className="w-48 h-[140px] -mt-1 -ml-4" />
          </a>
        </div>

        <div className="w-4/6 text-left">
          <h1 className="text-md md:text-5xl text-blue-500 -mx-5 text-center">
            SPECIALISED DRONE FILMING
          </h1>
          <ul className="hidden md:flex justify-center">
            <div className="group inline-block relative z-10 px-4">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  Services
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[90%] transition-transform left-2"></span>
                </li>
                <BiDownArrow size={13} className="mt-5 -ml-3" />
              </div>

              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Traditional Drone Filming
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    FPV Drone Filming
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    For Production Companies
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Film & TV
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Events
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Drone Tours & Fly-Throughs
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Real Estate
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 ">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  Courses
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[90%] transition-transform left-2"></span>
                </li>
                <BiDownArrow size={13} className="mt-5 -ml-3" />
              </div>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <Link to="/workshop" className="block py-4 hover:bg-gray-200">
                    Drone Day Workshop (for education)
                  </Link>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 pl-4">
              <li className="p-4 group relative cursor-pointer">
                Gallery
                <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
              </li>
            </div>

            <div className="group inline-block relative z-10 pr-4">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  Services
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[90%] transition-transform left-2"></span>
                </li>
                <BiDownArrow size={13} className="mt-5 -ml-3" />
              </div>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    About Us
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Meet The Team
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Safety
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 ">
              <li className="p-4 group relative cursor-pointer">
                Contact Us
                <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
              </li>
            </div>
          </ul>
        </div>

        <div className="w-1/6">{/* Removed AiOutlineMenu from here */}</div>
      </div>
      <hr
        className={`border-t border-gray-300 w-[93%] md:w-[98%] mx-5 pb-2 ${
          isScrolled ? "-mt-3" : ""
        }`}
      />

      {/* Mobile Section */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[85%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] md:hidden "
        }>
        <ul className=" p-4 text-black flex flex-col">
          <div className="inline-block relative z-10">
            <div className="flex">
              <li onClick={() => setOpen1(!open1)} className="p-4 cursor-pointer">
                Services
              </li>
              <BiDownArrow size={13} className="mt-5 -ml-3" />
            </div>

            {open1 && (
              <div className="w-80">
                <div className="py-2 pl-6 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4">
                    Traditional Drone Filming
                  </a>
                  <a href="#" className="block py-2 px-4">
                    FPV Drone Filming
                  </a>
                  <a href="#" className="block py-2 px-4">
                    For Production Companies
                  </a>
                  <a href="#" className="block py-2 px-4">
                    Film & TV
                  </a>
                  <a href="#" className="block py-2 px-4">
                    Events
                  </a>
                  <a href="#" className="block py-2 px-4">
                    Drone Tours & Fly-Throughs
                  </a>
                  <a href="#" className="block py-2 px-4">
                    Real Estate
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <div className="flex">
              <li onClick={() => setOpen2(!open2)} className="p-4 cursor-pointer">
                Courses
              </li>
              <BiDownArrow size={13} className="mt-5 -ml-3" />
            </div>
            {open2 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-4">
                    Drone Day Workshop (for education)
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li className="p-4 cursor-pointer">Gallery</li>
          </div>

          <div className="inline-block relative z-10">
            <div className="flex">
              <li onClick={() => setOpen3(!open3)} className="p-4 cursor-pointer">
                About Us
              </li>
              <BiDownArrow size={13} className="mt-5 -ml-3" />
            </div>
            {open3 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-4">
                    About Us
                  </a>
                  <a href="#" className="block py-4">
                    Meet The Team
                  </a>
                  <a href="#" className="block py-4">
                    Safety
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li className="p-4 cursor-pointer">Contact Us</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
