import React from "react";
import CardLayout from "../global/CardLayout";
import Frame from "../FrameChanging/frame";
import CHIBI_MALE from "../../assets/images/chibi/male.png";
import CHIBI_FEMALE from "../../assets/images/chibi/female.png";
const FrameChanging = () => {
  return (
    <CardLayout
      className={
        "relative flex   flex-col gap-4 py-8 items-center justify-center  bg-[#e12351]"
      }
    >
      <img
        src={CHIBI_FEMALE}
        className=" w-[50px] sm:w-[100px] md:w-[200px] lg:w-[300px] absolute right-0 bottom-[2rem]"
      ></img>{" "}
      <img
        src={CHIBI_MALE}
        className=" w-[50px] sm:w-[100px] md:w-[200px] lg:w-[300px] absolute left-0 bottom-[2rem]"
      ></img>{" "}
      <div className="text-xl md:text-2xl lg:text-5xl text-white  py-4 font-bold">
        <span>ĐỔI FRAME HƯỚNG VỀ ĐẠI HỘI XXII</span>
      </div>
      <Frame />
    </CardLayout>
  );
};

export default FrameChanging;
