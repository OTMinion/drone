import email from "../../assets/info.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../assets/phone.png";
import a from "../../assets/services/img-production-companies-2.jpg";

const x = import.meta.env.VITE_e1;
const y = import.meta.env.VITE_e2;
const z = import.meta.env.VITE_e3;

const Production = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(x, y, form.current, z).then(
      (result) => {
        console.log(result.text);
        alert("email sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="px-8 pt-40">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Working with Production Companies</h1>

      {/* Clapperboard Image */}
      <img src="path_to_clapperboard_image.jpg" alt="Clapperboard" className="mb-4 w-full" />

      <p className="mb-4">
        We also work directly with production companies. Let’s face it, managing a fleet of cutting-edge
        drones (and associated equipment), keeping up with qualifications and the constant changes in the law,
        not to mention having many years’ of experience in flying is not something that every production
        company can afford to do in-house. That is why working in collaboration with us to provide epic drone
        footage for you makes so much sense; you can focus on coming up with the video ideas, writing,
        producing, directing, post-production activities etc. and we will work with you to supply the amazing
        aerial footage you need.
      </p>

      {/* Image with grey border */}
      <img src={a} alt="Production Companies" className="mb-4 w-full border-2 border-gray-400" />

      <h2 className="text-2xl font-semibold mb-4">
        Here are some ways that our footage can be used in your projects:
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Event videos</li>
        <li>TV and film</li>
        <li>Promotional videos</li>
        <li>Documentaries</li>
        <li>Drone tours and fly-throughs</li>
        <li>Filming real estate</li>
        <li>Social media</li>
        <li>News releases</li>
      </ul>

      {/* Embed YouTube Videos */}

      <div className="grid md:grid-cols-2 md:px-10">
        <iframe
          className="mb-4 md:w-[600px] md:h-96"
          src="https://www.youtube.com/embed/TgLusR6vdH0"
          title="Tag Rugby video"
        ></iframe>
        <iframe
          className="mb-4 md:w-[600px] md:h-96"
          src="https://www.youtube.com/embed/_4fXCE0YsvQ"
          title="Millennium Point video"
        ></iframe>
      </div>

      <p className="mb-4">
        If you want to see how we could help you with your next project, drop us a line at
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}
        >
          <img src={email} alt="Email us" className="w-52 h-6 inline-block align-text-bottom ml-1" />
        </a>
        , call us on <img src={phone} className="w-32 h-5 inline-block align-text-bottom ml-1" /> or fill in
        the form below:
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="mt-4">
        <div className="mb-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your email address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Send"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 md:px-40 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
};

export default Production;
