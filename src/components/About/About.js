import React from 'react'
import './About.css'
import Pro_pic from '../../Images/profile_boy.jpg'

const About = ()=>{
    return (
        <div className='container about-content'id='about'>
       
        <div className='row'>

        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='about-image'>
             <img src={Pro_pic} alt='profile_img'></img>
            </div>
        </div>

        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='about-details'>
                <div className='about-title'>
                  <h5>About</h5>
                  <span className='line'></span>
                </div>
                <p>
                    Seeking a software engineering role where I can leverage my expertise in Java, 
                    HTML, CSS, JavaScript, ReactJS, Angular, Spring Boot, and MySQL, along with my 
                    experience in Azure and MEAN stack, to develop innovative solutions and deliver 
                    high-quality web applications. Committed to continuous learning and growth, 
                    I aim to contribute to a dynamic team and make a significant impact in driving 
                    technological advancements.
                </p>
            </div>
        </div>

        </div>

        </div>
    )
}

export default About;
