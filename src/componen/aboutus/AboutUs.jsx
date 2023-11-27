import React from "react";
import Navlist from "../navlist/Navlist";
import Footer from "../footer/Footer";
import Hero from "./hero/Hero";
import HeroAbout from "./heroabout/HeroAbout";
import ChooseUs from "./chooseus/ChooseUs";
import OurTeams from "./ourteams/OurTeams";

export const AboutUs = () => {
  return (
    <>
      <Navlist />
      <Hero />
      <HeroAbout />
      <ChooseUs />
      <OurTeams />
      <Footer />
    </>
  );
};

export default AboutUs;
