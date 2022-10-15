import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import {FaTwitterSquare } from 'react-icons/fa';

function HeaderSocials(props) {
    return (
        <ul className='header__socials'> 
            <li>
                <a href="https://www.linkedin.com/in/g-ayrat-nurullayev-481b2b245/" target="_blank"><BsLinkedin/></a>
            </li>

            <li>
                <a href="https://github.com/gnurullayev" target="_blank"><FaGithubSquare/></a>
            </li>

            <li>
                <a href="https://twitter.com/home" target="_blank"><FaTwitterSquare/></a>
            </li>
        </ul>
    );
}

export default HeaderSocials;