import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LearnerService from "../Auth/learner.service";
import Modal from "../Modal";

const Register = () => {
    const [courseDetail, setCourseDetail] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const params = useParams();
    // const { courseTitle } = params;
    const { courseTitle } = params;

    useEffect(() => {
        LearnerService.courseTitle(courseTitle)
            .then((res) => {
                console.log("registerDetail", res.data.message);
                setCourseDetail(res.data.message);
            },
                (err) => {
                    console.log(err)
                })
    }, [])
    //     axios.get(`https://fakestoreapi.com/products/${instrument}/${register}`)
    //         .then((response) => {
    //             console.log("registerDetail", response.data);
    //             setCourseDetail(response.data)
    //         })
    // }, [instrument, register])
    return (
        <div>
            <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>{courseDetail.title}Register Course</h3>
            {courseDetail?.map((course) => {
                const { courseID, imageUrl, videoUrl, courseTitle, educator, classDays, duration, endDate, startDate, description } = course;
                return (
                    <div key={courseID} className="grid grid-cols-2 w-8/12 m-auto mt-14 text-purple-900 shadow-lg shadow-purple-500">
                        <div className="w-full p-4 shadow-sm shadow-purple-500 inline-block pl-10">
                            {/* <img className="w-50 h-56 m-auto " src={imageUrl} alt={courseTitle} /> */}
                            <video className='w-72 h-48 m-auto' controls >
                                <source src={videoUrl} />
                            </video>
                            <h2 className="float-left pt-6 text-lg font-semibold">{educator}</h2>
                            <p className="float-left -pl-0 pt-2 ">{courseTitle}</p>
                            <p className="float-left -pl-0 pt-2 ">{classDays}</p>
                            <p className="float-left -pl-0 pt-2 ">{duration}</p>
                            <p className="float-left -pl-0 pt-2 ">{startDate}</p>
                            <p className="float-left -pl-0 pt-2 ">{endDate}</p>
                        </div>
                        <div className="shadow-sm shadow-purple-500 p-6">
                            <h2 className="text-2xl font-semibold mb-2">Description</h2>
                            <p className="p-4">{description}</p>
                            <button className="p-2 mt-8 border bg-purple-900 text-white rounded-md text-lg" ><Link to={`/modal/${courseID}`}>Register Now</Link></button>
                        </div>
                    </div>
                )
            })}
            {/* {showModal ? <Modal setShowModal={setShowModal} /> : null} onClick={() => setShowModal(true)} */}
        </div>
    )
}

export default Register;