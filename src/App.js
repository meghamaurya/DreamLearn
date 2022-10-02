import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav&Footer/Nav';
import Footer from './Components/Nav&Footer/Footer';
import Home from './Components/HomePage';
import Learn from './Components/LearnPage';
import Comp from './Components/Nav&Footer/Comp'
import SignIn from './Components/SignIN/SignIn';
import SignUp from './Components/SignIN/SignUp';
import AuthService from './Components/Auth/auth.service';
import { useEffect, useState } from 'react';
function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav currentUser={currentUser} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/learn' element={<Learn />} />
          {/* <Route path='/learn' element={currentUser ? <Learn /> : <Navigate to="/"/>} /> */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Comp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
