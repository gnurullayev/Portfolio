import React, { useContext, useState } from 'react';
import "./nav.css"
import {AiFillHome } from 'react-icons/ai';
import {AiOutlineUser } from 'react-icons/ai';
import {BiBookBookmark } from 'react-icons/bi';
import {RiProjectorFill } from 'react-icons/ri';
import {TbMessage } from 'react-icons/tb';
import { ActiveCreateContext } from '../../context/ActiveContekst';

function Nav() {

    const {active, setActive} = useContext(ActiveCreateContext)


    const activeHandler = (value) => {
        setActive(value)
    }
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <a 
                onClick={() => activeHandler("home")}
                className= {`nav-link ${active === "home" && "active"}`} 
                href="#">
                    <AiFillHome/>
                </a>
            </li> 

            <li className='nav-item'>
                <a 
                onClick={() => activeHandler("about")}
                className= {`nav-link ${active === "about" && "active"}`} 
                href="#about">
                    <AiOutlineUser/>
                </a>
            </li>   

            <li className='nav-item'>
                <a 
                onClick={() => activeHandler("experience")}
                className= {`nav-link ${active === "experience" && "active"}`} 
                href="#skills">
                    <BiBookBookmark/>
                </a>
            </li>  

            <li className='nav-item'>
                <a 
                onClick={() => activeHandler("portfolio")}
                className= {`nav-link ${active === "portfolio" && "active"}`} 
                href="#portfolio">
                    <RiProjectorFill/>
                </a>
            </li>  

            <li className='nav-item'>
                <a 
                onClick={() => activeHandler("contact")}
                className= {`nav-link ${active === "contact" && "active"}`} 
                href="#contact">
                    <TbMessage/>
                </a>
            </li>  

        </ul>
    );
}

export default Nav;