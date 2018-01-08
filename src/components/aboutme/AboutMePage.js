import React from 'react';
import DownloadLink from 'react-download-link';


class AboutMePage extends React.Component {
    
    render(){
        return (
            <div className="jumbotron">
                <h2>About Me</h2>
                <p>Hi there. I am Chih-Ho Chou. Welcome to my web site. This application uses React, Redux, React Router and a variety of other helpful libraries.
                    <br/><br/>
                    As a software engineer I'd love to explore and play around all different kinds of the cool and cutting-edge technologies to facilitate software development. 
                    You can contact me with any questions or concerns at <a href="mailto:chihho.chou@gmail.com">chihho.chou@gmail.com</a>. My resume is available upon request.
                    <br/><br/>
                    My GitHub: <a href="https://github.com/lasthero" target="_blank">https://github.com/lasthero</a>
                    <br/><br/>
                    My <a href="https://www.linkedin.com/in/chih-ho-andy-chou-7012073/" target="_blank">LinkedIn</a> 
                </p>
                
            </div>
        );
    }
}

export default AboutMePage;