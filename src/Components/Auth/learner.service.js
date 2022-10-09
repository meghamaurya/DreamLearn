import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getLearnerDashBoard = () => {
    return axios.get(API_URL + "api/authorise/learner", { headers: authHeader() });
}

export const getCourses = () => {
    return axios.get(API_URL + "api/courses", { headers: authHeader() });
}

const learnerService = {
    getLearnerDashBoard,
    getCourses
}

export default learnerService;