import email from "../../assets/info.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../assets/phone.png";
import a from "../../assets/services/img-services-events1.jpg";

const Events = () => {
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
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <img src={a} />
      <p className="mb-4 mt-4">
        We love filming events. Events are great because they are special and enjoyable occasions where people
        come together in their mutual love of something – for a wedding, to watch a game, to enjoy music or
        for some other occasion. They can be dynamic, engaging, enjoyable, beautiful, soulful and dramatic.
      </p>
      <p className="mb-4">
        Filming for events poses its own unique set of challengers for filmmakers. Often, there can be a lot
        of things happening over a wide area, and it can be hard for traditional camera operators to make the
        most of capturing everything going on. This is where drone videography can really come into its own.
      </p>
      <p className="mb-4">
        When filming by drone, we can capture video of things happening from the air, whether this is really
        close to the action, or further away. From filming further away, we can capture footage of whole
        areas, landscapes, beautiful buildings or interesting gatherings. These are great shots that can lead
        into close-ups from ground level or even via other drones that can nimbly move from one area of action
        to another.
      </p>
      <p className="mb-4">
        We can also film safely close to the action. This can be done using light, quiet drones that are
        non-disruptive and non-invasive. Using FPV drones, for example, we can get close to processions, be
        part of the action within a sports game, fly indoors capturing the beauty of an environment, or move
        seamlessly from one area to another in the same shot. Using our purpose built FPV drones, we can make
        the footage look dramatic and exciting, capturing the viewer’s attention that only FPV makes possible.
      </p>
      <p className="mb-6">
        Here are some examples of events we’ve filmed at: special seasonal events, weddings, St. Patrick’s
        Parade, tag rugby games and funfairs.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/TgLusR6vdH0"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>

        <iframe
          className="w-full h-96"
          src="https://www.dailymotion.com/embed/video/x8j3aq8?autoplay=1"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>

      <p className="mt-6">
        If you have an event that you would like filming, drop us a line at{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:Info@CinematicFPV.co.uk";
          }}
        >
          <img src={email} alt="Email us" className="w-52 h-6 inline-block align-text-bottom ml-1" />
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

export default Events;
