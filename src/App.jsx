import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutAnimated from "./components/AboutAnimated";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <AboutAnimated />
      <Services/>
      <ContactPage />
      <Footer />
    </>
  );
};

export default App;
