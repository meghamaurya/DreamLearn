import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LearnerService from "../Auth/learner.service";

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const params = useParams();
    const { courseTitle } = params;
    useEffect(() => {
        LearnerService.coursesSchedule(courseTitle)
            .then((res) => {
                console.log("schedule", res.data.message);
                setSchedule(res.data.message);
            })
    }, [])
    return (
        <>
            <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900 underline underline-offset-2'>Schedule</h3>
            {schedule.map((schedule) => {
                const { date, slotEnd, slotStart, topic } = schedule;
                return (
                    <div className="flex w-8/12 mt-7 m-auto justify-between border shadow-sm rounded-md shadow-purple-500">
                        <div className="flex flex-col">
                            <div className="font-bold text-left p-2 pb-0 text-2xl text-purple-900">Topics</div>
                            <div className="p-2 pt-1 font-semibold text-lg text-purple-700">{topic}</div>
                        </div>
                        <div>
                            <div className=" pt-3 font-semibold text-lg text-purple-700">Date {date}</div>
                            <div className=" font-semibold text-lg text-purple-700">Time {slotStart} - {slotEnd}</div>
                        </div>
                        <div className="">
                            <button className="border p-1 m-2 pl-2 pr-2 mt-6 text-lg rounded-lg bg-purple-900 text-white" >Scheduled</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Schedule;