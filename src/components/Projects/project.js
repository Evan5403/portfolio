import React from 'react';
import './project.css';
import Portfolio from '../../assets/logo3.jpg';
import Ims from '../../assets/ims_thumbnail.webp';
import Ecommerce from '../../assets/ecommerce_thumbnail.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projecttitle'>My Portfolio</h2>
            <span className='projectDesc'>My GitHub showcases a range of projects that highlight my technical expertise and passion for problem-solving through technology</span>
            <div className='projectImgs'>
                <a href='https://github.com/Evan5403/Inventory-Management-System_1.git' target='_blank'> <img src={Ims} alt='' className='projectImg' /> </a>
                <a href='https://github.com/Evan5403/JamboShop-E-commerce-System.git' target='_blank'> <img src={Ecommerce} alt='' className='projectImg' /> </a>
                <a href='https://evan5403.github.io/portfolio/' target='_blank'> <img src={Portfolio} alt='' className='projectImg' /> </a>
            </div>
        </section>
    )
}

export default Projects
