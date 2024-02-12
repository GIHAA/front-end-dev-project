import Landing from "./components/Landing";
import Navbar from "./components/common/Navbar";
import About from "./components/About";
import React, { useEffect } from "react";
import Footer from "./components/common/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({ offset: 0, duration: 1300 })
    window.addEventListener('load', Aos.refresh)
  }, [])

  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Footer />
    </div>
  );
};

export default App;
