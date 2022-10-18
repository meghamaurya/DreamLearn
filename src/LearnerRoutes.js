import { Route } from 'react-router-dom';
import LearnerHome from './Components/HomePage/Learner';
import InstrumentCourses from './Components/InstrumentCourses';
import Register from './Components/Register';
import Courses from './Components/Courses'
import Schedule from './Components/Schedule';
import Modal from './Components/Modal';
function LearnerRoutes() {
    return (
        <>
            <Route path='/learner' element={<LearnerHome />} />
            <Route path='/instruments/:instrument' element={<InstrumentCourses />} />
            <Route path='/instruments/:instrument/:courseTitle' element={<Register />} />
            <Route path='/modal/:courseID' element={<Modal />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:courseTitle' element={<Schedule />} />
        </>
    )
}

// export default LearnerRoutes;