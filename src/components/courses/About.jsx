import email from "../../assets/info.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const API_KEY = import.meta.env.VITE_CAPCHA_API;

const About = () => {
  const startDate = new Date(2016, 0, 1); // 0 is January in JavaScript's Date object
  const currentDate = new Date();
  const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();

  const form = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (recaptchaValue) {
      // Ensure reCAPTCHA is checked
      emailjs.sendForm(x, y, form.current, z).then(
        (result) => {
          console.log(result.text);
          alert("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      alert("Please complete the reCAPTCHA verification");
    }
  };

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="bg-white px-8 rounded-lg  pt-40">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        Cinematic FPV is a novel drone, filming and production organisation that was founded in 2020. We have
        over <span className="font-semibold">{yearsOfExperience} years’</span> experience flying and filming,
        and specialise in creating unique, cutting edge and high quality drone videography, tailored videos
        and high quality productions to meet your needs.
      </p>
      <p className="mb-4">
        Utilising cutting-edge equipment, we have a fleet of over 12 drones, 9 of them purpose built to be
        able to get the most dynamic and stunning shots while maintaining the highest levels of safety. Our
        chief drone pilot, Steve Jakab, is registered with the CAA and fully qualified up to GVC level (the
        highest drone qualification possible in the UK) as well as holding an EASA licence to allow for flying
        and filming across Europe.
      </p>
      <p className="mb-4">
        While we can supply amazing drone footage, we can also film on-the-ground scenes, combining the best
        of air and ground shots to make your videos really stand out. We also have an amazing in-house
        production facility to create truly professional videos that engage with your audiences to deliver
        your message through the stunning visuals and high quality sound. We can tailor footage to be used
        across a variety of different media, working with your own production company for film, your website
        designers for web videos and can also create vertical videos that work great with social media
        platforms.
      </p>
      <p className="mb-4">
        Whether you’re thinking about filming an event, considering a fly-through drone tour, or creating a
        promotional video, drop us a line at{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}
          className="inline-block align-middle"
        >
          <img src={email} alt="Email us" className="w-52 h-6 inline-block align-text-bottom mr-1 mb-1" />
        </a>
        , call us on <span className="font-semibold">07968 033307</span> or fill in the form below:
      </p>

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
        <div className="flex justify-center mb-4">
          <ReCAPTCHA sitekey={API_KEY} onChange={onRecaptchaChange} />
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

export default About;
