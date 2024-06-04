import React from "react";
import CardLayout from "../global/CardLayout";

const CapcutTemplate = () => {
  return (
    <CardLayout>
      <div className="bg-[#1977bc] h-auto">
        <div className="flex w-full items-center justify-center py-4 text-3xl font-bold text-white">
          <span>MẪU CAPCUT ĐẠI HỘI XXII</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"> 
          <div className="w-full sm:w-52 h-52 rounded-md bg-red-500 shadow-2xl flex items-center justify-center">
            <img
              className="w-32 h-32"
              src="https://i.ibb.co/F8q1b3h/Capcut.png"
              alt=""
            />
          </div>
          <div className="w-full sm:w-52 h-52 rounded-md bg-white shadow-2xl flex items-center justify-center">
            <img
              className="w-32 h-32"
              src="https://i.ibb.co/F8q1b3h/Capcut.png"
              alt=""
            />
          </div>
          <div className="w-full sm:w-52 h-52 rounded-md bg-red-500 shadow-2xl flex items-center justify-center">
            <img
              className="w-32 h-32"
              src="https://i.ibb.co/F8q1b3h/Capcut.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default CapcutTemplate;