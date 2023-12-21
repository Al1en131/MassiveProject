import React from "react";
import Navlist from "../navlist/Navlist";
import CaraPickup from "./cara_pickup/CaraPickup";
import SiapSampah from "./siapsampah/SiapSampah";
import Footer from "../footer/Footer";

const ServicePickup = () => {
  return (
    <>
      <Navlist />
      <SiapSampah />
      <CaraPickup />
      <Footer />
    </>
  );
};

export default ServicePickup;
