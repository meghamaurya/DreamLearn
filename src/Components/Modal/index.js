import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LearnerService from "../Auth/learner.service";

const Modal = () => {
    const [popup, setPopup] = useState('');
    const params = useParams();
    const { courseID } = params;
    useEffect(() => {
        LearnerService.registerCourse(courseID)
            .then((res) => {
                console.log("courseID", res.data.success)
                setPopup(res.data.message);
                if (res.data.success === false) {
                    // setResponseFailed(res.data.message);
                    console.log("fail")
                    setPopup("Course already registered");
                } else {
                    setPopup(res.data.message);
                }

            },
                (err) => {
                    console.log(err)
                })
    }, [])

    return (
        <div className="bg-black text-purple-900 bg-opacity-70 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-white p-10 border-2 bg-opacity-100 border-purple-900 rounded-md">
                    <div className="text-4xl font-bold ">{popup}</div>
                    <div>
                        <button className="border-1 bg-purple-900 p-2 mt-12 rounded-md font-semibold text-white" ><Link to={'/courses'}>Close</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;