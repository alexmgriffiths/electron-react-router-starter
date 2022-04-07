import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const showAlert = async () => {
        const result = await app.sayHello("testing");
        alert("Hi!");
    }

    return (<div>
        <h1>VERSION 1.0.0!</h1>
        <Link to="/main_window">Go to Home</Link>
        <button onClick={showAlert}>Click Me</button>
    </div>)
}

export default Home;