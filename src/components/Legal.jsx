import { useState } from "react";

const Legal = ({ showCookie, toggleCookie }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <div>
      <hr className="border-t border-gray-400 w-[100%] mx-auto" />
      <div className="flex px-2 md:px-32 pt-5 mb-10 text-gray-400 flex-col md:flex-row text-center">
        <p
          onClick={toggleTerms}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 md:pl-10">
          Terms and Conditions
        </p>
        <p
          onClick={togglePolicy}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 pt-3 md:pl-[50px] md:py-0">
          Privacy Policy
        </p>
        <p
          onClick={toggleCookie}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 pt-3 pb-8 md:pl-[50px] md:py-0">
          Manage Cookies
        </p>
        <p className=" md:pl-[300px]">Copyright © 2022 Cinematic FPV.</p>
      </div>
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative ">
            <button
              onClick={toggleTerms}
              className="absolute top-10 right-10 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg md:text-3xl text-center fixed pt-3">Terms and Conditions</h1>
          </div>

          <div className="overflow-auto w-[90%] h-[60%] mt-20 px-8 absolute">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae qui cumque
              natus enim, recusandae ut quas saepe dolores dolor sapiente dolore nisi nesciunt
              numquam totam consectetur, hic voluptas. Architecto!
            </p>
          </div>
        </div>
      )}

      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative">
            <button
              onClick={togglePolicy}
              className="absolute top-10 right-10 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg text-center fixed pt-3">Privacy Policy</h1>
            <div className="overflow-auto w-[90%] h-[60%] mt-20 px-8 absolute">
              {/* Add your Privacy Policy content here */}
            </div>
          </div>
        </div>
      )}

      {showCookie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative">
            <button
              onClick={toggleCookie}
              className="absolute top-10 right-10 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg text-center fixed pt-3">Manage Cookie</h1>
            <div className="overflow-auto w-[90%] h-[60%] mt-20 px-8 absolute">
              {/* Add your Privacy Policy content here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Legal;
