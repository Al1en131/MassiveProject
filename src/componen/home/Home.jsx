import React from "react";
import Navlist from "../navlist/Navlist";
import Hero from "../hero/Hero";
import About from "../about/About";
import Service from "../service/Service";
import Mision from "../mision/Mision";
import Footer from "../footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navlist />
      <Hero />
      <About />
      <Service />
      <Mision />
      <Footer />
    </div>
  );
};

export default Home;
