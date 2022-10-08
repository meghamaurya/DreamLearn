import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Components/NavFooter/Nav';
import Footer from './Components/NavFooter/Footer';
import Learner from './Components/HomePage/Learner';
import Educator from './Components/HomePage/Educator';
import LandingPage from './Components/LandingPage';
import Comp from './Components/NavFooter/Comp'
import SignIn from './Components/SignIN/SignIn';
import SignUp from './Components/SignIN/SignUp';
import Home from './Components/HomePage';
import AuthService from './Components/Auth/auth.service';
import LearnerDropdown from './Components/DropdownBar/LearnerDD'
import EducatorDropdown from './Components/DropdownBar/EducatorDD';
import Instrument from './Components/Instrument';
import Register from './Components/Register';
import Courses from './Components/Courses'
import Schedule from './Components/Schedule';
import AddDemoVideo from './Components/Educator/DemoVideo/AddVideo'
import AddCourse from './Components/Educator/AddCourse/AddCourse'
function App() {
  const [learner, setLearner] = useState(false);
  const [educator, setEducator] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // const accessToken = AuthService.getCurrentUser();
    // call api to get user details with accesstoken: /profile
    console.log("user", user);
    if (user) {
      setCurrentUser(user);
      setLearner(user.role.includes("ROLE_LEARNER"));
      setEducator(user.role.includes("ROLE_EDUCATOR"));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          currentUser={currentUser}
          learner={learner} educator={educator} />
        {learner ? <LearnerDropdown /> : ""}
        {educator ? <EducatorDropdown /> : ""}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<LandingPage />} />
          {/* <Route exact path='/' element={isSignin ? '' : <LandingPage setIsSignin={setIsSignin} />} /> */}
          <Route path='/learner' element={learner ? <Learner /> : <Navigate to="/" />} />
          <Route path='/educator' element={educator ? <Educator /> : <Navigate to="/" />} />
          <Route path='/adddemovideo' element={<AddDemoVideo />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/instruments/:instrument' element={<Instrument />} />
          {/* <Route path='/instruments/:register' element={<Register />} /> */}
          <Route path='/instruments/:instrument/:register' element={<Register />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:schedule' element={<Schedule />} />
          <Route path='/signin' element={<SignIn learner={learner} />} />
          <Route path='/signup' element={<SignUp learner={learner} />} />
        </Routes>
        <Comp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
