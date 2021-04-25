import React from "react";

const Timer = ({months, days, hours, minutes, seconds}) => {
  return (
      <div>
    <div className="flex flex-row space-x-5 text-xs text-white">
      <div>
        <h1>{months}</h1>
        <p>months</p>
      </div>
      <div>
        <h1>{days}</h1>
        <p>days</p>
      </div>
      <div>
        <h1>{hours}</h1>
        <p>hours</p>
      </div>
      <div>
        <h1>{minutes}</h1>
        <p>minutes</p>
      </div>
      <div>
        <h1>{seconds}</h1>
        <p>seconds</p>
      </div>
    </div>
    <hr className="border-1 mx-2 my-10 border-gray-200 "></hr>
    </div>
  );
};


export default Timer;
