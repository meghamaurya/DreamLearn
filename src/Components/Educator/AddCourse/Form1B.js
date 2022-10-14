import React, { useState } from 'react'
import EducatorService from '../../Auth/educator.service';

const Form1B = (props) => {
    // console.log(props, "imageInput")

    const [data, setData] = useState({
        title: "",
        description: "",
        instrument: "",
        duration: "",
        sdate: "",
        edate: "",
        days: "",
        image: null
    })
    // console.log(data)
    let errorsObj = {
        title: '',
        description: '',
        instrument: '',
        duration: '',
        sdate: '',
        edate: '',
        days: '',
        image: ''
    };
    const [errors, setErrors] = useState(errorsObj);
    const [successMsg, setSuccessMsg] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (data.title === '') {
            errorObj.title = "** Required";
            error = true;
        }
        if (data.description === '') {
            errorObj.description = "** Required";
            error = true;
        }
        if (data.instrument === '') {
            errorObj.instrument = "** Required";
            error = true;
        }
        if (data.duration === '') {
            errorObj.duration = "** Required";
            error = true;
        }
        if (data.sdate === '') {
            errorObj.sdate = "** Required";
            error = true;
        }
        if (data.edate === '') {
            errorObj.edate = "** Required";
            error = true;
        }
        if (data.days === '') {
            errorObj.days = "** Required";
            error = true;
        }
        if (props.image === '') {
            errorObj.image = "** Required";
            error = true;
        }
        setErrors(errorObj);
        if (!error) {
            console.log('form submit')
            let courseDetail = new FormData();
            courseDetail.append("title", data.title);
            courseDetail.append("description", data.description);
            courseDetail.append("instrument", data.instrument);
            courseDetail.append("duration", data.duration);
            courseDetail.append("sdate", data.sdate);
            courseDetail.append("edate", data.edate);
            courseDetail.append("days", data.days);
            courseDetail.append("image", props.image);

            EducatorService.uploadCourse(courseDetail).then((response) => {
                // console.log("successMsg", response.data.message)
                setSuccessMsg(response.data.message);
            });
        }
    }

    function handleChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        // console.log(newdata)

    }
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className=" mt-10 text-start">
            <form onSubmit={(e) => handleSubmit(e)} className=" text-purple-900  bg-white rounded  flex flex-col content-center mb-4 " >
                <div >
                    <label className=" text-purple-900 text-sm font-bold mb-2">Course Title:</label>
                    <input
                        value={data.title}
                        onChange={(e) => handleChange(e)}
                        type="text" name="title" id="title" placeholder='Course Title'
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {errors.title && <div className="text-red-600 font-semibold  mb-6">{errors.title}</div>}
                <div>
                    <label className=" text-purple-900 text-sm font-bold mb-6">Course Description:</label>
                    <input
                        value={data.description}
                        onChange={(e) => handleChange(e)}
                        type="text" name="Description" id="description" placeholder='Course  Description'
                        className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {errors.description && <div className="text-red-600 font-semibold mb-6">{errors.description}</div>}
                <div >
                    <label className=" text-purple-900 text-sm font-bold mb-6"> Select Instrument</label>
                    <select onChange={(e) => handleChange(e)} name="instrument" id="instrument"
                        className="shadow appearance-none border rounded w-full mt-1 py-2 px-3 mb-2 text-purple-900 leading-tight focus:outline-none focus:shadow-outline">
                        <option >Select</option>
                        <option value="tabla"  >Tabla</option>
                        <option value="dholak" >Dholak</option>
                        <option value="Flute" >Flute</option>
                        <option value="veena">Veena</option>
                        <option value="harmonium" >Harmonium</option>
                        <option value="piano">Piano</option>
                        <option value="gitar" >Guitar</option>
                        <option value="drups" >Drums</option>
                        <option value="trumpet" >Trumpet</option>
                        <option value="violin">Violin</option>
                    </select>
                </div>
                {errors.instrument && <div className="text-red-600 font-semibold mb-6">{errors.instrument}</div>}
                <div >
                    <label className=" text-purple-900 text-sm font-bold mb-2">Course Duration:</label>
                    <input
                        value={data.duration}
                        onChange={(e) => handleChange(e)}
                        type="text" name="Duration" id="duration" placeholder=' Course Duration'
                        className="shadow appearance-none border rounded w-full mt-1 py-2 px-3  text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {errors.duration && <div className="text-red-600 font-semibold mb-6">{errors.duration}</div>}
                <div className='mt-2' >
                    <label className=" text-purple-900 text-sm font-bold mb-2">Course Starting Date:</label>
                    <input
                        value={data.sdate}
                        onChange={(e) => handleChange(e)}
                        type="date" name="sdate" id="sdate" placeholder='Starting Date'
                        className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {errors.sdate && <div className="text-red-600 font-semibold mb-6">{errors.sdate}</div>}
                <div className='mt-2'>
                    <label className=" text-purple-900 text-sm font-bold mb-2">Course End Date:</label>
                    <input
                        value={data.edate}
                        onChange={(e) => handleChange(e)}
                        type="date" name="edate" id="edate" placeholder='End Date'
                        className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {errors.edate && <div className="text-red-600 font-semibold mb-6">{errors.edate}</div>}
                <div className='mt-2'>
                    <label className=" text-purple-900 text-sm font-bold mb-2">Days:</label>
                    <select onChange={(e) => handleChange(e)} name="days" id="days"
                        className="shadow appearance-none border rounded w-full mt-1  py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" >
                        <option  >Please Select</option>
                        <option value="weekend" id='weekend' >Weekend</option>
                        <option value="workingday" id='workingday'>Working Day</option>

                    </select>
                </div>
                {errors.days && <div className="text-red-600 font-semibold mb-6">{errors.days}</div>}
                <button className="border p-1 mt-3 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
                    type='submit' >Submit</button>
                {successMsg ? (
                    <>
                        <div className='text-center mt-6 text-3xl font-semibold text-purple-700 capitalize'>
                            {successMsg}
                        </div>
                        <div className="mb-4 m-auto ">
                            <button className="border p-1 mt-4 text-lg rounded-lg bg-purple-900 text-white w-30 focus:outline-none focus:shadow-outline" type='submit' onClick={handleReload}>Add More Video</button>
                        </div>
                    </>) : null}
            </form>

        </div>
    )
}

export default Form1B;
