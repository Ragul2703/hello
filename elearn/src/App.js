// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Adminlogin from './components/Adminlogin';
import CourseUpload from './components/CourseUpload';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Nav />   
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/adminlogin" element={<Adminlogin />} /> 
                <Route path="/courseupload" element={<CourseUpload />} />
                <Route path="/footer" element={<Footer />} /> 
                {/* Add more routes as needed */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
