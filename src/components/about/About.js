import React from 'react';
import "./about.css"
import ME from "../../assets/IMG_20210325_101154_362.jpg"
import {FaAward} from "react-icons/fa"
import {TbUsers} from "react-icons/tb"
import {VscProject} from "react-icons/vsc"

function About() {
    return (
        <section id='about' className='about'>
            <h5 className='about__subtitle'>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about__container container">
                <div className="about__me">
                    <img className='about__me-img' src= {ME} alt="" />
                </div>

                <div className="about__content">
                    <ul className="about__cards card__list">
                        <li className="card__list-item card">
                            <FaAward className='card__icon'/>
                            <h5 className='card__title'>Experience</h5>
                            <small className='card__subtitle'>0</small>
                        </li>

                        <li className="card__list-item card">
                            <TbUsers className='card__icon'/>
                            <h5 className='card__title'>Clients</h5>
                            <small className='card__subtitle'>0</small>
                        </li>

                        <li className="card__list-item card">
                            <VscProject className='card__icon'/>
                            <h5 className='card__title'>Projects</h5>
                            <small className='card__subtitle'>40+</small>
                        </li>
                    </ul>

                    <p className="about__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, temporibus atque! Ex, cupiditate quasi porro soluta magnam nisi necessitatibus 
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;