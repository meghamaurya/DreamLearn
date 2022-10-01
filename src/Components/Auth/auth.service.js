import axios from "axios";

const API_URL = "";

const signup = async (username, email, password) => {
    const response = await axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const signin = async (username, password) => {
    return await axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        })
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    signup,
    signin,
    logout,
    getCurrentUser
};

export default AuthService;
