import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const EventCountdown = ({ data, id, onDelete }) => {
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

const handleClick = () => {
    onDelete(id);
}


  return (
    <div className="mt-10 relative">
      {!timeUp && (
        <div>
          <p className="text-white mb-1 text-lg">{eventInfo.name}</p>
          <Timer
            months={formatNum(months)}
            days={formatNum(days)}
            hours={formatNum(hours)}
            minutes={formatNum(minutes)}
            seconds={formatNum(seconds)}
          />
          {timeUp && (
            <h2 className="text-white">
              Yes, We Made it! Happy {eventInfo.name} day!
            </h2>
          )}
          <button  className="absolute top-0 right-1 text-white focus:outline-none" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button>
          <hr className="border-1 mx-2 my-10 border-gray-200 "></hr>
        </div>
      )}
    </div>
  );
};

export default EventCountdown;
