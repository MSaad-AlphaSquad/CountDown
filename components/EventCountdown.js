import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const EventCountdown = ({ data }) => {
  const [timer, settimer] = useState({
    months: "0",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const [eventInfo, seteventInfo] = useState({
    name: "",
    date: "",
  });

  const calculateTimeLeft = () => {
    const timeLeft = +new Date(eventInfo.date) - new Date();
    return {
      months: Math.floor(timeLeft / (24 * 60 * 60 * 1000) / 30),
      days: Math.floor(timeLeft / (24 * 60 * 60 * 1000)),
      hours: Math.floor((timeLeft / (60 * 60 * 1000)) % 24),
      minutes: Math.floor((timeLeft / (60 * 1000)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  useEffect(() => {
    seteventInfo(data);
  }, [data]);

  useEffect(() => {
    const countdown = setTimeout(() => {
      settimer(calculateTimeLeft());
    }, 1000);
    //clear timer upon unmounting
    return () => clearTimeout(countdown);
  });

  const { months, days, hours, minutes, seconds } = timer;
  const timeUp =  ((((months === days) === hours) === minutes) === seconds) === 0;
  const formatNum = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="mt-10">
      {!timeUp && (
        <div>
          <p className="text-white">{eventInfo.name}</p>
          <Timer
            months={formatNum(months)}
            days={formatNum(days)}
            hours={formatNum(hours)}
            minutes={formatNum(minutes)}
            seconds={formatNum(seconds)}
          />
          {timeUp && (
            <h2 style={{ color: "#ffc0cb" }}>
              Yes, We Made it! Happy {eventInfo.name} day!
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCountdown;
