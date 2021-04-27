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

  useEffect(() => {
    if ( localStorage.getItem("eventList")){
      setEventList(JSON.parse(localStorage.getItem("eventList")));
  }
  },[]);

  useEffect(() => {
    localStorage.setItem("eventList", JSON.stringify(eventList));
  }, [eventList]);

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


  const deleteEvent = (id) => {
    setEventList(prevEventList => {
      return prevEventList.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className=" flex-shrink-0 m-5 md:w-[23rem] bg-red-700 py-10 px-7 rounded-lg ">
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
         <EventCountdown data={items} id={i} onDelete={deleteEvent}/>
         </React.Fragment>
         ))
         }
        </div>
      </div>
    </div>
  );
};

export default App;