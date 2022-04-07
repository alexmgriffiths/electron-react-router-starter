import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Version from './pages/Version/Version.jsx';

function App() {
    return (
        <div className="app">
            <h1>Hello from React!</h1>
            <Routes>
                <Route exact path="/main_window" element={<Home />} />
                <Route exact path="/version" element={<Version />} />
            </Routes>
        </div>
    )
}

export default App;