import a from "../../assets/services/img-drone-apex.jpg";
import b from "../../assets/services/img-drone-nakex (1).jpg";

const Fpv_drone_filming = () => {
  return (
    <div className="px-8 pt-40  min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">FPV Drone Filming</h1>

      <img src={a} alt="FPV Drone" className="w-full h-full rounded-md shadow-lg mb-4" />

      <p className="mb-4">
        FPV drone filming (or FPV for short) is new, exciting, and is used to get truly breathtaking and
        inspiring shots, not possible in any other way.
      </p>
      <p className="mb-4">
        FPV stands for First Person View; the drone operator sees exactly what the drone sees as if they were
        the drone. This allows for the highest precision flying, filming and flexibility to get the most epic
        shots possible.
      </p>
      <p className="mb-4">
        While FPV drones share some similarities with traditional drones, they come from an entirely different
        lineage of racing drones, which makes them behave very differently. FPV filming drones have the
        capability to be very fast, extremely agile, yet very safe, and fly in ways that traditional drones
        can’t. They can flip, roll, drive, and fly through tiny gaps but also have the ability to fly very
        slowly, negotiate complex territories, fly in very close proximity to objects, and feel much freer
        during flight to capture organic shots that feel that the camera could go anywhere and be positioned
        in any way at any time. They also give a flowy feel to footage which is engaging and dynamic; they
        help to take the viewer on a journey.
      </p>
      <p className="mb-4">
        Unlike traditional drones that have a lot of intelligent flight modes and features, FPV drones are
        flown fully manually and built to support this style of flying. When combined with a camera, the
        footage is exceptional, captivating and the variety of shots capable of being captured is huge.
        Therefore, FPV drones when combined with a highly skilled operator allow for some of the most epic and
        impressive shots to be taken today.
      </p>
      <p className="mb-4">
        Here at Cinematic FPV, we make extensive use of FPV drones. We have 9 purpose-built drones that
        provide a wide range of shooting possibilities, maximising performance using the best and latest
        technology while providing the highest levels of safety. We have researched all the technology
        extensively, spent considerable time designing and refining the drones, making each one have unique
        characteristics while providing redundancy to other drones in the same category.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="mt-6">
          <p className="mb-4">
            The safest drones are the smallest and lightest and easily fit on the palm of your hand. In fact,
            we have 8 drones (including 2 training drones) that can fly in the sub 250 gram category, allowing
            for the greatest levels of freedom provided by the CAA (civil aviation authority). And yet, these
            small, light drones are capable of extraordinary feats when it comes to flying and filming. We
            also use propeller guards when flying close to people and objects, highlighting safety as a key
            element to all we do.
          </p>

          <p className="mb-4">Our FPV drones can be used in a variety of different ways, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Creating very dynamic and engaging footage – perfect for social media</li>
            <li>Flying through complex terrain, close to objects etc., both indoors and out</li>
            <li>
              Giving ‘virtual tours’ of places, such as pubs, restaurants, activity and garden centres etc.
            </li>
            <li>Following subjects, such as fast-moving cars, or actors on a film set</li>
          </ul>
          <p className="mb-4">
            The kinds of shots we can obtain are only limited by imagination; come and talk with us about any
            video needs you may have.
          </p>
        </div>
        <div className="flex flex-col items-center mb-6">
          <img src={b} alt="Cinewhoop Drone" className="w-full h-auto rounded-md shadow-lg mb-4" />
          <p className="text-center">A small ‘cinewhoop’ drone for safely filming around people</p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c9ZxwBgjTDo?si=H7Qa4_zCTvKDHgyZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Fpv_drone_filming;
