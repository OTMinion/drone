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
        className="fixed top-0 left-0 w-full bg-gray-100 border-b border-gray-300 text-black flex justify-center items-center z-40"
        style={{ height: "200px" }}>
        <div className="md:flex mx-auto md:p-4 ">
          <div className="md:flex text-center space-y-4 ">
            <p className="text-sm md:text-lg md:w-3/5">
              We use optional cookies to improve your experience on our websites, such as through
              social media connections, and to display personalised advertising based on your online
              activity. If you reject optional cookies, only cookies necessary to provide you the
              services will be used. You may change your selection by clicking 'Manage Cookies' at
              the bottom of the page
            </p>
            <div className="flex justify-center items-center md:w-2/5 md:space-x-4 space-x-6">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-6 rounded"
                onClick={handleAccept}>
                Accept
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-6 rounded"
                onClick={handleReject}>
                Reject
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-6 rounded"
                onClick={handleManage}>
                Manage Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Cookies;
