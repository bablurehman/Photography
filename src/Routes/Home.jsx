import React from "react";
import Heros from "../Components/Hero/Heros";
import Trendings from "../Components/Trending/Trendings";
import Explores from "../Components/Explore/Explores";
import ExploreMore from "../Components/ExploreMore/ExploreMore";
import Abouts from "../Components/About/Abouts";
import Contacts from "../Components/Contact/Contacts";
import Awardss from "../Components/Awards/Awardss";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Heros />
      <Trendings />
      <Awardss />
      <Explores />
      <ExploreMore />
      <Abouts />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
