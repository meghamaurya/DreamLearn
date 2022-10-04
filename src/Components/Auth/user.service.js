import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getLearnerDashBoard = () => {
    return axios.get(API_URL, "api/authorise/learner", { headers: authHeader() });
}
const getEducatorDashBoard = () => {
    return axios.get(API_URL, "api/authorise/educator", { headers: authHeader() });
}

const UserService = {
    getLearnerDashBoard,
    getEducatorDashBoard
}

export default UserService;
