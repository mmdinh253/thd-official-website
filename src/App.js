// ./App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
// import About from "./pages/about";
import News from "./pages/news";
import Contact from "./pages/contact";
import Footer from './components/Footer';
import Overview from "./pages/overview";
import Team from "./pages/team";

function App() {
    return (
        <Router>
            {/* Navbar should always appear */}
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/overview" element={<Overview />} />
                <Route exact path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;