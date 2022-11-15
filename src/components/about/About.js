import React from 'react';
import {motion} from "framer-motion"
import "./about.css"
import ME from "../../assets/IMG_20210325_101154_362.jpg"
import {FaAward} from "react-icons/fa"
import {TbUsers} from "react-icons/tb"
import {VscProject} from "react-icons/vsc"

const textAnimation = {
    hidden: {
        y:100,
        opacity:0,
    },
    visible: custom => ( {
        y: 0,
        opacity:1,
        transition: {delay: custom * 0.2}
    })
}

const boxAnimation = {
    hidden: {
        x:-100,
        opacity:0,
    },
    visible: custom => ( {
        x: 0,
        opacity:1,
        transition: {delay: custom * 0.2}
    })
}

const boxRightAnimation = {
    hidden: {
        x:100,
        opacity:0,
    },
    visible: custom => ( {
        x: 0,
        opacity:1,
        transition: {delay: custom * 0.2}
    })
}

const boxRightContentAnimation = {
    hidden: {
        y:50,
        opacity:0,
    },
    visible: custom => ( {
        y: 0,
        opacity:1,
        transition: {delay: custom * 0.2}
    })
}




function About() {
    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        id='about'
        className='about'
        >
            <motion.h5 custom={1} variants={textAnimation} className='about__subtitle'>Get To Know</motion.h5>
            <motion.h2 custom={2} variants={textAnimation}>About Me</motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className="about__container container"
            >
                <motion.div custom={1} variants={boxAnimation} className="about__me">
                    <img className='about__me-img' src= {ME} alt="" />
                </motion.div>

                <motion.div  custom={2} variants={boxRightAnimation} className="about__content ">
                    <ul className="about__cards card__list">
                        <li  className="card__list-item card">
                            <FaAward className='card__icon'/>
                            <h5 className='card__title'>Experience</h5>
                            <small className='card__subtitle'>0</small>
                        </li>

                        <li custom={6} variants={boxRightContentAnimation} className="card__list-item card">
                            <TbUsers className='card__icon'/>
                            <h5 className='card__title'>Clients</h5>
                            <small className='card__subtitle'>0</small>
                        </li>

                        <li custom={7} variants={boxRightContentAnimation} className="card__list-item card">
                            <VscProject className='card__icon'/>
                            <h5 className='card__title'>Projects</h5>
                            <small className='card__subtitle'>40+</small>
                        </li>
                    </ul>

                    <p custom={8} variants={boxRightContentAnimation} className="about__desc">
                        I can help you create a variety of great responsive websites
                    </p>

                    <a custom={9} variants={boxRightContentAnimation} href="#contact" className="btn btn-primary">Let's Talk</a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default About;