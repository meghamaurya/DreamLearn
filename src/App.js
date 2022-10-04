import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Components/Nav&Footer/Nav';
import Footer from './Components/Nav&Footer/Footer';
import Learner from './Components/HomePage/Learner';
import Educator from './Components/HomePage/Educator';
import LandingPage from './Components/LandingPage';
import Comp from './Components/Nav&Footer/Comp'
import SignIn from './Components/SignIN/SignIn';
import SignUp from './Components/SignIN/SignUp';
import Home from './Components/HomePage';
import AuthService from './Components/Auth/auth.service';
function App() {
  const [learner, setLearner] = useState(false);
  const [educator, setEducator] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
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
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/' element={isSignin ? '' : <LandingPage setIsSignin={setIsSignin} />} />
          <Route path='/learner' element={learner ? <Learner /> : <Navigate to="/" />} />
          <Route path='/educator' element={educator ? <Educator /> : <Navigate to="/" />} />
          <Route path='/signin' element={<SignIn learner={learner} />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Comp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
