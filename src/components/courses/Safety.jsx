import a from "../../assets/safety/img-drone-nakex.jpg";
import b from "../../assets/safety/img-safety-high-vis.jpg";
import c from "../../assets/safety/img-safety-risk-assessment.jpg";
import { useState } from "react";

const Safety = () => {
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
  return (
    <div className="bg-white px-8 rounded-lg  pt-40">
      <h1 className="text-3xl font-bold mb-6">Safety</h1>
      <p className="mb-4">
        Safety is paramount at Cinematic FPV, and we take it very seriously. While we want to provide the most
        stunning, dynamic and beautiful shots possible, we want to make the experience of getting those shots
        safe and comfortable for all the people involved.
      </p>
      <p className="mb-4">
        We achieve this objective in numerous ways, including researching and building our own drones that fit
        neatly into very lightweight categories while still giving high performance in terms of flight
        characteristics and filming quality. In addition, any drones we fly close to people will be fitted
        with propeller guards, keeping objects and people safe. By keeping drones ultra-light, small and
        fitted with propeller guards, we mitigate almost all damage and injury risk to objects and people.
      </p>
      <p className="mb-4">
        Further to this, we conduct full risk assessments and mitigate further sources of risk. We usually
        have a walkthrough of any areas to be filmed, noting any hazards and working around them or negating
        them. And when it comes to the day of filming, we give safety briefings too all people who will be
        involved on the shoot.
      </p>
      <p className="mb-4">
        In addition to this, we have many years of experience flying, working in public environments, and are
        very highly qualified. We are happy to talk through all filming situations and locations and work with
        you to ensure you get the best possible shots while maintaining the highest levels of safety.
      </p>
      <div className="grid md:grid-cols-3 text-center gap-8">
        <div className="flex flex-col">
          <div className="relative group mb-4 w-full h-64 cursor-pointer" onClick={toggle1}>
            <img
              src={a}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

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
          <div className="relative mb-4 w-full h-64 overflow-hidden">
            <img
              src={b}
              alt="On Set for the film The Killing of Ava Jukes"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic2 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle2}
            >
              <img
                src={b}
                alt="On Set for the film The Killing of Ava Jukes"
                className="md:w-[70%] md:h-[80%]"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col relative group cursor-pointer" onClick={toggle3}>
          <div className="relative mb-4 w-full h-64 overflow-hidden">
            <img
              src={c}
              alt="On Set for the film Pawn and Kings"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="bg-black text-white px-3 py-1 rounded">Click to enlarge</span>
            </div>
          </div>

          {showPic3 && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={toggle3}
            >
              <img src={c} alt="On Set for the film Pawn and Kings" className="md:w-[80%] md:h-[80%]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Safety;
