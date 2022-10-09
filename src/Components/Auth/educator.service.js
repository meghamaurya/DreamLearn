import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getAllData = () => {
    return axios.get(API_URL + "api/test/all");
}

const getEducatorDashBoard = () => {
    return axios.get(API_URL + "api/authorise/educator", { headers: authHeader() });
}

const uploadDemoVideo = () => {
    return axios.post(API_URL + "api/authorise/educator/addDemoVideo", { headers: authHeader() },)
}


const UserService = {
    getAllData,
    getEducatorDashBoard,
    uploadDemoVideo
}

export default UserService;
