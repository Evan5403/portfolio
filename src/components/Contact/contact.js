import React, { useRef } from 'react';
import './contact.css';
import Github from '../../assets/github.jpg';
import IBM from '../../assets/ibmskillsbuild.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_4wxkv94', 'template_cnmov4p', form.current, {
        publicKey: 'XtD-U9WjiyNKvLkCE',
        })
        .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
    return(
        <section id='contactpage'>
            <div id='certifications'>
                <h1 className='contactpageTitle'>Certifications</h1>
                <div className='links'>
                    <a href='https://www.credly.com/badges/297be881-fd73-442f-94e8-71af650ab150/public_url' target='_blank'> <img src={IBM} alt='IBM_logo' className='link skillsbuild' /> </a>
                </div>
                <p className='certDesc'>
                    IBM SkillsBuild: Data Fundamentals (Credly Badge):
                    "This certification demonstrates my foundational knowledge in data analytics and the data science ecosystem. I have gained insights into key concepts such as data methodologies, data cleaning, refinement, and visualization using IBM Watson Studio. It also reflects my growing interest in the field of data science and my awareness of the skills required for success in data-driven roles."
                </p>
            </div>
            <div id='contact'>
                <h1 className='contactpageTitle'>Contact Me</h1>
                <span className='contactDesc'>I'm always open to new opportunities, collaborations, or just a friendly tech chat. If you'd like to get in touch, feel free to drop me a message using the form below — whether it’s feedback, project inquiries, or anything in between. I’ll get back to you as soon as I can!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='from_name' className='name' placeholder='Your Name' />
                    <input type='email' name='from_email' className='email' placeholder='Your Email Address' />
                    <textarea name='message' className='msg' rows="5" placeholder='Email Body'></textarea>
                    <button type='submit' value='Send' className='submitBtn' >Submit</button>
                    <div className='links'>
                        <img src={Github} alt='Github_logo' className='link' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact