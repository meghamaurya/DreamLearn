import { Route, useNavigate } from "react-router-dom";
import EducatorHome from './Components/HomePage/EducatorHome/MyCourse';
import AddDemoVideo from './Components/Educator/DemoVideo/AddVideo';
import AddCourse from './Components/Educator/AddCourse/AddCourse';
import AddSchedule from './Components/Educator/AddSchedule/AddCourseSchedule';
import MyCourses from './Components/Educator/MyCourses/Educator';
import EducatorSchedule from './Components/Educator/EducatorSchedule/EducatorSchedule';


const PrivateEducatorRoutes = ({ user, children }) => {
    const navigate = useNavigate();
    if (user.role !== "ROLE_EDUCATOR") {
        return navigate("/signin");
    }
    return children;
}

function EducatorRoutes() {

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <Route path='/educator'
                element={
                    <PrivateEducatorRoutes user={user} >
                        <EducatorHome />
                    </PrivateEducatorRoutes>} />
            <Route path='/adddemovideo' element={<AddDemoVideo />} />
            <Route path='/addcourse' element={<AddCourse />} />
            <Route path='/addschedule' element={<AddSchedule />} />
            <Route path='/educatorschedule/:title' element={<EducatorSchedule />} />
            <Route path='/mycourses' element={<MyCourses />} />
        </>
    )
}
export default EducatorRoutes;