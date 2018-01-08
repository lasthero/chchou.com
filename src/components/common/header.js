import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active" className="btn btn-primary btn-lg tab">Home</IndexLink>            
            <Link to="/aboutme" activeClassName="active" className="btn btn-primary btn-lg tab">About Me</Link>
            <Link to="/myposts" activeClassName="active" className="btn btn-primary btn-lg tab">My Posts</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};


Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;