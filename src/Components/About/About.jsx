import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
    return (
        <div  id='about'className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt="Profile" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Motivated computer science graduate with a strong foundation in programming and software development. Excited to apply skills and knowledge in a professional environment, contribute to meaningful projects, and collaborate with teams to drive innovation and growth in the field of technology.</p>
                        <p>ok</p>
                    </div>
                    <div className='about-skills'>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>C programming</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>C++</p><hr style={{ width: "66%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "45%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="achievement">
                    <h1>0</h1>
                    <p>Fresher</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>0</h1>
                    <p>Fresher</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>Fresher</h1>
                    <p>I created more projects in Python so I know this language very well.</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>0</h1>
                    <p>Fresher</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>0</h1>
                    <p>Fresher</p>
                </div>
            </div>
        </div>
    );
}

export default About;