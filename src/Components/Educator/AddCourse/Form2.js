import React, { useState } from 'react'
import axios from 'axios';

const Form2 = () => {
  const url = "https://httpbin.org/post";
  const [data, setData] = useState({
    topic: "",
    appts: "",
    appte: "",
    date: "",


  })
  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      topic: data.topic,
      appts: data.appts,
      appte: data.appte,
      date: data.date,


    })
      .then(res => {
        console.log(res)
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata)

  }
  return (
    <div className="text-start w-96 ">
      <form  className=" text-purple-900 shadow-md shadow-purple-300 bg-white rounded  flex flex-col content-center mb-4 ">
      <h1 className=' text-center font-bold text-lg text-purple-500' >Add Schedule</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2 ">Topics:</label>
          <input
            value={data.topic}
            onChange={(e) => handle(e)}
            type="text" name="topic" id="topic" placeholder='Topics'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">Time Slot</label>
         <div className='flex gap-2 place-items-center'>
         <input
            value={data.appts}
            onChange={(e) => handle(e)}
            type="time" name="time" id="appts" placeholder='time'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <h1>To</h1>
          <input
            value={data.appte}
            onChange={(e) => handle(e)}
            type="time" name="time" id="appte" placeholder='time'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
         </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">Date:</label>
          <input
            value={data.date}
            onChange={(e) => handle(e)}
            type="date" name="date" id="date" placeholder='Date'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button  className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled >Add More</button>
        <br />

        <button  className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={submit}>Submit</button>


      </form>
    </div>
  )
}

export default Form2
