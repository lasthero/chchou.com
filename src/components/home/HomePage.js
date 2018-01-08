import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h2>Welcome my site! </h2>
                <p>This site is powered by React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="aboutme" className="btn btn-primary btn-lg">Learn More About me</Link>
            </div>
        );
    }
}

export default HomePage;