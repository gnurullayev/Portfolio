import React from 'react';
import "./experience.css"

import {AiOutlineHtml5} from "react-icons/ai"
import {IoLogoCss3} from "react-icons/io"
import {BsFillBootstrapFill} from "react-icons/bs"
import {SiSass} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"
import {GrReactjs} from "react-icons/gr"
import {SiRedux} from "react-icons/si"

function Experience(props) {
    return (
        <section id='skills' className='skills'>
            <h5 className='skills__subtitle'>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="skills__container container">
                <ul className="scills__list">
                    <li className="skills__item">
                        <AiOutlineHtml5 className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>HTML</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <IoLogoCss3 className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>CSS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <BsFillBootstrapFill className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>Bootstrap</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <SiSass className = "skills__icon"/>

                        <div className='skills__content-right'>
                            <h4 className='skills__name'>SCSS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>
                </ul>

                <ul className="scills__list">
                    <li className="skills__item">
                        <IoLogoJavascript className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>JS</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <GrReactjs className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REACT</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <SiRedux className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REDUX</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>

                    <li className="skills__item">
                        <SiRedux className = "skills__icon"/>
                        
                        <div className='skills__content-right'>
                            <h4 className='skills__name'>REDUX-TOOLKIT</h4>
                            <small className='skills__comment text-light'>Intermediate</small>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;