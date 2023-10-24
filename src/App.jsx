import { useState } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Legal from "./components/Legal";
import Cookies from "./components/Cookies";

// menu items link
import Workshop from "./components/courses/Workshop"; // Make sure the path is correct
import About from "./components/courses/About";
import Meet_the_team from "./components/courses/Meet_the_team";
import Fpv_drone_filming from "./components/courses/Fpv_drone_filming";
import Traditional_drone_filming from "./components/courses/Traditional_drone_filming";
import Contact from "./components/courses/Contact";
import Film_and_tv from "./components/courses/Film_and_tv";
import Drone_tours from "./components/courses/Drone_tours";
import Safety from "./components/courses/Safety";
import Production from "./components/courses/Production";
import Events from "./components/courses/Events";
import Real_estate from "./components/courses/Real_estate";
import Gallery from "./components/courses/Gallery";
import Photography from "./components/courses/Photography";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TbH1 } from "react-icons/tb";

const App = () => {
  const [showCookie, setShowCookie] = useState(false);

  const toggleCookie = () => {
    setShowCookie(!showCookie);
  };
  const [isCookiesVisible, setIsCookiesVisible] = useState(true);

  return (
    <Router>
      <div className="font-montserrat">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Content />

                <Cookies
                  isShown={isCookiesVisible}
                  onClose={() => setIsCookiesVisible(false)}
                  onManage={toggleCookie} // Passing the toggleCookie function here
                />
              </>
            }
          />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet_the_team" element={<Meet_the_team />} />
          <Route path="/fpv_drone_filming" element={<Fpv_drone_filming />} />
          <Route path="/traditional_drone_filming" element={<Traditional_drone_filming />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/film_and_tv" element={<Film_and_tv />} />
          <Route path="/drone_tours" element={<Drone_tours />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/production" element={<Production />} />
          <Route path="/events" element={<Events />} />
          <Route path="/real_estate" element={<Real_estate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer />
        <Legal showCookie={showCookie} toggleCookie={toggleCookie} />
      </div>
    </Router>
  );
};

export default App;
