import React from "react";
import a from "../../assets/team/img-team-steve-portrait.jpg";
import b from "../../assets/team/img-team-julian-portrait.webp";

const Meet_the_team = () => {
  return (
    <div className="bg-white px-8 rounded-lg pt-40">
      <h1 className="text-3xl font-bold mb-6">Meet the Team</h1>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="flex flex-col items-center">
          <img src={a} alt="Steve Jakab" className="w-[50%] max-w-full h-auto mb-4 rounded" />

          <h2 className="text-2xl font-semibold mb-2">Steve Jakab</h2>
          <p>
            Steve Jakab is the founder and technical brains behind Cinematic FPV, as well as being an avid
            film-maker, professional drone cinematographer and having the cinematic eye and imagination to
            envision and capture breath-taking and dynamic drone footage. He is absolutely passionate about
            drones, drone filming and the possibilities that having a camera that can go anywhere can bring.
            He has worked on many productions for film-making companies such as Bader Media Entertainment,
            various organisations creating bespoke videos, and also enjoys adding unique drone shots to films,
            and has created aerial and tracking content for films that have gone on to win prestigious awards,
            such as ‘The Killing of Ava Jukes’, which has won the Rohip award for the Best Europe Short Film.
          </p>

          <p className="pt-4">
            Not only does he make all the FPV drones used by Cinematic FPV, but he carefully designs each one
            with unique capabilities, mixing safety, weight class, power, flight time, smoothness and
            acrobatic ability. He has been building drones since 2019, and flying since 2016. He is fully
            licenced with the CAA (Civil Aviation Authority), and holds the following drone qualifications:
            DMARES, A2CoC, GVC, and A1/A3 Certificate for Europe. He has experience of the entire production
            process, and has created several films that have won awards at prestigious film festivals and his
            drone footage has been featured in numerous short films and documentaries as well as in the media.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={b} alt="Julian Austwick" className="w-[50%] max-w-full h-auto mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2">Julian Austwick</h2>
          <p>
            Julian is a seasoned film-maker, making professional films and videos since 2012. He has notable
            success and experience in making wedding, music, school, event and corporate videos, and since
            then has turned his hand to writing, directing, editing and acting in short films.
          </p>

          <p className="pt-4">
            Since 2018 he’s had numerous festival successes in differing roles, mainly directing and editing,
            with a number of short films including ‘Friends’, ‘The Wand’, ‘Flotsam’, ‘Justice’, ‘Gemma’s War’,
            and ‘The Studio’, a sitcom pilot for a six-episode web series.
          </p>

          <p className="pt-4">
            In 2020 he took on the role of Head of Production at Bader Media Entertainment CIC and was heavily
            involved in the ‘Thrash The Trash’ series, the set-up of the ‘Skills Workshop’ films and was
            Director Of Photography and Executive Producer for the company’s first feature production ‘The
            Shimian’, which is now available to watch on Amazon Prime and other streaming sites. He left Bader
            to carry on with his passions of working creatively to make films and videos that inspire, uplift,
            share stories and messages, and now shares his experience by being a key collaborator and valued
            team member at Cinematic FPV.
          </p>

          <p className="pt-4">
            He is a talented, thoughtful and creative filmmaker with vision, passion and ability to bring all
            the elements of film and video-making together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet_the_team;
