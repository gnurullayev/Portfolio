import React from 'react';
import "./experience.css"
import {motion} from "framer-motion"
import {AiOutlineHtml5} from "react-icons/ai"
import {IoLogoCss3} from "react-icons/io"
import {BsFillBootstrapFill} from "react-icons/bs"
import {SiSass} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
import {GrReactjs} from "react-icons/gr"
import {SiRedux} from "react-icons/si"

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

function Experience(props) {
    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        id='skills' 
        className='skills'
        >
            <motion.h5 custom={1} variants={textAnimation} className='skills__subtitle'>What Skills I Have</motion.h5>
            <motion.h2 custom={2} variants={textAnimation}>My Skills</motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className="skills__container container"
            >
                <motion.ul custom={1} variants={boxAnimation} className="scills__list">
                    <motion.li custom={3} variants={boxRightContentAnimation} className="skills__item">
                        <AiOutlineHtml5 className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>HTML</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={4} variants={boxRightContentAnimation} className="skills__item">
                        <IoLogoCss3 className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>CSS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={5}variants={boxRightContentAnimation} className="skills__item">
                        <BsFillBootstrapFill className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>Bootstrap</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={6} variants={boxRightContentAnimation} className="skills__item">
                        <SiSass className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>SCSS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>
                </motion.ul>

                <motion.ul custom={2} variants={boxRightAnimation} className="scills__list">
                    <motion.li custom={3} variants={boxRightContentAnimation} className="skills__item">
                        <IoLogoJavascript className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>JS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={4} variants={boxRightContentAnimation} className="skills__item">
                        <GrReactjs className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REACT</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={5} variants={boxRightContentAnimation} className="skills__item">
                        <SiRedux className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REDUX</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>

                    <motion.li custom={6} variants={boxRightContentAnimation} className="skills__item">
                        <SiRedux className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REDUX-TOOLKIT</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}

export default Experience;