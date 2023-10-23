import email from "../../assets/info.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import phone from "../../assets/phone.png";

const Real_estate = () => {
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
      <h1 className="text-4xl font-semibold mb-6">Real Estate</h1>
      <p className="mb-4">
        Real estate filming can take many forms, including smooth cinematic aerial shots outside
        showing an overview of a driveway, property, garden and perhaps pool, to fly-through drone
        tours showing each room, the features and layout as if you were a viewer. Using our
        specialist drones, we can fly from outside to inside (and back outside) your property. We
        can work with you as an estate agent or directly with you as a vendor.
      </p>
      <p className="mb-4">
        We can also offer more dynamic shots, especially if there are particular landmarks or areas
        of interest close to your property. For example, if your property is close to the sea, we
        can use FPV drones to wind along pathways, coasts and cliffs before revealing your house.
        This can make your video more instantly engaging before we get to show the beauty of your
        home – inside and out.
      </p>
      <p className="mb-4">
        Our real estate videos are often produced to music. These kind of specialised real estate
        tours are great at showing off a property from all angles, in the most concise yet engaging
        form available. They are great whether you are looking to sell, rent or promote your
        property for events.
      </p>
      <p className="mb-4">
        In addition to the videos we produce, we can also take amazing photos (which we can either
        take separately or capture stills from the video footage). These can be provided with your
        video to add to your marketing campaign.
      </p>
      <div className="mb-4">
        <iframe
          className="w-full h-[calc(100vw*9/16)]"
          src="https://www.youtube.com/embed/u7EAcN6DLQE?si=wbu59Wg4DXTb3j3X"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <p className="mb-4">
        If you would like us to film your property, or if you are an estate agent who would like to
        work with us, drop us a line at
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
        , call us on{" "}
        <img src={phone} className="w-32 h-5 inline-block align-text-bottom ml-1 mr-2" />
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

export default Real_estate;
