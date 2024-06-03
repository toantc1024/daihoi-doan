import React from "react";
import CustomCarousel from "../components/HomePage/CustomCarousel";
import FrameChanging from "../components/HomePage/FrameChanging";
import Countdown from "../components/HomePage/Countdown";
import CapcutTemplate from "../components/HomePage/CapcutTemplate";
import Letter from "../components/HomePage/Letter";

const HomePage = () => {
  return (
    <div className="h-screen ">
      <CustomCarousel />
      <Countdown />
      <FrameChanging />
      <CapcutTemplate />
      <Letter />
    </div>
  );
};

export default HomePage;
