import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import phone from "../assets/phone.png";
import email from "../assets/info.png";

const Legal = () => {
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
      <hr className="border-t border-gray-500 w-[100%] mx-auto" />
      <div className="flex px-2 md:px-32 pt-5 mb-10 text-gray-500 flex-col md:flex-row text-center whitespace-nowrap">
        <p
          onClick={toggleTerms}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 "
        >
          Terms and Conditions
        </p>
        <p
          onClick={togglePolicy}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 pt-3 md:pl-10 md:py-0"
        >
          Privacy Policy
        </p>

        <p className="md:right-24 md:absolute">Copyright © 2022 Cinematic FPV.</p>
      </div>
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%] p-8 relative rounded-lg">
            <button
              onClick={toggleTerms}
              className="absolute bottom-5 left-1/3 md:mr-80 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2"
            >
              Close
            </button>
            <AiOutlineClose size={40} className="right-8 absolute" onClick={toggleTerms} />
            <h1
              className="text-lg md:text-3xl fixed pt-3"
              style={{ borderBottom: "2px solid black", paddingBottom: "5px" }}
            >
              Terms and Conditions
            </h1>
          </div>

          <div className="overflow-y-auto w-[90%] h-[65%] md:h-[70%] mt-6 px-8 absolute bg-white shadow-lg rounded-lg">
            <p className="mb-4">
              Welcome to Cinematic FPV ("we," "our," or "us"). By using our website, you agree to comply with
              and be bound by the following terms and conditions. If you do not agree to these terms, please
              do not use our website.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">1. Use of Our Website</h2>
            <ul className="pl-5 mb-4">
              <li>1.1. You agree to use our website for lawful purposes only.</li>
              <li>
                1.2. You agree not to engage in any harmful or illegal activities, including but not limited
                to hacking, spreading malware, or infringing on others' rights.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">2. Limitation of Liability</h2>
            <ul className="pl-5 mb-4">
              <li>
                2.1. We do not guarantee that our website will be error-free or uninterrupted, and we are not
                liable for any damages arising from your use of our website.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">3. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about these terms and conditions, please contact us at{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:Steve@CinematicFPV.co.uk";
                }}
              >
                <img
                  src={email}
                  alt="Email us"
                  className="w-52 h-6 inline-block align-text-bottom mt-5 ml-1 mr-1"
                />
              </a>
              or call us on{" "}
              <a href="https://wa.me/447968033307">
                <img
                  src={phone}
                  alt="Message us on WhatsApp"
                  className="w-32 h-5 inline-block align-text-bottom"
                />
              </a>
              .
            </p>
            <p className="mt-6 text-gray-500">Last updated: 19th October 2023</p>
          </div>
        </div>
      )}

      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative rounded-lg">
            <button
              onClick={togglePolicy}
              className="absolute bottom-5 md:mr-80 left-1/3 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2"
            >
              Close
            </button>
            <AiOutlineClose size={40} className="right-8 absolute" onClick={togglePolicy} />

            <h1
              className="text-lg md:text-3xl fixed pt-3"
              style={{ borderBottom: "2px solid black", paddingBottom: "5px" }}
            >
              Privacy Policy
            </h1>
          </div>

          <div className="overflow-auto w-[90%] h-[60%] md:h-[70%] mt-2 px-8 absolute bg-white shadow-lg rounded-lg">
            <span className="text-gray-500">Effective Date: 13th May 2024</span>

            <p className="mb-4">
              1. Introduction
              <br />
              Welcome to Cinematic FPV ("we", "our", or "us"). We are committed to protecting the privacy of
              our website visitors and users. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your personal information when you interact with our website and services. By using
              our website, you consent to the practices described in this Privacy Policy. Please read this
              policy carefully to understand our privacy practices. If you do not agree with the terms of this
              policy, please do not use our website.
            </p>
            <p className="mb-4">
              2. Information We Collect
              <br />
              We may collect the following types of information when you use our website:
              <br />
              2.1. Personal Information:
              <br />
              • Name
              <br />
              • Email address
              <br />
              • Phone number
              <br />
              • Postal address
              <br />
              • Date of birth
              <br />• Any other information you voluntarily provide
            </p>
            <p className="mb-4">
              3. How We Use Your Information:
              <br />
              We may use the information we collect for the following purposes:
              <br />
              3.1. Providing Services: To provide you with our services and to fulfill your requests.
              <br />
              3.2. Communication: To communicate with you, respond to your inquiries, and send you important
              updates.
              <br />
              3.3. Analytics: To analyze how our website is used, improve our services, and personalize your
              experience.
              <br />
              3.4. Marketing: To send you promotional information about our products and services, subject to
              your preferences.
              <br />
              3.5. Legal Compliance: To comply with legal obligations and protect our rights, privacy, safety,
              or property.
            </p>
            <p className="mb-4">
              4. Sharing Your Information
              <br />
              We may share your information with the following:
              <br />
              4.1. Service Providers: We may share your information with third-party service providers who
              assist us in delivering our services.
              <br />
              4.2. Legal Requirements: We may disclose your information when required by law or to protect our
              rights.
              <br />
              4.3. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of
              our assets, your information may be transferred as part of the transaction.
              <br />
              4.4. With Your Consent: We will share your information with third parties when you give us your
              consent to do so.
            </p>
            <p className="mb-4">
              5. Your Choices
              <br />
              You have the following choices regarding your personal information:
              <br />
              5.1. Access and Update: You can access and update your personal information by contacting us at{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:Steve@CinematicFPV.co.uk";
                }}
              >
                <img
                  src={email}
                  alt="Email us"
                  className="w-52 h-6 inline-block align-text-bottom mt-5 ml-1"
                />
              </a>
              <br />
              5.2. Opt-Out: You can opt-out of receiving marketing communications from us by following the
              instructions provided in our communications.
            </p>
            <p className="mb-4">
              6. Security
              <br />
              We take reasonable measures to protect your personal information from unauthorized access,
              disclosure, alteration, and destruction.
            </p>
            <p className="mb-4">
              7. Children's Privacy
              <br />
              Our website is not intended for children under the age of 13. We do not knowingly collect or
              store personal information from children under 13 years of age.
            </p>
            <p className="mb-4">
              8. Changes to this Privacy Policy
              <br />
              We may update this Privacy Policy from time to time. Any changes will be posted on this page,
              and the effective date will be updated. Please check this page periodically to stay informed
              about our privacy practices.
            </p>
            <p className="mb-4">
              9. Contact Us
              <div className="flex">
                <br />
                If you have any questions or concerns about this Privacy Policy or our data practices, please
                contact us at{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:Steve@CinematicFPV.co.uk";
                  }}
                >
                  <img
                    src={email}
                    alt="Email us"
                    className="w-52 h-6 inline-block align-text-bottom mt-5 ml-2"
                  />
                </a>
              </div>
              , or call us on{" "}
              <a href="https://wa.me/447968033307">
                <img
                  src={phone}
                  alt="Message us on WhatsApp"
                  className="w-32 h-5 inline-block align-text-bottom"
                />
              </a>
              .
            </p>
            <p className="text-gray-500">Last updated: 13th May 2024</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Legal;
