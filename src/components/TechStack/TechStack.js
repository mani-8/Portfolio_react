import React, { useState } from 'react'
import './TechStack.css'

const TechStack = ()=>{
    const data =[
    {
        name:"Full stack developer"
    },
    {
        name:"React Js"
    },
    {
        name:"Angular Js"
    },
    {
        name:"Node Js"
    },
    {
        name:"Express Js"
    },
    {
        name:"HTML & CSS"
    },
    {
        name:"Javascript"
    },
    {
        name:"Typescript"
    },
    {
        name:"Java"
    },
    {
        name:"Python"
    },
    {
        name:"MySQL"
    },
    {
        name:"MongoDB"
    },
    {
        name:"SpringBoot"
    },
    {
        name:"Hibernate"
    },
    {
        name:"RHEL-124 Linux"
    },
    {
        name:"Azure Cloud"
    }
  ]
  const colors = [
    '#FF5733',
    '#5C79FF',
    '#FFBD4F',
    '#44FFB2',
    '#E44DFF',
    '#3AC2FF',
    '#FFB347',
    '#68FF85',
    '#FF72A0',
    '#63FFD1',
    '#FF76E1',
    '#42A7FF',
    '#FF97B9',
    '#63FF8E',
    '#FF81C8',
    '#4FA7FF'
]
const [loadMore,setLoadMore]= useState(9);

const loadMoreClick = ()=>{
 setLoadMore((prev)=> prev+3)
}
    return (
        <div className='container techstack-section'> 
        <div className='section-title'>
           <h5>Tech Stack</h5>
           <span className='line'></span>
        </div>
           <div className='row'>
             {data.slice(0,loadMore).map((item, index) =>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 column-content' key={index}>
                     <div className={index===0? 'tech-content-marked tech-content' : 'tech-content'}>
                        <span className='tech-number' style={{backgroundColor: colors[index]}}>
                            {index+1}
                        </span> 
                      <p>{item.name}</p>
                     </div>

                </div>
             ))}
        </div>

           {loadMore >= data.length ? null : <span className='load_more_tech_stack' onClick={loadMoreClick}>
             Load More
           </span>}

        </div>
    )
}

export default TechStack