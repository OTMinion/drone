import { useState } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Legal from "./components/Legal";
import Cookies from "./components/Cookies";
import Workshop from "./components/menu/Workshop"; // Make sure the path is correct

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [showCookie, setShowCookie] = useState(false);

  const toggleCookie = () => {
    setShowCookie(!showCookie);
  };
  const [isCookiesVisible, setIsCookiesVisible] = useState(true);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Footer />
                <Legal showCookie={showCookie} toggleCookie={toggleCookie} />
                <Cookies
                  isShown={isCookiesVisible}
                  onClose={() => setIsCookiesVisible(false)}
                  onManage={toggleCookie} // Passing the toggleCookie function here
                />
              </>
            }
          />

          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
