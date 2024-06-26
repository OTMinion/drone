import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // Define a useEffect hook to update screenWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures useEffect only runs once on mount

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
          paddingTop: scrollPosition > 100 ? "0px" : "23px",
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
      <div className="flex items-center sm:h-36 h-28  w-full mx-auto px-4 text-black md:hidden pb-4">
        <a href="/">
          <img src={Logo} alt="logo" className="w-[200px] h-[150px] -ml-4 mt-4" style={logoStyle} />
        </a>

        <div onClick={handleNav} className="absolute right-6 z-50 ">
          {nav ? (
            <AiOutlineClose size={70} color="white" className="absolute right-72 -top-9" />
          ) : (
            <AiOutlineMenu size={40} className="mt-4" />
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center h-30 w-full mx-auto px-4 text-black">
        <div className="lg:w-1/6 w-2/6">
          <a href="/">
            <img src={Logo} alt="logo" className="w-[200px] h-[150px] -mt-1 lg:ml-6 -ml-4" />
          </a>
        </div>

        <div className="w-4/6 text-left">
          <h1 className="text-md md:text-3xl lg:text-5xl text-blue-500 -mx-5 text-center">
            SPECIALISED DRONE FILMING
          </h1>
          <ul className="hidden md:flex justify-center md:text-sm lg:text-lg ">
            <div className="group inline-block relative z-10 px-4">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  Services
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[100%] transition-transform left-3"></span>
                </li>
                <BiSolidDownArrow size={10} className="mt-6 -ml-2" />
              </div>

              <div className="absolute hidden group-hover:block  w-60">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <Link to="/traditional_drone_filming" className="block py-2 px-4 hover:bg-gray-200">
                    Traditional Drone Filming
                  </Link>
                  <Link to="/fpv_drone_filming" className="block py-2 px-4 hover:bg-gray-200">
                    FPV Drone Filming
                  </Link>
                  <Link to="/production" className="block py-2 px-4 hover:bg-gray-200">
                    For Production Companies
                  </Link>
                  <Link to="/film_and_tv" className="block py-2 px-4 hover:bg-gray-200">
                    Film & TV
                  </Link>
                  <Link to="/events" className="block py-2 px-4 hover:bg-gray-200">
                    Events
                  </Link>
                  <Link to="/drone_tours" className="block py-2 px-4 hover:bg-gray-200">
                    Drone Tours & Fly-Throughs
                  </Link>
                  <Link to="/real_estate" className="block py-2 px-4 hover:bg-gray-200">
                    Real Estate
                  </Link>
                  <Link to="/photography" className="block py-2 px-4 hover:bg-gray-200">
                    Drone Photography
                  </Link>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 ">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  Courses
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[100%] transition-transform left-3"></span>
                </li>
                <BiSolidDownArrow size={10} className="mt-6 -ml-2" />
              </div>
              <div className="absolute hidden group-hover:block  w-[16rem]">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <Link to="/workshop" className="block py-2 px-4 hover:bg-gray-200">
                    Drone Day Workshop
                    <br />
                    (for education)
                  </Link>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 pl-4">
              <li className="p-4 group relative cursor-pointer">
                <Link to="/guides">Guides</Link>
                <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
              </li>
            </div>

            <div className="group inline-block relative z-10 pr-4 pl-3">
              <div className="flex">
                <li className="p-4 group relative cursor-pointer">
                  About Us
                  <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[100%] transition-transform left-3"></span>
                </li>
                <BiSolidDownArrow size={10} className="mt-6 -ml-2" />
              </div>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <Link to="/about" className="block py-2 px-4 hover:bg-gray-200">
                    About Us
                  </Link>
                  <Link to="meet_the_team" className="block py-2 px-4 hover:bg-gray-200">
                    Meet The Team
                  </Link>
                  <Link to="safety" className="block py-2 px-4 hover:bg-gray-200">
                    Safety
                  </Link>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10 whitespace-nowrap">
              <li className="p-4 group relative cursor-pointer">
                <Link to="/contact">Contact Us</Link>

                <span className="absolute inset-x-0 bottom-3 h-[3px] bg-current transform scale-x-0 group-hover:scale-x-[80%] transition-transform"></span>
              </li>
            </div>
          </ul>
        </div>

        <div className="w-1/6">{/* Removed AiOutlineMenu from here */}</div>
      </div>
      <hr
        className={`border-t border-gray-300 w-[90%] md:w-[98%] mx-5 pb-2 ${
          isScrolled ? "border-t border-gray-300 w-[90%] md:w-[98%] mx-5 pb-2 -mt-[10px]" : ""
        } ${screenWidth < 414 ? "mt-2" : ""} ${screenWidth > 500 ? "-mt-1" : ""}`}
      />

      {/* Mobile Section */}
      <div
        className={nav ? "fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" : "hidden"}
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? "scrollable-sidebar overflow-y-auto fixed right-0 top-0 w-[70%] h-full border-l border-l-gray-900 bg-[white] z-50 ease-in-out duration-500 md:hidden"
            : "fixed right-[-100%] md:hidden"
        }
      >
        <ul className=" p-4 text-black flex flex-col items-center justify-center text-center">
          <div className="inline-block relative z-10">
            <div className="flex justify-center">
              <li onClick={() => setOpen1(!open1)} className="p-4 cursor-pointer font-bold">
                Services
              </li>
              <BiSolidDownArrow size={10} className="mt-6 -ml-3" />
            </div>

            <div
              className={`w-60 submenu ${open1 ? "submenu-open" : ""}  rounded bg-white z-20 text-gray-600`}
            >
              <Link to="/traditional_drone_filming" className="block py-2 px-4" onClick={handleNav}>
                Traditional Drone Filming
              </Link>
              <Link to="/fpv_drone_filming" className="block py-2 px-4" onClick={handleNav}>
                FPV Drone Filming
              </Link>
              <Link to="/production" className="block py-2 px-4" onClick={handleNav}>
                For Production Companies
              </Link>
              <Link to="/film_and_tv" className="block py-2 px-4" onClick={handleNav}>
                Film & TV
              </Link>
              <Link to="/events" className="block py-2 px-4" onClick={handleNav}>
                Events
              </Link>
              <Link to="/drone_tours" className="block py-2 px-4" onClick={handleNav}>
                Drone Tours & Fly-Throughs
              </Link>
              <Link to="/real_estate" className="block py-2 px-4" onClick={handleNav}>
                Real Estate
              </Link>
              <Link to="/photography" className="block py-2 px-4" onClick={handleNav}>
                Drone Photography
              </Link>
            </div>
          </div>

          <div className="inline-block relative z-10">
            <div className="flex justify-center">
              <li onClick={() => setOpen2(!open2)} className="p-4 cursor-pointer font-bold">
                Courses
              </li>
              <BiSolidDownArrow size={10} className="mt-6 -ml-3" />
            </div>

            <div
              className={`w-60 submenu ${open2 ? "submenu-open" : ""}  rounded bg-white z-20 text-gray-600`}
            >
              <div className="py-2 rounded bg-white z-20 text-gray-600">
                <Link to="/workshop" className="block py-4" onClick={handleNav}>
                  Drone Day Workshop
                  <br />
                  (for education)
                </Link>
              </div>
            </div>
          </div>

          <div className="inline-block relative z-10 ">
            <li className="p-4 cursor-pointer font-bold">
              <Link to="/guides">Guides</Link>
            </li>
          </div>

          <div className="inline-block relative z-10">
            <div className="flex justify-center">
              <li onClick={() => setOpen3(!open3)} className="p-4 cursor-pointer font-bold">
                About Us
              </li>
              <BiSolidDownArrow size={10} className="mt-6 -ml-3" />
            </div>

            <div
              className={`w-60 submenu ${open3 ? "submenu-open" : ""}  rounded bg-white z-20 text-gray-600`}
            >
              <div className="py-2 rounded bg-white z-20 text-gray-600">
                <Link to="/about" className="block py-4" onClick={handleNav}>
                  About Us
                </Link>
                <Link to="meet_the_team" className="block py-4" onClick={handleNav}>
                  Meet The Team
                </Link>
                <Link to="safety" className="block py-4" onClick={handleNav}>
                  Safety
                </Link>
              </div>
            </div>
          </div>

          <div className="inline-block relative z-10">
            <li className="p-4 cursor-pointer font-bold" onClick={handleNav}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
