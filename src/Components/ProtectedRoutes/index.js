
import { Outlet, useNavigate } from "react-router-dom";

// const PrivateRoutes = (props) => {
//     const { learner, children } = props;
//     const navigate = useNavigate();
//     return learner ? children : navigate('/')

// }

const PrivateLearnerRoutes = () => {
    // const { currentUser } = props;
    // console.log(user);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    if (!currentUser) {
        return navigate("/signin");
    }
    return <Outlet />
    // const user = JSON.parse(localStorage.getItem('user'))
    // // console.log(data.role, 'signin res')
    // if (user.role === "ROLE_LEARNER") {
    //     // console.log('learner home', data)
    //     // navigate('/learner')   //learner home
    //     return children
    // } else {
    //     navigate('/signin');
    // }
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