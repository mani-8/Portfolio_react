import React from 'react'
import ProjectList from './ProjectList'

const Project = ()=> {
    const data =[
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format. you can give the link and generate the qr image in any image format or pdf format. you can give the link and generate the qr image in any image format or pdf format. you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        },
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        },
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        },
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        },
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        },
        {
            name: "QR code Generator",
            desc: "you can give the link and generate the qr image in any image format or pdf format",
            projectLink: "https://google.com",
            techUsed: [
            {
                techName: "Node Js"
            },
            {
                techName: "Express Js"
            },
            {
                techName: "HTML & CSS"
            },
            {
                techName: "React Js"
            } 
            ]
        }
    ]
    return (
        <div className='container'>
          <div className='section-title'>
           <h5>Projects</h5>
           <span className='line'></span>
        </div>
           <div className='row'>
             {data.map((item, index) =>(
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 column-content' key={index}>
                     <div>
                      <ProjectList {...item}/>
                     </div>

                </div>
             ))}
           </div>
        </div>
    )
}

export default Project;