import axios from 'axios'
import React, { useState } from 'react'

const Form1 = () => {
  const url = "https://httpbin.org/post";
  const [data, setData] = useState({
    video: "",

    

  })
  // const [onSubmit,setOnSubmit]=useState(false)

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      video: data.video
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
    <div className="place-content-center w-96 ">
      <form onSubmit={(e) => submit(e)} >
       <div className="mb-4">
        <input type="file" onChange={(e) => handleSubmit(e)} value={data.video}
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
         </div>
        <div className="mb-4">
        <button className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  >Upload Video</button>
        </div>
      </form>
    </div>
  )
}

export default Form1

