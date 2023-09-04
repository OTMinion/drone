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
          <div className="bg-white w-[90%] h-[90%]  p-8 relative ">
            <button
              onClick={toggleTerms}
              className="absolute top-10 right-10 md:right-25 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg md:text-3xl text-center fixed pt-3">Terms and Conditions</h1>
          </div>

          <div className="overflow-auto w-[90%] h-[60%] mt-8 px-8 absolute">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint aliquid atque,
              pariatur libero dolor delectus, error praesentium incidunt ipsam debitis. Quo, minima
              esse! Repudiandae quisquam sed atque id voluptates ut nulla rem! Tempore nemo sunt
              nostrum fuga suscipit dolorum possimus maiores, quisquam tenetur at tempora nulla, ad
              non nam quia ex obcaecati? Quas voluptatum itaque quod deserunt, distinctio et
              assumenda exercitationem sint reiciendis doloremque non iure repellat fugiat.
              Cupiditate, iusto? Labore, qui quam doloremque nesciunt ducimus odio a exercitationem,
              excepturi facere sint illum commodi sit corrupti? Amet, explicabo dolores non placeat
              accusamus nobis? Saepe itaque omnis hic nihil necessitatibus. Perspiciatis quibusdam
              aliquam iste sint dolore laborum aliquid itaque, beatae eos! Quod accusamus tenetur
              quos nemo perferendis dignissimos quaerat eius iusto dolore, sunt eum aperiam totam
              delectus nobis, error suscipit nulla facilis fugiat eaque laborum rerum provident.
              Deleniti tenetur nisi possimus dolor ducimus magnam non! Unde debitis exercitationem
              voluptatum neque reiciendis repudiandae architecto! Tempore temporibus, libero
              corporis corrupti perferendis deserunt molestias maxime dolore assumenda nemo dolores
              beatae tenetur magni maiores veritatis, sint similique sunt mollitia earum. Officiis
              ut sed, aliquam corrupti architecto, culpa minus reprehenderit, dolorum temporibus
              pariatur error consectetur. Totam a laborum officia necessitatibus ratione minus,
              nesciunt quae aliquam quam placeat itaque soluta commodi harum expedita suscipit
              voluptatibus quisquam qui! Perferendis fugit quo qui eius doloribus accusamus autem
              repudiandae itaque mollitia. Eius quis ducimus officiis harum nulla aliquam
              dignissimos tenetur. Ducimus maxime ipsam nam molestias incidunt nulla laudantium a
              pariatur cum corrupti commodi sapiente est ipsa corporis, doloribus animi minus
              necessitatibus culpa. Nesciunt ducimus ab aliquam impedit voluptatum velit doloremque
              officiis cum at, facere blanditiis nulla natus vero accusantium quidem porro cumque
              nostrum quis fuga incidunt architecto! Molestiae, eveniet. Eos sint deserunt sunt
              vitae quod, quae dolore ullam omnis quam pariatur ratione explicabo voluptates
              eligendi enim ab quidem incidunt debitis! Sint, sed. Pariatur, alias illo optio
              incidunt rem possimus amet? Tempora eaque, ea fugit asperiores harum corporis expedita
              tempore vel sed perspiciatis sequi animi veritatis neque aliquam consequatur modi
              consectetur dolore, ipsa voluptatum inventore praesentium vero quidem. Ducimus animi
              veritatis nam porro illum fugiat incidunt, quia perferendis, id debitis deleniti
              perspiciatis maiores facere accusantium delectus illo recusandae repellat nihil
              tempore eligendi. Corrupti perferendis sed nostrum nihil labore fugiat adipisci.
              Officia est, atque ipsa aspernatur nobis sequi at sunt necessitatibus a reiciendis
              corporis neque doloribus nostrum similique perferendis consequuntur, deleniti
              accusantium? Vitae dignissimos explicabo quae. A ducimus nulla consectetur enim
              molestias quidem tenetur animi nam dolore, alias error, iste explicabo qui repellendus
              eveniet fuga eaque aut ullam reprehenderit amet nemo sint. Sed recusandae atque a iure
              modi odit. Qui veniam, amet, aliquam et dolorem error architecto quas, inventore
              voluptatum fugiat natus omnis rem necessitatibus dolor vero ut dolore facere. Fugit
              deleniti quisquam, atque voluptatibus maxime odio dolorem voluptatem molestiae
              deserunt non saepe culpa harum suscipit optio eveniet neque unde iure minus commodi.
              Amet cupiditate hic tempora praesentium accusantium nam adipisci ullam molestiae!
              Ipsum pariatur animi reiciendis enim nisi, hic fuga repellendus laudantium vero.
              Beatae repudiandae quae eaque expedita quos recusandae.
            </p>
          </div>
        </div>
      )}

      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative">
            <button
              onClick={togglePolicy}
              className="absolute top-10 right-10 md:right-25 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg md:text-3xl text-center fixed pt-3">Privacy Policy</h1>
          </div>
          <div className="overflow-auto w-[90%] h-[60%] mt-10 px-8 absolute">
            {/* Add your Privacy Policy content here */}
          </div>
        </div>
      )}

      {showCookie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%]  p-8 relative">
            <button
              onClick={toggleCookie}
              className="absolute top-10 right-10 md:right-25 cursor-pointer border border-gray-400 rounded-full px-8 py-2">
              Close
            </button>

            <h1 className="text-lg md:text-3xl text-center fixed pt-3 font-bold">Cookies</h1>
          </div>
          <div className="overflow-auto w-[90%] h-[90%] mt-60 px-8 absolute">
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
