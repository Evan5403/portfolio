import React from 'react';
import './skills.css';
import Python from '../../assets/python.png';
import Java from '../../assets/java.jpg';
import Php from '../../assets/php.png';
import Js from '../../assets/js.png';
import Reactimg from '../../assets/react.png';
import Bootstrap from '../../assets/Bootstrap.svg';
import AndroidStudio from '../../assets/Android_Studio_Logo_(2023).svg.png';
import Frontend from '../../assets/front-end.png';
import Backend from '../../assets/back-end.png';
import Git from '../../assets/git.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>Skills Learned</span>
            <span className='skillDesc'>Throughout my year of study, I have gained a diverse set of skills that includes both technology and practical problem-solving. My coursework and hands-on projects have equipped me with expertise in web development, programming, data structures and algorithms, and IT fundamentals, all while fostering a strong foundation in analytical thinking and collaborative teamwork. These skills reflect my commitment to leveraging technology to create impactful and efficient solutions. </span>
            <div className='skillBars'>
                <div class='skillBar'>
                    <img src={Frontend} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Front-End</h2>
                        <p> Languages/Tools: HTML, CSS, JavaScript </p>
                        <p> Frameworks/Libraries: React </p>
                    </div>
                </div>
                <div class='skillBar'>
                    <img src={Backend} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Back-End</h2>
                        <p>Languages: PHP, Python, Node.js, Java</p>
                        <p>Databases: MySQL, MongoDB</p>
                    </div>
                </div>
                <div class='skillBar'>
                    <img src={Git} alt='' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Version Control</h2>
                        <p>Git/GitHub</p>
                    </div>
                </div>

                {/* <div className='skillBar'>
                    <h3 className='headingSection'>Front-end</h3>
                    <div className='lists'>
                        <ul>
                            <li>
                            <img src={Python} alt='python_img' className='skillBarImg' />
                            <h4>Python</h4>
                            </li>
                            <li>
                            <img src={Java} alt='java_img' className='skillBarImg' />
                            <h4>Java</h4>
                            </li>
                            <li>
                            <img src={Js} alt='js_img' className='skillBarImg' />
                            <h4>Javascript</h4>
                            </li>
                            <li>
                            <img src={Php} alt='' className='skillBarImg' />
                            <h4>PhP</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='skillBar'>
                    <h3 className='headingSection'>Back-end</h3>
                    <div className='lists'>
                        <ul>
                            <li>
                            <img src={Reactimg} alt='react_img' className='skillBarImg' />
                            <h4>ReactJS</h4>
                            </li>
                            <li>
                            <img src={Bootstrap} alt='bootstrap_img' className='skillBarImg' />
                            <h4>Bootstrap</h4>
                            </li>
                            <li>
                            <img src={AndroidStudio} alt='androidstudio_img' className='skillBarImg' />
                            <h4>Android Studio</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='skillBar'>
                    <h3 className='headingSection'>Other Skills</h3>
                    <div className='lists'>
                        <ul>
                            <li><h4>Python DSA</h4></li>
                            <li><h4>Software Development Principles</h4></li>
                        </ul>
                    </div>
                </div> */}

            </div>
        </section>
    );
}

export default Skills 