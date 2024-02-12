import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import About from "./components/About";
import React, { useEffect, useState } from "react";
import Footer from "./components/common/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({ offset: 0, duration: 2000 })
    window.addEventListener('load', Aos.refresh)
  }, [])

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
