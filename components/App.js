import React, { useState, useEffect } from "react";
import Form from "./Form";
import EventCountdown from "./EventCountdown";

const App = () => {
    const [eventList , setEventList] = useState([]);
    const [warning , setWarning] = useState(false);

  const [event, setEvent] = useState({
    name: "",
    date: "",
  });

  // useEffect(() => {
  //     console.log(eventList)
  // },[eventList]);

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    if (new Date(event.date) >= new Date()){
    setEventList((prevValue) => [...prevValue, event])
    setWarning(false)
  } else {
    setWarning(true);    
  }
  setEvent({ name: "", date: ""});
    e.preventDefault();
  };

  
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className=" flex-shrink-0  m-32 md:w-[23rem] bg-red-700 p-10 rounded-lg ">
        <h1 className="text-center text-2xl mb-7 text-white">Countdown</h1> 
          <Form
            onFormSubmit={onFormSubmit}
            name={event.name}
            onInputChange={onInputChange}
            date={event.date}
            warning={warning}
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

export default App;