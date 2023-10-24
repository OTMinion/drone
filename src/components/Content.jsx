import { Link } from "react-router-dom";
import coverdrone from "../assets/coverdrone.webp";
import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.webp";
import client3 from "../assets/client3.webp";
import client4 from "../assets/client4.webp";
import client5 from "../assets/client5.webp";
import client6 from "../assets/client6.webp";
import client7 from "../assets/client7.webp";

const Content = () => {
  return (
    <div>
      <hr className="border-t border-gray-400 my-10 w-[85%] mx-auto" />

      {/* ABOUT  */}
      <div className="text-center w-[80%] mx-auto text-gray-600 text-md font-light">
        <p className="mt-5">
          Hi there! Are you ready for some aerial footage to sky rocket your message or brand? Our
          aerial filming services can take you to giddy new heights by using cutting edge drone
          videography to make your videos stand out from the rest. Whether you want a promo video
          for your brand, or attention grabbing shots for social media, we’re here to help. Let’s
          make your vision come to life by utilising our proprietary technology, vast experience,
          amazing skills and passion to create something truly original and inspiring.
        </p>

        <p className="my-10">
          With Cinematic FPV, you’re in safe hands. We are fully insured to fly safely in UK and
          Europe, with the highest levels of qualifications possible and are fully registered with
          the CAA (Civil Aviation Authority).
        </p>

        <p>
          Whatever kind of shots you’re after, we can provide beautiful, dynamic and head-turning
          footage that will amaze you, so have a chat with us and see how we can help.
        </p>
      </div>

      
      {/* BLACK SECTION */}
      <div className="bg-black my-10 h-auto">
        <div className="pt-5 pb-10">
          <h1 className="text-center text-white text-6xl font-bold">THE SKY’S THE LIMIT</h1>
          <p className="text-center text-gray-600 text-lg pb-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <iframe
            // width="1120"
            // height="630"
            src="https://www.youtube.com/embed/pmJImae03Qc?si=LuJLozE73y7_KTr9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true"
            className="mx-auto w-[80%] h-[80%] md:w-[1120px] md:h-[630px]"></iframe>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="flex md:space-x-4 md:px-16 flex-col md:space-y-0 md:flex-row ">
        <div className="flex-1 px-5">
          <h1 className="text-4xl font-light text-gray-400">DRONE VIDEOGRAPHY SERVICES</h1>
          <h2 className="text-4xl ">THE SKY'S THE LIMIT</h2>

          <p className="py-5">
            Cinematic FPV is a specialist Drone filming organisation based in Birmingham with
            expertise that includes unrivalled drone videography and photography services.
          </p>

          <p className="pb-5">
            Cinematic FPV offers a wide range of videography services that includes:
          </p>

          <div className="pl-5 space-y-1">
            <li>Drone filming in and around Birmingham, the UK and Europe</li>
            <li>Aerial Filming for TV and Film</li>
            <li>Drone Photography</li>
          </div>

          <div className="pt-5 pb-10  pl-20">
            <button className="cursor-pointer border border-gray-400 rounded-lg px-5 py-3 bg-black text-white">
              Contact Us
            </button>
          </div>

          <div>
            <img src={coverdrone} className="h-16" />
          </div>
        </div>

        <div className="flex-1 px-5">
          <p>
            We specialise in using the best, cutting edge technology, from 4K camera systems,
            optimised HDR imagery, gyro-based stabilisation, up to 48 megapixel still images making
            our unmanned aerial vehicles (UAVs) an invaluable asset to your projects.
          </p>

          <p className="py-5">
            Our clients have used our aerial drone photography, filming and video services for a
            wide variety operations:
          </p>

          <div className="pl-5 space-y-1">
            <li>
              Aerial corporate videos for advertising and promotion on their websites and Social
              Media platforms
            </li>
            <li>Aerial drone photography for Estate Agents</li>
            <li>Commercial property aerial photography</li>
            <li>Drone filming of events and sports</li>
            <li>Tourism, travel and hotel aerial photography and video</li>
            <li>Indoor aerial videography</li>
            <li>Night photography and filming</li>
          </div>

          <p className="py-5">
            Using our proprietary drone designs as well as specially chosen commercial drones, we
            are permitted to fly in cities, indoors, and over people – safely. We are fully CAA
            licensed and approved and insured to high levels of cover to deliver breathtaking
            footage for your projects.
          </p>

          <p>
            We are also permitted to fly in cities, at night and indoors as we not only have the
            various CAA and insurance approvals but we also have the specialised FPV and Commercial
            drones available to deliver the project.
          </p>
        </div>

        <div className="flex-1 px-5">
          <p>
            We specialize in cinematic drone videography, catering to diverse needs: be it{" "}
            <span className="font-bold">film productions</span>,{" "}
            <span className="font-bold">real estate </span>
            highlights, or immersive <span className="font-bold">drone tours</span>. Elevate your
            visuals with our expertise.
          </p>
          <div>
            <h1 className="text-center font-bold text-2xl mt-3">FILM PRODUCTION</h1>

            <iframe
              width="330"
              height="230"
              src="https://www.youtube.com/embed/pmJImae03Qc?si=LuJLozE73y7_KTr9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"></iframe>
          </div>

          <div className="pt-4">
            <h1 className="text-center font-bold text-2xl">REAL ESTATE</h1>
            <iframe
              width="330"
              height="230"
              src="https://www.youtube.com/embed/yjG76b70Lbo?si=hi0i7aYD45BDxbTP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"></iframe>
          </div>

          <div className="pt-4">
            <h1 className="text-center font-bold text-2xl">DRONE TOURS</h1>
            <iframe
              width="330"
              height="230"
              src="https://www.youtube.com/embed/uED0dRTZJpw?si=cWrJyq1LvAwEivlQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="true"></iframe>
          </div>
        </div>
      </div>

      {/* OUR ClIENTS */}
      <div>
        <div className="flex mt-5">
          <h1 className="text-4xl md:ml-40 ml-5 font-light text-gray-500">
            OUR <span className="font-normal text-gray-950">CLIENTS</span>
          </h1>
          <hr className="border-t border-gray-400 w-[40%] md:w-[57%] my-auto md:ml-10 mr-10 md:mr-0" />
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto w-4/5 mt-5">
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client3} alt="Description 3" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client2} alt="Description 2" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client1} alt="Description 1" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client4} alt="Description 4" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client5} alt="Description 5" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client7} alt="Description 7" className="max-h-full max-w-full" />
            </div>
            <div className="w-32 h-32 md:w-52 md:h-40 bg-white flex items-center justify-center">
              <img src={client6} alt="Description 6" className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* THE SKY THE LIMIT */}
      <div className="text-center mt-16 ">
        <h1 className="text-3xl md:text-5xl">THE SKY'S THE LIMIT</h1>

        <div className="flex  grid-cols-3 w-4/5 mx-auto mt-16 gap-14 md:flex-row flex-col">
          <div>
            <h1 className="text-lg">COMPLETE DRONE FILMING SERVICE</h1>
            <p className="text-gray-400 mt-3 text-left px-6">
              Briefing, planning, filming, and editing all completed in one place to make the
              process smooth for clients
            </p>
          </div>
          <div>
            <h1 className="text-lg ">ALWAYS ACCESSIBLE TO OUR CLIENTS</h1>
            <p className="text-gray-400 mt-3 text-left px-6">
              We’re always available for our clients from planning, filming and editing, and we’re
              always communicating.
            </p>
          </div>
          <div>
            <h1 className="text-lg">CAA QUALIFIED WITH PUBLIC LIABILITY INSURANCE</h1>
            <p className="text-gray-400 mt-3 text-left px-6">
              Our qualifications, insurance and experience ensures you have complete peace of mind
              while we’re filming on site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
