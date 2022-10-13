import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LearnerService from "../Auth/learner.service";

export default function InstrumentCourses() {
    const [instruments, setInstruments] = useState([]);
    const [courseTitle, setCourseTitle] = useState({});
    const params = useParams();
    const { instrument } = params;
    useEffect(() => {

        LearnerService.instrumentTitle(instrument)
            .then((res) => {
                console.log("courses", res.data.message)
                setInstruments(res.data.message);
                setCourseTitle(res.data.message)
            },
                (err) => {
                    console.log(err)
                })
    }, [instrument])

    return (<div className="z-10" >
        <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{courseTitle.instrument} {console.log("courssetitle", courseTitle)} Courses</h3>
        {/* <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instruments.id}/register`}> */}
        <div className="w-80 p-4 mt-14 inline-block cursor-pointer ">
            {instruments?.map((data) => {
                const { id, courseTitle, imageUrl, educator, instrument } = data
                return (
                    <div key={id} className='grid grid-row-3'>
                        {/* <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{instruments.title} Courses</h3> */}
                        <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instrument}/${courseTitle}`}>
                            {/* <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instrument}`}> */}
                            <img className="w-full h-56 " src={imageUrl} alt={courseTitle} />
                            <h2 className="float-left pt-3 text-lg font-semibold">{educator}</h2>
                            <p className="float-left ">{instrument}</p></Link>
                        </div>
                    </div>

                    // <div key={id} className="max-w-[1250px] mx-auto  grid grid-col-3 " >
                    //     <div onClick={handleClick(courseTitle)}>
                    //         <img className="w-80 h-56 " src={imageUrl} alt={courseTitle} />
                    //         <div className='flex flex-col text-purple-900  items-start capitalize  m-1'>
                    //             <h2 className="font-semibold">Educator: <span className="ml-2 ">{educator}</span></h2>
                    //             <p className="font-semibold">Instrument: <span className="ml-2 text-lg">{instrument}</span></p>
                    //         </div>
                    //     </div>
                    // </div>
                )
            })}

        </div >
    </div >
    )
}


// <div >
//         <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{instruments.title} Courses</h3>
//         <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instruments.id}/register`}>
//             <div className="w-80 p-4 mt-14 inline-block cursor-pointer "><Link to={`/instruments/${instrument}`}>
//             <img className="w-full h-56 " src={instruments.image} alt={instruments.title} />
//             <h2 className="float-left pt-3 text-lg font-semibold">{instruments.category}</h2>
//             <p className="float-left ">{instruments.description}</p></Link>
//         </div>
//     </div>