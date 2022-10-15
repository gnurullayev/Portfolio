/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import "./footer.css"
import { FaGithubSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import {FaTwitterSquare } from 'react-icons/fa';
import { ActiveCreateContext } from '../../context/ActiveContekst';

function Footer() {

    const {active, setActive} = useContext(ActiveCreateContext)


    const activeHandler = (value) => {
        setActive(value)
    }

    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__inner">
                    <ul className='footer__list'>
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
                    </ul>

                    <ul className="footer__socials socials">
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://www.linkedin.com/in/g-ayrat-nurullayev-481b2b245/" target="_blank"><BsLinkedin/></a>
                        </li>

                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://github.com/gnurullayev" target="_blank"><FaGithubSquare/></a>
                        </li>

                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="https://twitter.com/home" target="_blank"><FaTwitterSquare/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;