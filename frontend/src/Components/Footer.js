import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Vikramshila Central Library,</p>
                        <p>IIIT Bhagalpur</p>
                        <p>Sabour ,Bhagalpur</p>
                        <p>Bihar (813210)</p>
                        <p>India</p>
                       
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='https://www.iiitbh.ac.in/library-people'>Management</a>
                        <a href='https://www.iiitbh.ac.in/sites/default/files/Document/Library_Rules.PDF'>Rules & Regulations</a>
                        {/* <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a> */}
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Kumar Samant</p>
                        <p>Email ID:  ksamant.admin[AT]iiitbh.ac.in</p>
                        <p>Contact:+91-9835046110</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://x.com/iiitbhagalpur' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.linkedin.com/school/iiitbh/' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.facebook.com/iiitbh.ac.in/' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.instagram.com/iiit_bhagalpur_official/?igshid=t1twlv86zcrj' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2023 copyright all right reserved<br /><span>Designed with ❤️ by Vinit Singh</span></p>
            </div>
        </div>
    )
}

export default Footer