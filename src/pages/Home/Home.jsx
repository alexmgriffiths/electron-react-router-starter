import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (<div>
        <h1>HOME!</h1>
        <Link to="/version">Go to Version</Link>
    </div>)
}

export default Home;