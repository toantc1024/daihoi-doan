import React from "react";
import LetterCard from "./LetterCard";
import { Card } from "antd";
const Letter = () => {
  return (
    <div
      className={
        "relative flex   flex-col gap-4 py-8 items-center justify-center  bg-[#1977bc] "
      }
    >
      {" "}
      <div className="text-xl md:text-2xl lg:text-5xl text-white  py-4 font-bold">
        <span>LỜI CHÚC MỪNG ĐẠI HỘI XXII</span>
        <LetterCard />
      </div>
    </div>
  );
};

export default Letter;
