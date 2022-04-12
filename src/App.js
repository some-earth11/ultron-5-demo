import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Main from './components/pages/Main';
import './App.css';
import Cards from './components/Cards';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import Signup from './firebase/Signup';
import Dash from './firebase/dashboard';
import Login from './firebase/Login';
import ErrorPage from "./components/ErrorPage";




function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="MobileApp" element={<MobileApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {/* <About /> */}
      {/* <Cards /> */}
      {/* <MobileApp /> */}
      <Footer />
    </Router>
    </> 
    
  );
}

export default App;
