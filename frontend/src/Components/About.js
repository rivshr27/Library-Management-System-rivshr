import React from 'react'
import './About.css'
import myImage from './images/IMG_5700.JPG';

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                <img src={myImage} alt="Image Description" />

                </div>
                <div>
                    <p className="about-text">
                    Vikramshila Central Library of IIIT Bhagalpur is one of the modern libraries in terms of its collection of books and services. 
                    It caters to the information needs of faculty members, students, research scholars as well as staff of the institute, by offering a wide range of services.<br/>
                        <br/>
                        The library of IIIT Bhagalpur is in a fast-growing stage. It was started in August 2017 with approximately 500 text and reference books. 
                        During a short period, the library has acquired a good number of books more than 6100 printed volumes from reputed publishers. 
                        In the library, books are meticulously organized using the latest Dewey Decimal classification scheme enabling quick and easy retrieval. 
                        The library is well equipped with the automated library management system (LMS) using KOHA.  
                        The library has an Online Public Access Catalogue (OPAC) to search all the bibliographic records available in the library through a web-based search using KOHA LMS. Our Library provides a plagiarism detection facility using the DrillBit software to ensure the originality of the research/ project/ academic documents i.e., thesis, dissertations, project reports, etc. <br/>
                        <br/>
                        The library is kept open from 9:00 AM to 5:30 PM on all weekdays. It has a reading room which is accessible for study purposes.
                         Users can avail the library facilities with the reading room during opening hours.r<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
