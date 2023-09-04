const Cookies = ({ isShown, onClose, onManage }) => {
  const handleAccept = () => {
    // Handle the acceptance of cookies
    onClose();
  };

  const handleReject = () => {
    // Handle the rejection of cookies
    onClose();
  };

  const handleManage = () => {
    onManage();
  };

  return (
    isShown && (
      <div
        className="fixed bottom-0 left-0 w-full bg-gray-800 border-b border-gray-300 text-black flex justify-center items-center z-40"
        style={{ height: "150px" }}>
        <div className="md:flex mx-auto md:p-4 ">
          <div className="md:flex text-center space-y-4 text-white">
            <div className="md:text-left px-2">
              <h1 className="text-lg md:text-2xl font-bold md:pl-7">Important Information</h1>
              <p className="text-sm md:text-lg md:px-7">
                We have placed cookies on your device to help make this website better. You can{" "}
                <span onClick={handleManage} className="underline text-gray-400 cursor-pointer">
                  adjust your cookie settings
                </span>
                , otherwise we'll assume you're okay to continue.
              </p>
            </div>

            <div className="flex justify-center items-center md:w-3/5 md:space-x-4 space-x-6 whitespace-nowrap">
              <button
                className="bg-green-800 hover:bg-green-600 text-white font-medium py-2 px-6 rounded"
                onClick={handleAccept}>
                Accept Cookies
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-400 text-black font-medium py-2 px-6 rounded"
                onClick={handleReject}>
                Reject Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Cookies;
