import email from "../../assets/info.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../assets/phone.png";
import howard from "../../assets/workshop/img-portrait-howard.jpg";

import a from "../../assets/services/Mockingbird-Interior.webp";
import b from "../../assets/services/Mockingbird-Exterior.webp";
import c from "../../assets/services/On-a-Set.webp";
import d from "../../assets/services/img-production-companies-2.jpg";
import movie from "../../assets/services/movies.png";

const x = import.meta.env.VITE_e1;
const y = import.meta.env.VITE_e2;
const z = import.meta.env.VITE_e3;

import { Link } from "react-router-dom";

const Film_and_tv = () => {
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
    <div className="px-6 pt-40">
      <h1 className="text-3xl font-bold mb-6">Film & TV</h1>

      <p className="mb-4">
        We are passionate about Film & TV, whether you’re creating a short film, full-length feature or
        documentary, we’d be delighted to work with you to create epic traditional and FPV shots that take
        your film to the next professional level.
      </p>
      <p className="mb-4">
        Many films nowadays require drone shots to make them look professional. This can either be to provide
        establishing shots from the air, track objects (such as cars going along the road), or give
        perspectives that are simply not possible from the ground.
      </p>
      <p className="mb-4">
        We can elevate your film or TV programme to new heights. We understand story and how getting those
        beautiful visual shots can make a big impact on your storytelling while captivating your audience
        through amazing visuals.
      </p>
      <p className="mb-4">
        If you have a film or programme and are interested in us working with you to provide stunning aerial
        footage, drop us a line at
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}
        >
          <img src={email} alt="Email us" className="w-52 h-6 inline-block align-text-bottom ml-1" />
        </a>
        , or get in touch with us via our{" "}
        <Link to="/contact" className="underline cursor-pointer">
          Contact Us
        </Link>{" "}
        page.
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
          <h2 className="font-semibold mb-4">A premiere at the Mockingbird Cinema</h2>
          {showPic1 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 flex-col"
              onClick={toggle1}
            >
              <div className="bg-white md:w-[80%] md:h-[80%] relative rounded-lg">
                <img src={a} alt="" className="mb-4 w-full h-full" onClick={(e) => e.stopPropagation()} />
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
          <h2 className="font-semibold mb-4">Mockingbird Cinema</h2>
          {showPic2 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle2}
            >
              <img
                src={b}
                alt="On Set for the film The Killing of Ava Jukes"
                className="md:w-[80%] md:h-[90%]"
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
          <h2 className="font-semibold mb-4">On Set for the film The Killing of Ava Jukes</h2>
          {showPic3 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle3}
            >
              <img src={c} alt="On Set for the film Pawn and Kings" className="md:w-[80%] md:h-[80%]" />
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
          <p className="font-semibold">On Set for the film Pawn and Kings</p>
          {showPic4 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle4}
            >
              <img src={d} alt="Film & TV Blurays" className="md:w-[80%] md:h-[80%]" />
            </div>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:ml-20 mt-4">
        <img src={movie} />

        <div>
          <h2 className="text-2xl font-semibold mb-4 md:mt-20 mt-4">The films we’ve worked on include:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Stockhausen Syndrome</li>
            <li>Road Trip</li>
            <li>Distraction</li>
            <li>Mediation</li>
            <li>Pretence</li>
            <li>Pawns and Kings</li>
            <li>The Killing of Ava Jukes (forthcoming)</li>
          </ul>
        </div>
      </div>

      {/* Testimonial */}
      <h1 className="text-2xl font-semibold mb-4 mt-10">Testimonial</h1>
      <div className="grid md:grid-cols-10 mb-14">
        <div className="pl-10 md:pl-0 md:col-span-2 col-span-10">
          <img src={howard} className="w-60 h-60 mb-4 rounded" />
          <cite>Howard Smith, award winning independent filmmaker</cite>
        </div>

        <blockquote className="p-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 md:mb-4 col-span-8">
          <p className="mb-2">
            “In 2022 I attended a Drone Day Workshop devised and presented by Steve Jakab. This was really
            interesting, useful and informative, giving a detailed overview of different kinds of drones and
            their capabilities, along with practical 'hands-on' experience. A total professional, Steve also
            covers a number of important issues relating to the legality of where and when various kinds of
            drones can be used. He has a wide range of state-of-the-art drones, some of which he has designed
            and constructed himself, and the quality of his aerial photography has to be seen to be believed.
            His enthusiasm for the subject is evident, and his communication skills are superb. The workshop
            is inspirational, and fully comprehensible for people of all ages. I can wholeheartedly and
            unreservedly recommend this workshop to anyone and everyone who has any kind of interest in drones
            or video photography.”
          </p>
        </blockquote>
      </div>

      {/* Contact Info */}
      <p className="mb-4">
        If you want to find out more what we can do for you, drop us a line at
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

export default Film_and_tv;
