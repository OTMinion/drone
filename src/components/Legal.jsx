import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
      <hr className="border-t border-gray-500 w-[100%] mx-auto" />
      <div className="flex px-2 md:px-32 pt-5 mb-10 text-gray-500 flex-col md:flex-row text-center whitespace-nowrap">
        <p
          onClick={toggleTerms}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 ">
          Terms and Conditions
        </p>
        <p
          onClick={togglePolicy}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 pt-3 md:pl-10 md:py-0">
          Privacy Policy
        </p>
        <p
          onClick={toggleCookie}
          className="cursor-pointer hover:underline hover:text-black transition-all duration-300 pt-3 pb-8 md:pl-10 md:py-0">
          Manage Cookies
        </p>
        <p className="md:right-24 md:absolute">Copyright © 2022 Cinematic FPV.</p>
      </div>
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative rounded-lg">
            <button
              onClick={toggleTerms}
              className="absolute bottom-5 left-1/3 md:mr-80 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <AiOutlineClose size={40} className="right-8 absolute" onClick={toggleTerms} />

            <h1 className="text-lg md:text-3xl text-center fixed pt-3">Terms and Conditions</h1>
          </div>

          <div className="overflow-auto w-[90%] h-[65%] mt-6 px-8 absolute bg-white shadow-lg rounded-lg">
            <p className="mb-2">
              <span className="font-semibold">Effective Date:</span> 19th October 2023
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">1. Introduction</h2>
            <p className="mb-4">
              Welcome to [Your Website Name] ("we," "our," or "us"). By using our website, you agree
              to comply with and be bound by the following terms and conditions. If you do not agree
              to these terms, please do not use our website.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">2. Changes to Terms and Conditions</h2>
            <p className="mb-4">
              We may modify these terms and conditions at any time without notice. It is your
              responsibility to review this page periodically for changes. Your continued use of our
              website after changes are made constitutes your acceptance of the new terms.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">3. Use of Our Website</h2>
            <ul className=" pl-5 mb-4">
              <li>3.1. You agree to use our website for lawful purposes only.</li>
              <li>
                3.2. You agree not to use our website for any harmful or illegal activities,
                including but not limited to hacking, spreading malware, or infringing on others'
                rights.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">4. User Accounts</h2>
            <ul className=" pl-5 mb-4">
              <li>
                4.1. Some parts of our website may require you to create an account. You are
                responsible for maintaining the confidentiality of your account information and
                password.
              </li>
              <li>4.2. You are responsible for all activities conducted under your account.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">5. Intellectual Property</h2>
            <ul className=" pl-5 mb-4">
              <li>
                5.1. All content, trademarks, and other intellectual property on our website are the
                property of [Your Company Name].
              </li>
              <li>
                5.2. You may not use our content for commercial purposes without our written
                consent.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">6. Privacy</h2>
            <ul className=" pl-5 mb-4">
              <li>
                6.1. We collect and use information in accordance with our Privacy Policy. Please
                review our Privacy Policy to understand how we collect, use, and protect your
                personal information.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">7. Limitation of Liability</h2>
            <ul className=" pl-5 mb-4">
              <li>
                7.1. We do not guarantee that our website will be error-free or uninterrupted.
              </li>
              <li>
                7.2. We are not liable for any direct, indirect, incidental, special, or
                consequential damages arising from your use of our website.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">8. Indemnity</h2>
            <ul className=" pl-5 mb-4">
              <li>
                8.1. You agree to indemnify and hold us harmless from any claims, damages, or losses
                arising from your use of our website or any violation of these terms and conditions.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">9. Links to Third-Party Websites</h2>
            <ul className=" pl-5 mb-4">
              <li>
                9.1. Our website may contain links to third-party websites. These links are provided
                for your convenience, and we are not responsible for the content of these websites.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">10. Governing Law and Jurisdiction</h2>
            <ul className=" pl-5 mb-4">
              <li>
                10.1. These terms and conditions are governed by and construed in accordance with
                the laws of [Your Jurisdiction].
              </li>
              <li>
                10.2. Any disputes arising from or related to these terms and conditions will be
                subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about these terms and conditions, please contact
              us at{" "}
              <a href="mailto:info@cinematicfpv.co.uk" className="text-blue-500 underline">
                info@cinematicfpv.co.uk
              </a>{" "}
              [this will need to be encrypted to avoid robots/spam email], or call us on 07968
              033307.
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
              className="absolute bottom-5 md:mr-80 left-1/3 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>
            <AiOutlineClose size={40} className="right-8 absolute" onClick={togglePolicy} />

            <h1 className="text-lg md:text-3xl text-center fixed pt-3">Privacy Policy</h1>
          </div>
          <div className="overflow-auto w-[90%] h-[60%] mt-6 px-8 absolute bg-white shadow-lg rounded-lg">
            <p className="mb-2">
              <span className="font-semibold">Effective Date:</span> 19th October 2023
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Introduction</h2>
            <p className="mb-4">
              Welcome to Cinematic FPV ("we", "our", or "us"). We are committed to protecting the
              privacy of our website visitors and users. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal information when you interact with
              our website and services.
            </p>
            <p className="mb-4">
              By using our website, you consent to the practices described in this Privacy Policy.
              Please read this policy carefully to understand our privacy practices. If you do not
              agree with the terms of this policy, please do not use our website.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information when you use our website:
            </p>
            <h3 className="text-lg font-semibold mb-2">2.1. Personal Information:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address</li>
              <li>Date of birth</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">2.2. Usage Information:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Clickstream data</li>
              <li>Referral source</li>
              <li>Pages visited</li>
              <li>Duration of visit</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">2.3. Cookies and Tracking Technologies:</h3>
            <p className="mb-4">
              We use cookies and other tracking technologies to collect information about your
              online activities. You can adjust your cookie preferences in the Manage Cookies
              section of our website.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect for the following purposes:
            </p>
            <ul className=" pl-5 mb-4">
              <li>
                3.1. Providing Services: To provide you with our services and to fulfill your
                requests.
              </li>
              <li>
                3.2. Communication: To communicate with you, respond to your inquiries, and send you
                important updates.
              </li>
              <li>
                3.3. Analytics: To analyse how our website is used, improve our services, and
                personalise your experience.
              </li>
              <li>
                3.4. Marketing: To send you promotional information about our products and services,
                subject to your preferences.
              </li>
              <li>
                3.5. Legal Compliance: To comply with legal obligations and protect our rights,
                privacy, safety, or property.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Sharing Your Information</h2>
            <p className="mb-4">We may share your information with the following:</p>
            <ul className="pl-5 mb-4">
              <li>
                4.1. Service Providers: We may share your information with third-party service
                providers who assist us in delivering our services.
              </li>
              <li>
                4.2. Legal Requirements: We may disclose your information when required by law or to
                protect our rights.
              </li>
              <li>
                4.3. Business Transfers: In the event of a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of the
                transaction.
              </li>
              <li>
                4.4. With Your Consent: We will share your information with third parties when you
                give us your consent to do so.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Your Choices</h2>
            <p className="mb-4">
              You have the following choices regarding your personal information:
            </p>
            <ul className=" pl-5 mb-4">
              <li>
                5.1. Access and Update: You can access and update your personal information by
                contacting us at{" "}
                <a href="mailto:info@cinematicfpv.co.uk" className="text-blue-500 underline">
                  info@cinematicfpv.co.uk
                </a>{" "}
                [this will need to be encrypted to avoid robots/spam email].
              </li>
              <li>
                5.2. Opt-Out: You can opt-out of receiving marketing communications from us by
                following the instructions provided in our communications.
              </li>
              <li>
                5.3. Cookies: You can manage your cookie preferences by referring to our Cookie
                Policy.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Security</h2>
            <p className="mb-4">
              We take reasonable measures to protect your personal information from unauthorized
              access, disclosure, alteration, and destruction.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly
              collect or store personal information from children under 13 years of age.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page, and the effective date will be updated. Please check this page periodically
              to stay informed about our privacy practices.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices,
              please contact us at{" "}
              <a href="mailto:info@cinematicfpv.co.uk" className="text-blue-500 underline">
                info@cinematicfpv.co.uk
              </a>{" "}
              [this will need to be encrypted to avoid robots/spam email], or call us on 07968
              033307.
            </p>
            <p className="mt-6 text-gray-500">Last updated: 19th October 2023</p>
          </div>
        </div>
      )}

      {showCookie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative rounded-lg">
            <button
              onClick={toggleCookie}
              className="absolute bottom-5 left-1/3 md:mr-80 md:right-24 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <AiOutlineClose size={40} className="right-8 absolute" onClick={toggleCookie} />

            <h1 className="text-lg md:text-3xl text-center fixed pt-3 font-bold">Cookies</h1>
          </div>
          <div className="overflow-auto w-[90%] h-[60%] mt-6 px-8 absolute">
            <p>
              Cookies are small text files that are placed on your computer by websites that you
              visit. They are widely used in order to make websites work, or work more efficiently,
              as well as to provide information to the owners of the site. Depending on your access
              level and actions on the site, various preference based cookies may be set to enrich
              your experience. These cookies are used to remember your theme, language and item
              marking preferences, etc.
            </p>

            <h1 className="py-5 font-bold">Essential Cookies</h1>

            <p>These cookies are required to enable core functionality and can't be rejected.</p>
            <p>Essential Cookies</p>

            <div className="flex">
              <h1 className="py-5 font-bold">Optional Cookies</h1>
              <label for="toggle" class="flex items-center cursor-pointer pl-3">
                <div class="relative">
                  <input type="checkbox" id="toggle" class="sr-only" />
                  <div class="toggle-bg block bg-gray-600 w-14 h-8 rounded-full transition"></div>
                  <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>
            <p>
              These cookies are not required, but can be enabled to enhance your browsing
              experience.
            </p>

            <hr className="border-t border-gray-400 mt-5 w-[100%] mx-auto" />
            <h1 className="py-5 font-bold">How do I change my cookie setting?</h1>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To
              find out more about cookies, including how to see what cookies have been set and how
              to manage and delete them, visit
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                className="underline "
                rel="noopener noreferrer">
                {" "}
                www.aboutcookies.org
              </a>{" "}
              or
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                className="underline "
                rel="noopener noreferrer">
                {" "}
                www.allaboutcookies.org
              </a>
              . To opt out of being tracked by Google Analytics across all websites, visit
              <a
                href="http://tools.google.com/dlpage/gaoptout"
                target="_blank"
                className="underline"
                rel="noopener noreferrer">
                {" "}
                http://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Legal;
