/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import {motion} from "framer-motion"
import "./footer.css"
import { FaGithubSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import {FaTwitterSquare } from 'react-icons/fa';
import { ActiveCreateContext } from '../../context/ActiveContekst';

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

function Footer() {

    const {active, setActive} = useContext(ActiveCreateContext)


    const activeHandler = (value) => {
        setActive(value)
    }

    return (
        <motion.footer
        initial="hidden"
        whileInView="visible"
        className='footer'
        >
            <div className="footer__container container">
                <div className="footer__inner">
                    <motion.ul custom={1} variants={textAnimation} className='footer__list'>
                        <li className="footer__item">
                            <a 
                             onClick={() => activeHandler("home")}
                             className= {`footer__link ${active === "home" && "active1"}`} 
                            href="#" >
                                Home
                            </a>
                        </li>

                        <li className="footer__item">
                            <a 
                            onClick={() => activeHandler("about")}
                            className= {`footer__link ${active === "about" && "active1"}`}
                            href="#about" >
                                About
                            </a>
                        </li>

                        <li className="footer__item">
                            <a 
                            onClick={() => activeHandler("experience")}
                            className= {`footer__link ${active === "experience" && "active1"}`}
                            href="#skills">
                                Skills
                            </a>
                        </li>

                        <li 
                        className="footer__item">
                            <a 
                            onClick={() => activeHandler("portfolio")}
                            className= {`footer__link ${active === "portfolio" && "active1"}`} 
                            href="#portfolio" >
                                Portfolio
                            </a>
                        </li>

                          <li className="footer__item">
                            <a 
                            onClick={() => activeHandler("contact")}
                            className= {`footer__link ${active === "contact" && "active1"}`}  
                            href="#contact" >
                                Contact
                            </a>
                        </li> 
                    </motion.ul>

                    <motion.ul custom={2} variants={textAnimation} className="footer__socials socials">
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://www.linkedin.com/in/g-ayrat-nurullayev-481b2b245/" target="_blank"><BsLinkedin/></a>
                        </li>

                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://github.com/gnurullayev" target="_blank"><FaGithubSquare/></a>
                        </li>

                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://twitter.com/home" target="_blank"><FaTwitterSquare/></a>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;