import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getAllData = () => {
    return axios.get(API_URL + "api/test/all");
}


const getEducatorDashBoard = () => {
    return axios.get(API_URL + "api/authorise/educator", { headers: authHeader() });
}
const uploadDemoVideo = (userDetail) => {
    return axios.post(API_URL + "api/authorise/educator/addDemoVideo", userDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}
const uploadImage = (userDetail) => {
    return axios.post(API_URL + "api/authorise/educator/addCourse", userDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}
const EducatorService = {
    getAllData,
    getEducatorDashBoard,
    uploadDemoVideo,
    uploadImage
}

export default EducatorService;
