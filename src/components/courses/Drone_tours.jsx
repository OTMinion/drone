import email from "../../assets/info.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../assets/phone.png";

const x = import.meta.env.VITE_e1;
const y = import.meta.env.VITE_e2;
const z = import.meta.env.VITE_e3;

const Drone_tours = () => {
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
      <h1 className="text-4xl font-semibold mb-6">Drone Tours</h1>
      <p className="mb-4">Drone tours are one of the things we love to do most here at Cinematic FPV.</p>
      <p className="mb-4">
        A drone tour is simply a tour of (usually) an indoor space using one of our specialised small
        <span
          className="hover:underline cursor-help"
          title="A small, lightweight FPV drone with propeller guards usually used for flying and filming with high precision in small areas"
        >
          {" "}
          cinewhoop
        </span>{" "}
        drones.
      </p>
      <p className="mb-4">
        Using one of these drones, we can film outside, fly inside a building (for example), fly through the
        building taking note of special features, exit the building etc. In its simplest form, this video
        fly-through is produced with background music.
      </p>
      <p className="mb-4">
        However, these drone tours can become much more sophisticated by incorporating the following elements:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Choreographed ‘actors’ who come into motion as the drone approaches (for example, handing over a
          drink in a pub drone tour)
        </li>
        <li>
          Adding sound effects (known as sound engineering) so dialogue and other sounds match up with the
          visual side of the drone tour. This makes the video more relatable and engaging – especially when
          you have a message you want to give in one or more areas within the tour. Again, this can be added
          on top of the background musical score
        </li>
        <li>
          Special effects – such as text that tracks a subject, for example giving information about features
          such as a large display screen in a conference room
        </li>
      </ul>
      <p className="mb-4">
        There are lots of possibilities when it comes to drone tours given the flexibility of these incredible
        small drones. They can fly safely between people, follow people into another room, fly over objects
        such as tables, be used to show a small or large area, fly over water, fly and film talent in a way
        that normal videographer couldn’t (because it would be too disruptive in front of an audience, for
        example) etc. The possibilities are truly endless.
      </p>
      <p className="mb-4">
        Like with all of our shoots, this style of drone filming can be combined with regular ground shots,
        slower cinematic aerial shots and other creative effects to create ultra-compelling video footage for
        your needs.
      </p>

      <p className="mb-4">
        If you have an idea of a video tour that you would like us to film, drop us a line at
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}
        >
          <img src={email} alt="Email us" className="w-52 h-6 inline-block align-text-bottom ml-2" />
        </a>
        , call us on <img src={phone} className="w-32 h-5 inline-block align-text-bottom ml-1 mr-2" />
        or fill in the form below:
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

export default Drone_tours;
