// src/components/DroneDayWorkshop.js
import email from "../../assets/info.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import howard from "../../assets/workshop/img-portrait-howard.jpg";
import a from "../../assets/workshop/img-courses-drone-air3.jpg";
import b from "../../assets/workshop/img-courses-drone-apex.jpg";
import c from "../../assets/workshop/img-courses-handout.jpg";
import phone from "../../assets/phone.png";

function Workshop() {
  const [showPic1, setShowPic1] = useState(false);
  const [showPic2, setShowPic2] = useState(false);
  const [showPic3, setShowPic3] = useState(false);

  const toggle1 = () => {
    setShowPic1(!showPic1);
  };
  const toggle2 = () => {
    setShowPic2(!showPic2);
  };

  const toggle3 = () => {
    setShowPic3(!showPic3);
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
    <div className="bg-white px-8 pt-40 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Drone Day Workshop (for Education)</h1>

      {/* Image of feedback snippet */}
      <img
        src="path_to_feedback_image.jpg"
        alt="Feedback Snippet"
        className="w-full mb-4 rounded-lg shadow-md"
      />

      {/* Workshop content */}
      <p className="mb-4">
        Drone technology is forever progressing and as such these amazing machines offer new and
        unprecedented opportunities given their ever increasing capabilities.
      </p>

      <p>
        They can be used for all sorts of things, from film making, inspections, deliveries,
        mapping, and agriculture. They fly with precision and can carry various payloads depending
        on the job they are tasked with.
      </p>

      <p>
        One thing is for sure – drone technology is only going to become more advanced and prevalent
        in our everyday lives. As an avid drone enthusiast, drone builder, and passionate aerial
        cinematographer since 2017 using both traditional as well as DJI drones, I have been running
        workshops and educational offerings for several years now, helping people understand the
        technology, the advantages that drones bring, and helping them get the most of what drones
        can offer. I have run workshops involving training people how to fly as well as how they can
        get the best from drone filming for their own creative films.
      </p>

      <p>
        With all of this in mind, I offer my knowledge, skills and experience to help people learn
        and understand more about these amazing machines.
      </p>

      <p>
        In terms of education, I offer half and full day training sessions, bringing the reality of
        drones into the classroom environment, for students to learn about them in a practical way
        where they can ask questions to their hearts content.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-5">
        Here are some of the topics that I cover:
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>An introduction and overview of drones</li>
        <li>
          A look at DJI drones for filming, including the intelligent flight modes (indoors and
          outdoors)
        </li>
        <li>How traditional drones fly and film</li>
        <li>How you operate and film with them (controls, video settings etc.)</li>
        <li>Line of Sight (LOS) and framing for shots</li>
        <li>Spotting for the drone pilot</li>
        <li>
          Different kinds of shots you may use for your films, e.g. risers, complex shots, shots you
          may not have thought of
        </li>
        <li>Legislation and safety (including weight categories/classifications)</li>
        <li>
          Practical flying session (your chance to have a go flying an ultra-safe drone, if you want
          to!)
        </li>
        <li>An brief introduction to FPV drones</li>
        <li>Strengths and differences to traditional DJI cinematic drones</li>
        <li>The digital headset and HD transmission system for FPV</li>
        <li>Different modes of flight: angle mode, acro mode and air mode</li>
        <li>What flying in FPV mode is, and what it makes possible</li>
        <li>
          Different kinds and sizes of drones (e.g. cinewhoops, traditional FPV drones, cinelifters
          etc.)
        </li>
        <li>
          Safety (visual observers, battery charging, drone handling etc. weight categories etc.)
        </li>
        <li>Seeing some drones in flight (indoors – no need to gulp! – & outdoors)</li>
        <li>Cameras used with FPV drones</li>
        <li>Different uses and example videos shot using FPV drones</li>
        <li>Practical: Fly an FPV drone in a simulator</li>
        <li>Example videos</li>
        <li>Q&A, feedback, and testimonials (would be appreciated).</li>
      </ul>

      {/* Testimonial */}
      <div className="grid grid-cols-10 mt-10 mb-14">
        <div className="col-span-2">
          <img src={howard} className="w-60 h-60 mb-4 rounded" />
          <cite>Howard Smith, award winning independent filmmaker</cite>
        </div>

        <blockquote className="p-4 italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 mb-4 col-span-8">
          <p className="mb-2">
            “In 2022 I attended a Drone Day Workshop devised and presented by Steve Jakab. This was
            really interesting, useful and informative, giving a detailed overview of different
            kinds of drones and their capabilities, along with practical 'hands-on' experience. A
            total professional, Steve also covers a number of important issues relating to the
            legality of where and when various kinds of drones can be used. He has a wide range of
            state-of-the-art drones, some of which he has designed and constructed himself, and the
            quality of his aerial photography has to be seen to be believed. His enthusiasm for the
            subject is evident, and his communication skills are superb. The workshop is
            inspirational, and fully comprehensible for people of all ages. I can wholeheartedly and
            unreservedly recommend this workshop to anyone and everyone who has any kind of interest
            in drones or video photography.”
          </p>
        </blockquote>
      </div>

      {/* Images with pop-up functionality */}
      <div className="grid md:grid-cols-3 text-center gap-8">
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
      </div>

      {/* Contact Info */}
      <p className="mb-4">
        If you’re interested in having a session at your school and college and would like to
        discuss what topics you’d like covered, please drop us a line at
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
}

export default Workshop;
