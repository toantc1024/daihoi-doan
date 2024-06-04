import React, { useEffect, useState } from "react";
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import useTimeCountdown from "../../hook/useTimeCountdown";
import BACKDROP from "../../assets/images//CountDownBackdrop.png";
import CardLayout from "../global/CardLayout";
const Countdown = () => {
  // deadline format: "Jan 5, 2030 15:37:25"
  const calculateTimeLeft = (deadline) => {
    let year = new Date().getFullYear();

    var countDownDate = new Date(deadline).getTime();
    var now = new Date().getTime();
    let difference = countDownDate - now;
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

  // deadline format: "Jan 5, 2030 15:37:25"
  let FINAL_DATE = "June 4, 2024 23:59:59";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(FINAL_DATE));
  const [timerComponents, setTimerComponents] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(FINAL_DATE));
    }, 1000);
  });
  return (
    <CardLayout>
      <div
        className="p-6 bg-center bg-contain flex flex-col items-center w-full   justify-center  gap-0"
        style={{ backgroundImage: `url(${BACKDROP})` }}
      >
        <div
          className=" grid text-shadow-sm text-8xl font-bold grid-flow-col gap-0 text-center items-center auto-cols-max  text-white "
          style={{ textShadow: "#000000b0 2px 2px 5px" }}
        >
          {Object.keys(timeLeft).length > 0 &&
            Object.keys(timeLeft).map((interval, index) => (
              <>
                <div className="flex flex-col  rounded-box">
                  <span className="countdown">
                    <span style={{ "--value": timeLeft[interval] }}></span>
                  </span>
                  {/* {interval} */}
                </div>
                {index != Object.keys(timeLeft).length - 1 && (
                  <div className="">{":"}</div>
                )}
              </>
            ))}
        </div>
        <div className="font-bold uppercase text-white flex flex-col items-center justify-center text-xl mt-4 mb-4">
          <span>Hướng tới Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh</span>
          <span>
            Trường Đại Học Sư Phạm Kỹ Thuật TP. HCM Lần Thứ XXII, NHIỆM KỲ 2024
            - 2027
          </span>
        </div>

        <div className="uppercase text-5xl flex justify-center w-full gap-16 font-bold text-white">
          <div className="flex gap-2">
            <FaCalendar />
            15/06/2024
          </div>
          <div className="flex gap-2 ">
            <FaLocationDot />
            Hội trường lớn khu A
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Countdown;
