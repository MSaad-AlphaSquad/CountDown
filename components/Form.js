import React from 'react';


const Form = ({name, onFormSubmit, date, onInputChange, warning}) => {
    return (<div>
        <form onSubmit={onFormSubmit} className="grid grid-cols-1">
        <label className="mb-2 text-white">Enter Event Name</label>
        <input className="mb-3 rounded-lg px-2 focus:outline-none focus:ring " autoComplete="off" required value={name} name='name' onChange={onInputChange} />
        <label className="mb-2 text-white">Enter Date</label>
        <input className="mb-1 rounded-lg px-2 focus:outline-none focus:ring " required type="datetime-local" value={date} name='date' onChange={onInputChange}/>
        {warning && <label className="text-sm text-yellow-200">Please enter correct date.</label>}
        <button className="my-3 active:bg-white active:text-black text-white rounded-lg focus:outline-none border-2 border-white" type="submit">Start</button>
        
    </form>
    <hr className="border-1 mx-2 my-10 border-gray-200 "></hr>
    </div>
    )
}


export default Form;