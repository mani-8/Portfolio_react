import React from 'react'
import './Contact.css'
import { RiMailSendFill } from "react-icons/ri";


function Contact(){
    return(
        <div className='container contact-section' id='contact'>
            <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                  <div className='contact-form-image'>
                    <img src='https://media.istockphoto.com/id/1329698511/photo/business-man-watching-training-webinar-on-laptop-view-on-white-mockup-screen.jpg?s=612x612&w=0&k=20&c=HpTrZVxcWuHZDnc82m22alfQxKNrpN1_sYEjd0idxaM=' alt='contact form'/>
                  </div>
                </div>

                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
                 <div className='contact-design'>
                     <div className='text-center'>
                        <h5>Contact Me</h5>
                     </div>
                 </div>

                 <div className='contact-form'>
                    <label className='contact-label'>Name</label>
                    <input type='text' className='contact-control'></input>
                 </div>

                 <div className='contact-form'>
                    <label className='contact-label'>E-mail</label>
                    <input type='text' className='contact-control'></input>
                 </div>

                 <div className='contact-form'>
                    <label className='contact-label'>Job Type</label>
                    <select className='custom-select-tag'>
                     <option>Full-time</option>
                     <option>Part-time</option>
                     <option>Contract</option>
                    </select>
                 </div>

                 <div className='contact-form'>
                    <label className='contact-label'>Message</label>
                    <textarea rows='4' type='text' className='contact-control'></textarea>
                 </div>

                <div className='button-submit'>
                  <p><h5>Send</h5><RiMailSendFill className='custom-icon' size={35} /></p>
                </div>

                </div>

            </div>

        </div>
    )
}
export default Contact;