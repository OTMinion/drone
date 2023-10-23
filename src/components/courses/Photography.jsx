import a from "../../assets/services/img-drone-photography-1-boathouse.jpg";
import b from "../../assets/services/img-drone-photography-2-villa.jpg";
import c from "../../assets/services/img-drone-photography-3-funfair.jpg";
import d from "../../assets/services/img-drone-photography-4-wedding.jpg";
import email from "../../assets/info.png";
import phone from "../../assets/phone.png";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Photography = () => {
  const [showPic1, setShowPic1] = useState(false);
  const [showPic2, setShowPic2] = useState(false);
  const [showPic3, setShowPic3] = useState(false);
  const [showPic4, setShowPic4] = useState(false);

  const toggle1 = () => {
    setShowPic1(!showPic1);
  };
  const toggle2 = () => {
    setShowPic2(!showPic2);
  };

  const toggle3 = () => {
    setShowPic3(!showPic3);
  };

  const toggle4 = () => {
    setShowPic4(!showPic4);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ur31oum", "template_wrjygli", form.current, "ln-Sal_bmzck9Jt-Q").then(
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
      <h1 className="text-4xl font-semibold mb-6">Drone Photography</h1>
      <p className="mb-4">
        While a lot of our focus is on creating superb cinematic eye-catching aerial video content,
        we’re very aware that still images captured from the air are also brilliant for sharing a
        unique perspective on a house, a subject, an event or a scene. We can capture up to 48
        megapixel raw images using our drones, and they can be further enhanced making the images we
        capture come alive. Images can be captured to a specific brief, or taken from the high
        quality video footage we capture.
      </p>
      <p className="mb-4">
        Flexibility is important, and some of our drones also include telephoto lenses that allow us
        to get shots that look incredibly detailed and close to the action, while maintaining a safe
        distance; we have a lot of flexibility to get the kind of photos you’re after.
      </p>
      <p className="mb-4">
        Why not get us to shoot a few photos from the air? They can be incredibly useful for
        brochures, your website or social media.
      </p>

      <div className="grid md:grid-cols-4 text-center gap-8">
        <div className="flex flex-col">
          <div className="relative group mb-4 w-full h-48 cursor-pointer" onClick={toggle1}>
            <img
              src={a}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic1 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 flex-col"
              onClick={toggle1}>
              <div className="bg-white md:w-[80%] md:h-[80%] relative rounded-lg">
                <img
                  src={a}
                  alt=""
                  className="mb-4 w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col relative group cursor-pointer" onClick={toggle2}>
          <div className="relative mb-4 w-full h-48 overflow-hidden">
            <img
              src={b}
              alt="On Set for the film The Killing of Ava Jukes"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic2 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle2}>
              <img
                src={b}
                alt="On Set for the film The Killing of Ava Jukes"
                className="md:w-[80%] md:h-[80%]"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col relative group cursor-pointer" onClick={toggle3}>
          <div className="relative mb-4 w-full h-48 overflow-hidden">
            <img
              src={c}
              alt="On Set for the film Pawn and Kings"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic3 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle3}>
              <img
                src={c}
                alt="On Set for the film Pawn and Kings"
                className="md:w-[80%] md:h-[80%]"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col relative group cursor-pointer" onClick={toggle4}>
          <div className="relative mb-4 w-full h-48 overflow-hidden">
            <img
              src={d}
              alt="Film & TV Blurays"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic4 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle4}>
              <img src={d} alt="Film & TV Blurays" className="md:w-[80%] md:h-[80%]" />
            </div>
          )}
        </div>
      </div>

      <p>
        If you would like us to take some aerial photographs for you, drop us a line at
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}>
          <img
            src={email}
            alt="Email us"
            className="w-52 h-6 inline-block align-text-bottom ml-1"
          />
        </a>
        , call us on <img src={phone} className="w-32 h-5 inline-block align-text-bottom ml-1" /> or
        fill in the form below:
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
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

export default Photography;
