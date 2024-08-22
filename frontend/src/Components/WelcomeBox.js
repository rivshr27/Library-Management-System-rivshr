import React from 'react'
import './WelcomeBox.css'
// setTimeout(function() {alert("Welcome to my website!");}, 3000); //Message will display after 3 seconds
function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <p className='welcome-title'>Welcome to Library</p>
            <p className='welcome-message'>Feed Your Brain<br/>
            <span className='welcome-submessage'>Grab A Book To Read</span></p>
        </div>
    )
}

export default WelcomeBox
