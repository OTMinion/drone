import { useState } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Legal from "./components/Legal";
import Cookies from "./components/Cookies";

const App = () => {
  const [showCookie, setShowCookie] = useState(false);

  const toggleCookie = () => {
    setShowCookie(!showCookie);
  };
  const [isCookiesVisible, setIsCookiesVisible] = useState(true);

  return (
    <div>
      <Cookies
        isShown={isCookiesVisible}
        onClose={() => setIsCookiesVisible(false)}
        onManage={toggleCookie} // Passing the toggleCookie function here
      />

      <div style={{ marginTop: isCookiesVisible ? "200px" : "0" }}>
        <NavBar />
        <Hero />
        <About />
        <Footer />
        <Legal showCookie={showCookie} toggleCookie={toggleCookie} />
      </div>
    </div>
  );
};

export default App;
