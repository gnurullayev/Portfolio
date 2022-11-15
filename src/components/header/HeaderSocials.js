import React, { forwardRef } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import {BsLinkedin } from 'react-icons/bs';
import {FaTwitterSquare } from 'react-icons/fa';
import {motion} from "framer-motion"

const socialAnimation = {
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
const HeaderSocials = forwardRef((props,ref) => {
    return (
        <motion.ul 
        initial = "hidden"
        whileInView="visible"
        className='header__socials'
        ref={ref}
        > 
            <motion.li 
            custom={1}
            variants={socialAnimation}
            >
                <a href="https://www.linkedin.com/in/g-ayrat-nurullayev-481b2b245/" target="_blank"><BsLinkedin className='social_icon'/></a>
            </motion.li>

            <motion.li
            custom={2}
            variants={socialAnimation}
            >
                <a href="https://github.com/gnurullayev" target="_blank"><FaGithubSquare className='social_icon'/></a>
            </motion.li>

            <motion.li
            custom={3}
            variants={socialAnimation}
            >
                <a href="https://twitter.com/home" target="_blank"><FaTwitterSquare className='social_icon'/></a>
            </motion.li>
        </motion.ul>
    );
})

export default HeaderSocials;