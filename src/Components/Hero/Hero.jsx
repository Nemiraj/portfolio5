import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt='Profile' />
            <h1>
                <span>I'm Nemiraj B,</span> frontend developer from Karnataka
            </h1>
            <p>Entry-level software developer with a hunger for coding challenges | Ready to contribute innovative solutions to real-world problems</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
                </div>
                <div className='hero-resume'>
                    <a href='https://drive.google.com/file/d/1qbVX5TTyHD4gZtOTeQx7LwVrdLZm2rep/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>My resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;