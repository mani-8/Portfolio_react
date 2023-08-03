import React from "react";
import './Certification.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Certification = () =>{

    const data = [
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"

        },
        {
            name:"Angular & NodeJS- MEAN Stack",
            platform:"Udemy",
            desc:"Learned how to connect our Angular Frontend to a NodeJS & Express & MongoDB Backend by building a real application",
            img:"https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png"

        },
        {
            name:"Advanced Jave web programming",
            platform:"Anudip foundation",
            desc:"Learned the advance java, SpringBoot, Hibernate, Angular, MySQL Database & postman",
            img:"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo-700x394.png"

        },
        {
            name:"Web Development Bootcamp",
            platform:"Udemy",
            desc:"A Full-Stack Wev Development with just one course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
            img:"https://w7.pngwing.com/pngs/798/799/png-transparent-web-development-logo-world-wide-web-website-web-symbol-s-web-design-symmetry-monochrome-thumbnail.png"

        },
        {
            name:"Azure-900",
            platform:"Microsoft Azure",
            desc:"Microsoft Azure Fundamentals, is an entry-level certification providing a foundational understanding of cloud concepts and essential Azure services.",
            img:"https://www.cloudgirl.nl/wp-content/uploads/2021/12/Azure-Logo-700x394-1.png"

        },
        {
            name:"Azure-104",
            platform:"Microsoft Azure",
            desc:"Microsoft Azure Administrator, is a certification that validates the skills and knowledge required to manage and operate Azure services, providing expertise in areas like virtual machines, storage, networking, and governance.",
            img:"https://www.cloudgirl.nl/wp-content/uploads/2021/12/Azure-Logo-700x394-1.png"

        },
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://www.pngwing.com/en/search?q=react"

        },
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://www.pngwing.com/en/search?q=react"

        },
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://www.pngwing.com/en/search?q=react"

        },
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://www.pngwing.com/en/search?q=react"

        },
        {
            name:"React Js -Complete guide",
            platform:"Udemy",
            desc:"Dive in and learn React.js from scratch! Learned React, Hooks, Redux, React Router, Next.js,..etc.",
            img:"https://www.pngwing.com/en/search?q=react"

        }
    ]

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="container certification-seciton" id="certifications">
            <div className='section-title'>
           <h5>Certifications</h5>
           <span className='line'></span>
        </div>
           
        <div className="certification-slider">
         <Slider {...settings}>
           {data.map((items, index)=>(
           <div className="content-slider-main"> 
           <div className="content-slider" key={index}>
               <img src={items.img} alt="certificate platform" className="platform-image"></img>
               <p>{items.name}</p>
               <p>{items.platform}</p>
               <p>{items.desc}</p>
            </div>
            </div>
           ))}
         </Slider>
        </div>
            
        </div>
    )
}

export default Certification;