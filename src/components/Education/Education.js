import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdGroupWork } from "react-icons/md";


const Education = ()=> {

    const data =[
        {
            name:"Peri Institute Of Technology",
            degree:"B.E in Computer Science and Engineering",
            years:"2017-2021",
            desc: "A Computer Science graduate with a passion for problem-solving, equipped with a strong foundation in algorithms, data structures, and software engineering. Actively engaged in hackathons and coding competitions, fostering creativity and teamwork."
        },
        {
            name:"David School",
            degree:"12th Grade",
            years:"2017",
            desc:"Completed HSC at David Matriculation Higher Secondary School, I focused on developing a strong academic foundation, with a particular emphasis on science and mathematics. This period allowed me to cultivate critical thinking and time management skills, preparing me for my future studies in the field of Computer Science and Engineering."
        },
        {
            name:"David School",
            degree:"10th Grade",
            years:"2015",
            desc: "Completed SSLC at David Matriculation Higher Seconday School, fostering a strong academic base and essential skills for future studies in Computer Science and Engineering."
        }
    ];

    const colors = [
        "#4B088A",
        "#FF8042",
        "#001CCE"
    ]

 return(
    <div className='container education-section' id='education'> 
    <div className='section-title'>
       <h5>Education</h5>
       <span className='line'></span>
    </div>
     <div className='timeline-section'>
    <VerticalTimeline lineColor="#FF1042">
    {data.map((items, index) => (
     <VerticalTimelineElement
     className="vertical-timeline-element--work"
     key={index}
     contentStyle={{ background: colors[index], color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date={items.years}
     dateClassName='date-class'
     iconStyle={{ background: colors[index], color: '#fff' }}
     icon={<MdGroupWork />}>
     <h3 className="vertical-timeline-element-title" style={{fontWeight:"bold"}}>{items.name}</h3>
     <h5 className="vertical-timeline-element-subtitle">{items.degree}</h5>
     <p>
       {items.desc}
     </p>
    </VerticalTimelineElement>
   ))}
  
</VerticalTimeline>
</div>
    </div>
 )
}

export default Education;