import React,{useRef} from 'react';
import {motion} from "framer-motion"
import "./contact.css"
import {MdEmail} from "react-icons/md"
import {AiFillPhone} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import emailjs from '@emailjs/browser';

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

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6gga0q8', 'template_urtwm38', form.current, 'vA2jLst7fRVXhUCt5')
        form.current.reset()
    };

    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        id ="contact"
        >
            <motion.h5 custom={1} variants={textAnimation} className='portfolio__subtitle'>Get In Touch</motion.h5>
            <motion.h2 custom={2} variants={textAnimation}>Contact Me</motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className="contact__container container"
            >
                <motion.ul custom={1} variants={boxAnimation} className="contact__list">
                    <li className="contact__item">
                        <MdEmail className='contact__item-icon'/>
                        <h4 className='contact__item-title'>Email</h4>
                        <h5 className='contact__item-subtitle'>nurullayevgayrat73@gmail.com</h5>
                        <a href="mailto:nurullayevgayrat73@gmail.com" className="contact__item-link">Send a message</a>
                    </li>

                    <li className="contact__item">
                        <AiFillPhone className='contact__item-icon'/>
                        <h4 className='contact__item-title'>Phone number</h4>
                        <h5 className='contact__item-subtitle'>+998901824946</h5>
                        <a href="tel:+998901824946" className="contact__item-link">Tell</a>
                    </li>

                    <li className="contact__item">
                        <BsMessenger className='contact__item-icon'/>
                        <h4 className='contact__item-title'>Messenger</h4>
                        <h5 className='contact__item-subtitle'>egatortutorials</h5>
                        <a href="https://m.me/gayrat.nurullayev.79" className="contact__item-link">Send a message</a>
                    </li>
                </motion.ul>

                <motion.form custom={2} variants={boxRightAnimation}  ref={form} className="contact__form form" onSubmit={sendEmail}>
                    <input 
                    className='form__control' 
                    type="text" 
                    name="name"  
                    placeholder='Your full name'
                    required/>

                    <input 
                    className='form__control'
                    type="email" 
                    name="email" 
                    placeholder='Your email'required/>

                    <textarea 
                    className='form__control'
                    name="message" 
                    cols="30" 
                    rows="10" 
                    required
                       placeholder='Your message'></textarea>

                    <button type='submit' className='btn btn-primary'>Send message</button>
                </motion.form>
            </motion.div>
        </motion.section>
    );
}

export default Contact;