import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/HomePage';
import Learn from './Components/LearnPage';
import SignIn from './Components/SignIN/SignIn';
import Signup from './Components/SignIN/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
