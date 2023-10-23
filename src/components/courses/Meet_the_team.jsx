import React from "react";
import a from "../../assets/team/img-team-steve-portrait.jpg";
import b from "../../assets/team/img-team-julian-portrait.jpg";

const Meet_the_team = () => {
  return (
    <div className="bg-white px-8 rounded-lg pt-40">
      <h1 className="text-3xl font-bold mb-6">Meet the Team</h1>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-center">
          <img src={a} alt="Steve Jakab" className="w-60 h-60 mb-4 rounded " />
          <h2 className="text-2xl font-semibold mb-2">Steve Jakab</h2>
          <p className="text-center">
            Steve Jakab is the founder and technical brains behind Cinematic FPV as well as being an
            avid film-maker, professional drone cinematographer and having the cinematic eye and
            imagination to envision and capture breath-taking and dynamic drone footage. He is
            absolutely passionate about drones, drone filming and the possibilities that having a
            camera that can go anywhere can bring. He has been flying since 2016, is fully licenced
            with the CAA (Civil Aviation Authority), and holds the following drone qualifications:
            DMARES, A2CoC, GVC, and A1/A3 Certificate for Europe. He has created several films that
            have won awards at prestigious film festivals and his drone footage has been featured in
            numerous short films and documentaries.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={b} alt="Julian Austwick" className="w-60 h-60 mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2">Julian Austwick</h2>
          <p className="text-center">
            Julian is a seasoned film-maker, making professional films and videos since 2012. He has
            notable success and experience in making wedding, music, school, event and corporate
            videos, and since then has turned his hand to writing, directing, editing and acting in
            short films. Since 2018 he’s had numerous festival successes in differing roles, mainly
            directing and editing, with a number of short films including ‘Friends’, ‘The Wand’,
            ‘Flotsam’, ‘Justice’, ‘Gemma’s War’, and ‘The Studio’, a sitcom pilot for a six-episode
            web series. In 2020 he took on the role of Head of Production at Bader Media
            Entertainment CIC and was heavily involved in the ‘Thrash The Trash’ series, the set-up
            of the ‘Skills Workshop’ films and was Director Of Photography and Executive Producer
            for the company’s first feature production ‘The Shimian’, which is now available to
            watch on Amazon Prime and other streaming sites. He left Bader to carry on with his
            passions of working creatively to make films and videos that inspire, uplift, share
            stories and messages, and now shares his experience by being a key collaborator and
            valued team member at Cinematic FPV. He is a talented, thoughtful and creative filmmaker
            with vision, passion and ability to bring all the elements of film and video-making
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet_the_team;
