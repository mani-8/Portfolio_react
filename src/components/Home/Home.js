import React from "react";
import './Home.css'
import Typewriter from 'typewriter-effect';
import myCV from '../Home/ManikandanH_CV.pdf'

const Home = () => {
    return (
        <div className="container-fluid home" id="home">
        
        <div className="container home-content">
            <h1>Hi I'm a</h1>
            <h3>
            <Typewriter
              options={{
              strings: [
               'Full Stack Developer',
               'Web Developer',
               'MERN Stack Developer',
               'Java Developer'
            ],
              autoStart: true,
              loop: true,
              delay: 5
                }}
            />
            </h3>
        </div>

        <div className="buttons">

         <div className="button-for-hire">
           Hire Me
         </div>
         <div className="button-for-resume">
          <a href={myCV} download="Manikandan_H_CV.pdf">Get Resume</a>
         </div>

        </div>

        </div>
    )
};

export default Home;