import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'


const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Bo Sichelstiel,</span> a fullstack developer based out of Georgia</h1>
            <p>I am a fullstack developer with 5 years experience. I graduated from the University of Georgia.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
