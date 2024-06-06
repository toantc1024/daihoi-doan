import React from "react";
import CustomCarousel from "../components/HomePage/CustomCarousel";
import FrameChanging from "../components/HomePage/FrameChanging";
import Countdown from "../components/HomePage/Countdown";
import Letter from "../components/global/Letter";
import GroupSection from "../components/HomePage/GroupSection";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <CustomCarousel />
      <Countdown />
      <GroupSection />
      <FrameChanging />
      {/* <CapcutTemplate /> */}
      <Letter />
    </div>
  );
};

export default HomePage;
