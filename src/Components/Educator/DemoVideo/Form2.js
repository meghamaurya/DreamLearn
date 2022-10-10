import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EducatorService from '../../Auth/educator.service';
const Form2 = (props) => {
  const navigate = useNavigate();
  console.log(props, "videoInput")

  const [data, setData] = useState({
    title: "",
    instrument: "",
    video: null,

  });
  const [formSubmit, setFormSubmit] = useState(false);
  console.log(data)
  function handleSubmit(e) {
    e.preventDefault();

    setFormSubmit(false)
    let userDetail = new FormData();
    userDetail.append("title", data.title);
    userDetail.append("instrument", data.instrument);
    userDetail.append("demoVideo", props.video);
    //for upload vide0 use only "demoVideo" key
    //for upload image use only "image" key
    EducatorService.uploadDemoVideo(userDetail);
    setTimeout(function () {
      setFormSubmit(true);
    }, 7000);
  }

  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata)
    console.log(newdata)

  }

  const handleReload = () => {
    window.location.reload();
  }
  return (
    <div className=" mt-10 ">
      <form onSubmit={(e) => handleSubmit(e)} >
        <div className="mb-4">
          <input type="text" id="title" placeholder='Video Title'
            onChange={(e) => handleChange(e)} value={data.title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <select onChange={(e) => handleChange(e)} name="instrument" id="instrument"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option >Select Instrument</option>
            <option value="tabla" id='tabla' >Tabla</option>
            <option value="dholak" id='dholak'>Dholak</option>
            <option value="Flute" id='Flute'>Flute</option>
            <option value="veena" id='veena'>Veena</option>
            <option value="harmonium" id='harmonium'>Harmonium</option>
            <option value="piano" id='piano'>Piano</option>
            <option value="gitar" id='gitar'>Gitar</option>
            <option value="drups" id='drums'>Drums</option>
            <option value="trumpet" id='trumpet'>Trumpet</option>
            <option value="violin" id='violin'>Violin</option>
          </select>
        </div>
        <div className="mb-4">
          <button className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-20 m-auto focus:outline-none focus:shadow-outline" type='submit'>submit</button>
        </div>
        {formSubmit ? (
          <>
            <div className='text-center mt-6 text-4xl font-semibold text-purple-900'>
              Video Uploaded
            </div>
            <div className="mb-4">
              <button className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-20 m-auto focus:outline-none focus:shadow-outline" type='submit' onClick={handleReload}>Add More Video</button>
            </div>
          </>) : null}

      </form>

    </div>
  )
}

export default Form2

