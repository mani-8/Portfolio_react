import React, { useState } from 'react'
import { FcCollapse,FcExpand } from "react-icons/fc";
import './Project.css'

const ProjectList = ({name,desc,projectLink,techUsed}) =>{
    const [showDesc, setShowDesc] = useState(false);

    const handleShowDescription = () =>{
        setShowDesc(!showDesc);
    }

    return (
        <div className={showDesc ? 'project-list-open project-list' : 'project-list'} 
        onClick={handleShowDescription}
        onMouseEnter = {()=>setShowDesc(true)}
        onMouseLeave = {()=>setShowDesc(false)}
        >
            
            <div className='expand-and-collapse-title'>
                <h5>{name}</h5>
                {showDesc? <p><FcCollapse size={20} /></p> : <p><FcExpand size={20} /></p>}
            </div>

            <div className='description'>
            {showDesc ? <p>{desc}</p> : <p>{desc.substring(0,150)}...</p>}
            </div>
            
            <div className='row'>
                {techUsed && 
                techUsed.map((tech, index) => (
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                        <div className='tech-used-in-project'>
                            <p>{tech.techName}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='live-demo-button'>
                <a target='_' href={projectLink}>Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectList;