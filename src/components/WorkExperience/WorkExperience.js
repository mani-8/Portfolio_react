import React from 'react'
import './WorkExperience.css'

const WorkExperience = () => {
    const data =[
        {
            companyName: "Larsen & Toubro",
            position: "Associate Trainee",
            desc: [
                "Worked as a Full Stack Developer on a multi-tenant dashboard application. Developed frontend components using Angular and integrated them with the backend RESTful APIs built with Spring Boot and Java. Implemented role-based access control for user authentication and authorization. Utilized MongoDB to store and manage application data. Collaborated with the team to optimize application performance and resolve bugs.",
                "Extended the existing dashboard application by integrating new data visualization widgets and creating custom user interface components to improve the user experience."
              ],
            year: "JUN 2022 - Present",
            techUsed: [
            {
                techName: "Angular Js"
            },
            {
                techName: "Node Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "Java"
            } 
            ]
        }
            ]
    return(
        <div className='container work-content'>
           <div className='section-title'>
           <h5>Work Experience</h5>
           <span className='line'></span>
        </div>
        <div className='row'>
             {data.map((item, index) =>(
<div className='work-experience'>
<div className='job'>
  <h3 style={{fontWeight:"bold"}}>{item.companyName}</h3>
  <p style={{fontWeight:"bold"}}>{item.position}</p>
  <p style={{fontWeight:"bold"}}>{item.year}</p>
  <ul className="desc-list">
    {item.desc.map((point, i) => (
     <li key={i}>{point}</li>
 ))}
  </ul>
</div>
</div>
 ))}
</div>
</div>
);
}

export default WorkExperience;
