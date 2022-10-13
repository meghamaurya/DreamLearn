
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import LearnerService from "../Auth/learner.service";
const Courses = () => {
    const [courses, setCourses] = useState([]);
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
                const { courseTitle } = course;
                return (
                    <div className="flex w-8/12 mt-7 m-auto p-2 justify-between border shadow-sm rounded-md shadow-purple-500">
                        <div className="pr-6 ">
                            <div className="font-bold text-left p-3 text-2xl text-purple-900">{courseTitle}</div>
                        </div>
                        <div className="">
                            <button className="border p-1 mt-7 pl-2 pr-3 text-lg rounded-lg bg-purple-900 text-white" ><Link to={`/courses/${courseTitle}`} >Schedule</Link></button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
export default Courses;