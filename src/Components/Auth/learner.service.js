import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getLearnerDashBoard = () => {
    return axios.get(API_URL + "api/authorise/learnerHomePage", { headers: authHeader() });
}

export const getCourses = () => {
    return axios.get(API_URL + "api/courses", { headers: authHeader() });
}

const LearnerService = {
    getLearnerDashBoard,
    getCourses
}

export default LearnerService;