import React from 'react';
import DownloadLink from 'react-download-link';


class AboutMePage extends React.Component {
    
    render(){
        return (
            <div className="jumbotron">
                <h2>About Me</h2>
                <p>Hi there. I am Chih-Ho Chou. Welcome to my web site. This application uses React, Redux, React Router and a variety of other helpful libraries.
                    As a software engineer I'd love to explore and play around all different kinds of the cool and cutting-edge technologies to facilitate software development. 
                    You can download a copy my resume <DownloadLink filename="resume.docx" label="Here" exportFile={()=> "Test"} />.
                </p>
            </div>
        );
    }
}

export default AboutMePage;