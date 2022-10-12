import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getAllData = () => {
    return axios.get(API_URL + "api/test/all");
}

const getEducatorDashBoard = () => {
    return axios.get(API_URL + "api/authorise/educator/showDemoVideos", { headers: authHeader() });
}
const uploadDemoVideo = async (videoDetail) => {
    await axios.post(API_URL + "api/authorise/educator/addDemoVideo", videoDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, })

}
const uploadCourse = (courseDetail) => {
    return axios.post(API_URL + "api/authorise/educator/addCourse", courseDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}
const addSchedule = (scheduleDetail) => {
    return axios.post(API_URL + "api/authorise/educator/addSchedule", scheduleDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}
const showDemoVideos = (userDetail) => {
    return axios.post(API_URL + "api/authorise/educator/addedCourses", userDetail, { headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' }, });
}

const EducatorService = {
    getAllData,
    getEducatorDashBoard,
    uploadDemoVideo,
    uploadCourse,
    addSchedule,
    showDemoVideos
}

export default EducatorService;
