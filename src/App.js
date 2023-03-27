import React from "react";

// importing react router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./components/layout/layout.js";


// Css file
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}/>
            </Routes>
        </Router>
    );
}

export default App;