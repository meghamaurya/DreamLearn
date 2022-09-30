import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav&Footer/Nav';
import Footer from './Components/Nav&Footer/Footer';
import Home from './Components/HomePage';
import Learn from './Components/LearnPage';
import Comp from './Components/Nav&Footer/Comp'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
        </Routes>
        <Comp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
