import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import email from "../../assets/sendmail.webp";
import { TbHandFinger } from "react-icons/tb";
import a from "../../assets/contact.jpg";

const x = import.meta.env.VITE_e1;
const y = import.meta.env.VITE_e2;
const z = import.meta.env.VITE_e3;

const API_KEY = import.meta.env.VITE_CAPCHA_API;

const Contact = () => {
  const form = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (recaptchaValue) {
      // Ensure reCAPTCHA is checked
      emailjs.sendForm(x, y, form.current, z).then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
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
    <div className="flex flex-col pt-40">
      <div className="flex items-center flex-col pb-4 md:pb-20 pt-5">
        <h1 className="text-2xl md:text-6xl ">CONTACT US</h1>
        <h1 className="text-2xl md:text-6xl font-thin">WE&apos;RE HERE TO HELP</h1>
      </div>

      <div className="grid md:grid-cols-2  md:px-32">
        <div className="flex flex-col">
          <img src={a} className="px-10" />
          <p className="mt-5 px-10">
            If you’re looking to capture stunning aerial footage that will take your project to new heights,
            then you should contact our team for drone-related filming.
          </p>
          <p className="px-10 pt-4">
            With our expertise in drone piloting and cinematography, we can provide you with breathtaking
            shots that will add a unique and dynamic perspective to your project. Whether it’s for a
            promotional video, real estate, or film project, our team has the skills and equipment to deliver
            high-quality footage that will exceed your expectations. Contact us today to take your project
            expand your mind and your project to new aerial possibilities!{" "}
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-3 rounded max-w-md mx-auto"
          style={{
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="font-bold text-lg md:text-xl whitespace-nowrap text-center mb-5">
            Send us a message by filling in this form:{" "}
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
            />
          </div>

          <hr className="border-t border-gray-700 w-[90%] mx-auto md:mt-5 mt-10" />

          <div className="flex">
            <p className="mt-10 md:pl-3 pl-1 whitespace-nowrap">Or by clicking on this icon</p>
            <TbHandFinger size={40} className="mt-8 ml-2 md:ml-5 rotate-90" />
            <a
              href={`mailto:Steve@CinematicFPV.co.uk?subject=Your%20Email%20Subject`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:Steve@CinematicFPV.co.uk?subject=contactpage";
              }}
            >
              <img src={email} alt="Email us" className="md:ml-5 md:mt-2 h-20" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
