import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

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

  const handleNav = () => {
    setNav(!nav);
  };

  let navbarClasses =
    windowWidth < 640 ? "fixed w-full z-50 bg-white transition-all duration-700" : "";
  let navbarStyle =
    windowWidth < 640
      ? {
          paddingTop: scrollPosition > 50 ? "0px" : "30px",
          paddingBottom: scrollPosition > 50 ? "0px" : "10px",
        }
      : {};

  let logoStyle =
    windowWidth < 640
      ? {
          width: scrollPosition > 50 ? "150px " : "200px",
          height: scrollPosition > 50 ? "100px" : "150px",
          paddingTop: scrollPosition > 50 ? "5px" : "0px",
          transition: "all 0.3s ease-in-out",
        }
      : {};

  return (
    <div className={navbarClasses} style={navbarStyle}>
      <div className="flex items-center h-30 w-full mx-auto px-4 text-black md:hidden">
        <a href="/">
          <img src={Logo} alt="logo" className="w-48 h-30 -mt-2 -ml-4" style={logoStyle} />
        </a>

        <div onClick={handleNav} className="absolute right-6  ">
          {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
        </div>
      </div>

      {scrollPosition <= 170 && (
        <div className="text-center md:hidden mx-5">
          <hr className="border-t border-gray-400 my-10 w-[100%] -mt-4" />
          <h1 className="text-3xl -mt-6 mb-3 text-blue-500">SPECIALISED DRONE FILMING</h1>
        </div>
      )}

      <div className="hidden md:flex items-center h-30 w-full mx-auto px-4 text-black">
        <div className="md:w-1/6">
          <a href="/">
            <img src={Logo} alt="logo" className="w-48 h-30 -mt-1 -ml-4" />
          </a>
        </div>

        <div className="w-4/6 text-center">
          <h1 className="text-md md:text-5xl text-blue-500 -mx-5">SPECIALISED DRONE FILMING</h1>
          <ul className="hidden md:flex justify-center">
            <div className="group inline-block relative z-10">
              <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10">
              <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10">
              <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10">
              <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
              <div className="absolute hidden group-hover:block mt-1 w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            </div>

            <div className="group inline-block relative z-10">
              <li className="p-4 hover:underline cursor-pointer">Drone Videos</li>
              <div className="absolute hidden group-hover:block  w-48">
                <div className="py-2 px-3 rounded bg-white shadow z-20">
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            </div>
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
        <ul className="uppercase p-4 text-black flex flex-col">
          <div className="inline-block relative z-10">
            <li onClick={() => setOpen1(!open1)} className="p-4 cursor-pointer">
              Drone Videos
            </li>
            {open1 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li onClick={() => setOpen2(!open2)} className="p-4 cursor-pointer">
              Drone Photos
            </li>
            {open2 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li onClick={() => setOpen3(!open3)} className="p-4 cursor-pointer">
              Drone Videos
            </li>
            {open3 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li onClick={() => setOpen4(!open4)} className="p-4 cursor-pointer">
              Drone Videos
            </li>
            {open4 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="inline-block relative z-10">
            <li onClick={() => setOpen5(!open5)} className="p-4 cursor-pointer">
              Drone Videos
            </li>
            {open5 && (
              <div className="w-80">
                <div className="py-2 pl-10 rounded bg-white z-20 text-gray-600">
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 1
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="block py-2 px-4 ">
                    Dropdown Item 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
