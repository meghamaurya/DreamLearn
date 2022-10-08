import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getAllData = () => {
    return axios.get(API_URL + "api/test/all");
}

const getLearnerDashBoard = () => {
    return axios.get(API_URL + "api/authorise/learner", { headers: authHeader() });
}
const getEducatorDashBoard = () => {
    return axios.get(API_URL + "api/authorise/educator", { headers: authHeader() });
}

const uploadDemoVideo = () => {
    return axios.post(API_URL + "api/authorise/educator/addDemoVideo", { headers: authHeader() },)
}
export const getCourses = () => {
    return axios.get(API_URL + "api/courses", { headers: authHeader() });
}

const UserService = {
    getAllData,
    getLearnerDashBoard,
    getEducatorDashBoard,
    uploadDemoVideo
}

export default UserService;
