import React from "react";
import Navlist from "../navlist/Navlist";
import HeroPage from "./heroEdu/HeroEdu";
import TextAccordions from "./accordions/TextAccordions";
import AccordionPage from "./accordions/AccordionPage";
import Footer from "../footer/Footer";

const Edu = () => {
  return (
    <>
      <Navlist />
      <HeroPage />
      <TextAccordions />
      <AccordionPage />
      <Footer />
    </>
  );
};

export default Edu;
