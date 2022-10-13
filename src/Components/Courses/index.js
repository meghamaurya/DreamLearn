import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import LearnerService from "../Auth/learner.service";
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const params = useParams();
    const { schedule } = params;
    useEffect(() => {
        LearnerService.registeredCourse()
            .then((res) => {
                console.log("registeredCourses", res.data.message);
                setCourses(res.data.message);
            },
                (err) => {
                    console.log(err)
                })
    }, [])
    return (
        <div >
            <h3 className='text-center mt-10 text-4xl font-semibold underline underline-offset-2 text-purple-900'>My Courses</h3>
            {courses.map((course) => {

                return (
                    <div className="flex w-8/12 mt-7 m-auto p-2 justify-between border shadow-sm rounded-md shadow-purple-500">
                        <div className="pr-6 ">
                            <div className="font-bold text-left p-3 text-2xl text-purple-900">{course.courseTitle}</div>
                        </div>
                        <div className="">
                            <Link to={`/courses/${schedule}`} ><button className="border p-1 mt-7 pl-2 pr-3 text-lg rounded-lg bg-purple-900 text-white" >Schedule</button></Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
export default Courses;