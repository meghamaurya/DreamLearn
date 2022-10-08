import axios from 'axios'
import React, { useState } from 'react'

const Form1A = () => {
  const url = "https://httpbin.org/post";
  const [data, setData] = useState({
    image: "",
    

  })

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      image: data.image
    }).then(res => {
      console.log(res)
    })
  }
  function handleSubmit(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata)

  }
  return (
    <div className="text-start w-96 ">
      <form onSubmit={(e) => submit(e)}  className=" text-purple-900 shadow-md shadow-purple-300 bg-white rounded  flex flex-col content-center mb-4 ">
      <div className="mb-4">
        <input type="file" onChange={(e) => handleSubmit(e)} value={data.image}
         className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  text-purple-900 shadow-md shadow-purple-300" />
         {/* <img src={data.image} alt="" /> */}
         </div>
         <div className="mb-4">
        <button className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='upload' >Upload Image</button>
        </div>
      </form>
    </div>
  )
}

export default Form1A


