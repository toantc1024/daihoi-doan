import React, { useEffect, useState } from "react";
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import BACKDROP from "../../assets/images/backdropCountdown.png";
import CardLayout from "../global/CardLayout";

const Countdown = () => {
  // Function to calculate time left until the deadline
  const calculateTimeLeft = (deadline) => {
    const countDownDate = new Date(deadline).getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const FINAL_DATE = "June 4, 2024 23:59:59";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(FINAL_DATE));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(FINAL_DATE));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, FINAL_DATE]);

  return (
    <CardLayout>
      <div
        className="p-6 bg-center bg-cover flex flex-col items-center w-full justify-center gap-4"
        style={{ backgroundImage: `url(${BACKDROP})` }}
      >
        <div
          className="grid text-shadow-sm text-5xl sm:text-8xl font-bold grid-flow-col gap-2 text-center items-center auto-cols-max text-white
          md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: "#000000b0 2px 2px 5px", 
                   
          }}
        >
          {Object.keys(timeLeft).length > 0 &&
            Object.keys(timeLeft).map((interval, index) => (
              <React.Fragment key={interval}>
                <div className="flex flex-col rounded-box">
                  <span className="countdown">
                    <span style={{ "--value": timeLeft[interval] }}></span>
                  </span>
                </div>
                {index !== Object.keys(timeLeft).length - 1 && <div>:</div>}
              </React.Fragment>
            ))}
        </div>
        <div className="font-bold uppercase text-white text-center text-lg sm:text-xl mt-4 mb-4">
          <span>Hướng tới Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh</span>
          <span>Trường Đại Học Sư Phạm Kỹ Thuật TP. HCM Lần Thứ XXII, NHIỆM KỲ 2024 - 2027</span>
        </div>

        <div className="flex flex-col items-center w-full gap-4 font-bold text-white text-center">
          <div className="flex gap-2 items-center text-lg sm:text-3xl">
            <FaCalendar />
            <span>15/06/2024</span>
          </div>
          <div className="flex gap-2 items-center text-lg sm:text-3xl">
            <FaLocationDot />
            <span>Hội trường lớn khu A</span>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Countdown;
