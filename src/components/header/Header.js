import {useContext} from 'react';
import {motion} from "framer-motion"
import "./header.css"
import CV from "../../assets/Nurullayev G'ayrat .pdf"
import ME from "../../assets/IMG_20210325_101154_362.jpg"
import HeaderSocials from './HeaderSocials';
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

const downAnimation = {
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

function Header() {
    const {setActive} = useContext(ActiveCreateContext)

    const activeHandler = (value) => {
        setActive(value)
    }
    return (
        <motion.header
        initial = "hidden"
        whileInView="visible"
        className='header'
        >
            <div className="container header__container">
                <motion.h5 custom={1}  variants={textAnimation}>Hello I'm</motion.h5>
                <motion.h1 custom={2} variants={textAnimation}>G'ayrat Nurullayev</motion.h1>
                <motion.h5 custom={3} variants={textAnimation} className='text-light'>Frontend developer</motion.h5>

                <motion.div custom={4}  variants={textAnimation} className='cta'>
                    <a className='btn' href={CV} download>Download CV</a>
                    <a className='btn btn-primary' href="#contact" onClick={() => activeHandler("contact")}>Contact</a>
                </motion.div>

                <HeaderSocials/>

                <motion.div custom={5}  variants={textAnimation} className="me">
                    <img className='my-img' src= {ME} alt="Me" />
                </motion.div>

                <motion.a 
                custom={1}
                variants={downAnimation}
                href="#contact" 
                className="scroll__down"
                >
                    <span className='scroll__down-span'>Scroll Down</span>
                </motion.a>
            </div>
        </motion.header>
    );
}

export default Header;