import React, { useState } from 'react'
import EducatorService from '../../Auth/educator.service';
const Form2 = (props) => {
  console.log(props, "videoInput")

  const [data, setData] = useState({
    courseTitle: "",
    video: null,

  });
  console.log(data)
  const [formSubmit, setFormSubmit] = useState(false);
  let errorsObj = { courseTitle: '', video: '' };
  const [errors, setErrors] = useState(errorsObj);
  // const [disable, setDisable] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (data.courseTitle === '') {
      errorObj.courseTitle = "** Required";
      error = true;
    }
    // if (data.video === '') {
    //   errorObj.video = "** Required";
    //   error = true;
    // }
    setErrors(errorObj);
    if (!error) {
      console.log('form submit')
      setFormSubmit(false)
      let videoDetail = new FormData();
      videoDetail.append("courseTitle", data.courseTitle);
      videoDetail.append("demoVideo", props.video);
      //for upload vide0 use only "demoVideo" key
      //for upload image use only "image" key
      EducatorService.uploadDemoVideo(videoDetail)
        .then((response) => {
          console.log(response.data)
        });
      setTimeout(function () {
        setFormSubmit(true);
      }, 9000);
    }

  }

  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata)
    console.log(newdata)

  }

  const handleReload = () => {
    window.location.reload()
  }


  return (
    <div className=" mt-10 ">
      <form onSubmit={handleSubmit} >
        <div className="mb-1">
          <input type="text" id="courseTitle" placeholder='Course Title'
            onChange={(e) => handleChange(e)} value={data.courseTitle}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {errors.courseTitle && <div className="text-red-600 font-semibold mb-3">{errors.courseTitle}</div>}
       
       
        <div className="mb-4">
          <button className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-20 m-auto focus:outline-none focus:shadow-outline" type='submit' >submit</button>
        </div>
        {formSubmit ? (
          <>
            <div className='text-center mt-6 text-4xl font-semibold text-purple-900'>
              Video Uploaded
            </div>
            <div className="mb-4">
              <button className="border p-1 mt-4 text-lg rounded-lg bg-purple-900 text-white w-30 m-auto focus:outline-none focus:shadow-outline" type='submit' onClick={handleReload}>Add More Video</button>
            </div>
          </>) : null}

      </form>

    </div>
  )
}

export default Form2

