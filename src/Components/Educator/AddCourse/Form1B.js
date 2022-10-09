import React, { useState } from 'react'
import EducatorService from '../../Auth/educator.service';

const Form1B = (props) => {
    console.log(props, "imageInput")

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
    console.log(data)

    function handleSubmit(e) {
        e.preventDefault();
        let userDetail = new FormData();
        userDetail.append("title", data.title);
        userDetail.append("description", data.description);
        userDetail.append("instrument", data.instrument);
        userDetail.append("duration", data.duration);
        userDetail.append("sdate", data.sdate);
        userDetail.append("edate", data.edate);
        userDetail.append("days", data.days);
        userDetail.append("image", props.image);

        EducatorService.uploadImage(userDetail);

    }

    function handleChange(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata)

    }

    return (
        <div className=" mt-10 text-start">
            <form onSubmit={(e) => handleSubmit(e)} className=" text-purple-900  bg-white rounded  flex flex-col content-center mb-4 " >
                <div className="mb-6">
                    <label className="block text-purple-900 text-sm font-bold mb-2">Course Title:</label>
                    <input
                        value={data.title}
                        onChange={(e) => handleChange(e)}
                        type="text" name="title" id="title" placeholder='Course Title'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2">Course Description:</label>
                    <input
                        value={data.description}
                        onChange={(e) => handleChange(e)}
                        type="text" name="Description" id="description" placeholder='Course  Description'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2"> Select Instrument</label>
                    <select onChange={(e) => handleChange(e)} name="instrument" id="instrument"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline">
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
                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2">Course Duration:</label>
                    <input
                        value={data.duration}
                        onChange={(e) => handleChange(e)}
                        type="text" name="Duration" id="duration" placeholder=' Course Duration'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2">Course Starting Date:</label>
                    <input
                        value={data.sdate}
                        onChange={(e) => handleChange(e)}
                        type="date" name="sdate" id="sdate" placeholder='Starting Date'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2">Course End Date:</label>
                    <input
                        value={data.edate}
                        onChange={(e) => handleChange(e)}
                        type="date" name="edate" id="edate" placeholder='End Date'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-6">
                    <label className="bl6ck text-purple-900 text-sm font-bold mb-2">Days:</label>
                    <select onChange={(e) => handleChange(e)} name="days" id="days"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:shadow-outline" >
                        <option  >Please Select</option>
                        <option value="weekend" id='weekend' >Weekend</option>
                        <option value="workingday" id='workingday'>Working Day</option>

                    </select>
                </div>

                <button className="border p-1 mt-3 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
                    type='submit' >Submit</button>
            </form>

        </div>
    )
}

export default Form1B;
