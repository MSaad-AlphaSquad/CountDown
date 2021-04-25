import React from 'react';


const Form = ({name, onFormSubmit, date, onInputChange}) => {
    return (<div>
        <form onSubmit={onFormSubmit} className="grid grid-cols-1">
        <label className="mb-2">Enter Event Name</label>
        <input autoComplete="off" required value={name} name='name' onChange={onInputChange} className="mb-3"/>
        <label className="mb-2">Enter Data</label>
        <input className="mb-3" required type="date" value={date} name='date' onChange={onInputChange} name="date"/>
        <button type="submit">Start</button>
        
    </form>
    <hr className="border-1 mx-2 my-10 border-gray-400 "></hr>
    </div>
    )
}


export default Form;