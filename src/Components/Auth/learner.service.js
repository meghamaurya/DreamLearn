import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getLearnerDashBoard = () => {
    return axios.get(API_URL + "api/learner/HomePage", { headers: authHeader() });
}
const instrumentTitle = (instrument) => {
    return axios.get(API_URL + `api/learner/InstrumentCourses/${instrument}`, { headers: authHeader() });

}

const courseTitle = () => {
    return axios.get(API_URL + "api/learner/DetailedCourseInfo/:courseTitle", { headers: authHeader() });
}

const registerCourse = () => {
    return axios.post(API_URL + "api/learner/RegisterCourse/:courseID", { headers: authHeader() });
}

const registeredCourse = () => {
    return axios.get(API_URL + "api/learner/RegisteredCourses", { headers: authHeader() });
}

const coursesSchedule = () => {
    return axios.get(API_URL + "api/learner/RegisteredCoursesSchedule/:courseTitle", { headers: authHeader() });
}

const LearnerService = {
    getLearnerDashBoard,
    instrumentTitle,
    courseTitle,
    registerCourse,
    registeredCourse,
    coursesSchedule
}

export default LearnerService;