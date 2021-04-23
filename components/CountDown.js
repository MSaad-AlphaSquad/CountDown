import React, { useState, useEffect } from "react";
import Form from "./Form";
import Timer from "./Timer";

const CountDown = () => {
    const [eventList , setEventList] = useState([]);
    

  const [event, setEvent] = useState({
    name: "",
    date: "",
  });

  const [timer, settimer] = useState({
    months: "0",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const [eventInfo, seteventInfo] = useState({
    name: "New Year",
    date: `${new Date().getFullYear() + 1}-01-01`,
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
    const countdown = setTimeout(() => {
      settimer(calculateTimeLeft());
    }, 1000);
    //clear timer upon unmounting
    return () => clearTimeout(countdown);
  });


  useEffect(() => {
      console.log(eventList)
  },[eventList]);

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    seteventInfo(event);
    setEventList((prevValue) => [...prevValue, event])
    setEvent({ name: "", date: ""});
    e.preventDefault();
  };

  const { months, days, hours, minutes, seconds } = timer;
  const timeUp = ((((months === days) === hours) === minutes) === seconds) === 0;
  const formatNum = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="m-32 w-[23rem] bg-gray-200 p-10 rounded-lg ">
          <Form
            onFormSubmit={onFormSubmit}
            name={event.name}
            onInputChange={onInputChange}
            date={event.date}
          />
         
          <div className="mt-10">
          {!timeUp && (
          
              eventList.map((items, i) => (
                 <div key={i}>
                 <p>{items.name}</p>
                 <Timer 
                months={formatNum(months)}
                days={formatNum(days)}
                hours={formatNum(hours)}
                minutes={formatNum(minutes)}
                seconds={formatNum(seconds)}
                />
                 </div>
             ))
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
