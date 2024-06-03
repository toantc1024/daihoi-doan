import React, { useEffect, useState } from "react";
import useTimeCountdown from "../../hook/useTimeCountdown";
import CountdownBackdrop from "../../assets/images/countdownBackdrop.png";
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
    <div className="p-4 w-full ">
      <div className="flex flex-col items-center py-8 w-full justify-center bg-red-400 rounded-2xl ">
        <div className=" grid text-shadow-lg grid-flow-col gap-5 text-center items-center auto-cols-max text-white ">
          {Object.keys(timeLeft).length > 0 &&
            Object.keys(timeLeft).map((interval, index) => (
              <>
                <div className="flex flex-col p-2 rounded-box">
                  <span className="countdown font-mono text-6xl">
                    <span style={{ "--value": timeLeft[interval] }}></span>
                  </span>
                  {/* {interval} */}
                </div>
                {index != Object.keys(timeLeft).length - 1 && (
                  <div className="text-6xl">{":"}</div>
                )}
              </>
            ))}
        </div>
        <div className="font-bold uppercase text-white flex flex-col items-center justify-center">
          <span>Hướng tới Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh</span>
          <span>
            Trường Đại Học Sư Phạm Kỹ Thuật TP. HCM Lần Thứ XXII, NHIỆM KỲ 2024
            - 2027
          </span>
        </div>

        <div>
          <div>15/06/2024</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
