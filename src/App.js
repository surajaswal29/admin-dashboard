import React from "react";

// importing react router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Home from "./components/layout/home/Home.js";
// import User from "./components/layout/user/User.js";
import Layout from "./components/layout/layout.js";
import MapBox from "./components/layout/home/MapBox.js";
// import Loader from "./components/loader/Loader.js";


// Css file
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/map" element={<MapBox/>}/>
            </Routes>
        </Router>
    );
}

export default App;