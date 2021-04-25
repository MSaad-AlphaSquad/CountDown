import React,{useState, useEffect} from 'react';

export const useCountDown = () => {
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
        const eventName = eventInfo.name;
      return [timer, eventName , seteventInfo]
}