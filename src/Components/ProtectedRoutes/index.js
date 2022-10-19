
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// const PrivateRoutes = (props) => {
//     const { learner, children } = props;
//     const navigate = useNavigate();
//     return learner ? children : navigate('/')

// }

const PrivateLearnerRoutes = (currentUser, getUser) => {

    console.log('currentUser', currentUser);
    console.log("learner", getUser);
    // const user = JSON.parse(localStorage.getItem('user'));
    // const navigate = useNavigate();
    if (!getUser) {
        // return navigate("/signin");
        return <Navigate to='/signin' />
    }
    // return learner ? <Outlet /> : <Navigate to='*' replace />
    // const user = JSON.parse(localStorage.getItem('user'))
    // // console.log(data.role, 'signin res')
    if (getUser.role === "ROLE_LEARNER") {
        // console.log('learner home', data)
        // navigate('/learner')   //learner home
        return <Outlet />
    } else {
        <Navigate to='/signin' />
    }
    // return user ? children : navigate('/signin')
}

const PrivateEducatorRoutes = (props) => {
    const { isEducator, children, isLoggedIn } = props;
    const navigate = useNavigate();
    if (!isLoggedIn) {
        navigate("/signin");
    }
    return isEducator ? children : navigate('*')
}

const ProtectedRoutes = {
    PrivateLearnerRoutes,
    PrivateEducatorRoutes
}

export default ProtectedRoutes;