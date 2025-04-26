import React from "react";
import './intro.css';
import bg from '../../assets/evanso-1.jpg';
import {Link} from 'react-scroll';
import { BsBag } from "react-icons/bs";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introTxt">I'm <span className="introName">Evans</span> <br/> Fullstack Developer</span> 
                <p className="introPar">Am a fourth year student undetaking Bachelor in Information Technology at KCA University</p>
                {/* <Link><button className="btn"><BsBag /> <b>Hire Me</b></button></Link> */}
            </div>
            <img src={bg} alt="Profile" className="bgImg"/>
        </section>
    );
}

export default Intro;