import { Route } from "react-router-dom";
import EducatorHome from './Components/HomePage/EducatorHome/MyCourse';
import AddDemoVideo from './Components/Educator/DemoVideo/AddVideo';
import AddCourse from './Components/Educator/AddCourse/AddCourse';
import AddSchedule from './Components/Educator/AddSchedule/AddCourseSchedule';
import MyCourses from './Components/Educator/MyCourses/Educator';
import EducatorSchedule from './Components/Educator/EducatorSchedule/EducatorSchedule';
function EducatorRoutes() {
    return (
        <>
            <Route path='/educator' element={<EducatorHome />} />
            <Route path='/adddemovideo' element={<AddDemoVideo />} />
            <Route path='/addcourse' element={<AddCourse />} />
            <Route path='/addschedule' element={<AddSchedule />} />
            <Route path='/educatorschedule/:title' element={<EducatorSchedule />} />
            <Route path='/mycourses' element={<MyCourses />} />
        </>
    )
}
// // export default EducatorRoutes;