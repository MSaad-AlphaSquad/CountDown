import React, { useState, useEffect } from "react";
import Form from "./Form";
import EventCountdown from "./EventCountdown";

const CountDown = () => {
    const [eventList , setEventList] = useState([]);
    

  const [event, setEvent] = useState({
    name: "",
    date: "",
  });

  useEffect(() => {
      console.log(eventList)
  },[eventList]);

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    setEventList((prevValue) => [...prevValue, event])
    setEvent({ name: "", date: ""});
    e.preventDefault();
  };

  
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className=" flex-shrink-0  m-32 md:w-[23rem] bg-gray-200 p-10 rounded-lg ">
          <Form
            onFormSubmit={onFormSubmit}
            name={event.name}
            onInputChange={onInputChange}
            date={event.date}
          />
         { eventList.map((items,i) => (
           <React.Fragment key={i}>
         <EventCountdown data={items}/>
         </React.Fragment>
         ))
         }
        </div>
      </div>
    </div>
  );
};

export default CountDown;