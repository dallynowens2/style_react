import React from 'react'
import profilePic from './profilePicPortfolio.jpg'

const AboutComponent = () => {
    return (
        <div className='row'>
            <div className='col-2'>
                <img src={profilePic} className="img-fluid rounded-circle" alt='profile Picture' width='150' height='150'/>
            </div>
            <div className='col-10'>
                <h1 className="justify-content-center text-light display-5 p-2">About Me</h1>
                <div className='text-light lead p-2'>
                    I am a software engineering student at snow college currently. I have experience in using many different languages such
                    as C#, JavaScript, Kotlin, Python, Java, SQL and many others. I have worked in different enviorments such as using visual studio, VS code and android studio.
                    I have used different cloud services and containers such as Azure and Docker. Some of my goals are to always be learning and improving my abilities, to be part of a great 
                    team that is putting out great software and to continual get better at writing code that is clean, easy to understand, and testable.
                </div>
            </div>
            
        </div>
    )
}

export default AboutComponent
