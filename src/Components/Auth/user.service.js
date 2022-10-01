import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "";

const getLearnerDashBoard = () => {
    return axios.get(API_URL, "user", { headers: authHeader() });
}
// const getEducatorDashBoard = () => {
//     return axios.get(API_URL, "user", {headers: authHeader()});
// }

const LearnerService = {
    getLearnerDashBoard
}

export default LearnerService;