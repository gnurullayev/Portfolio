/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./portfolio.css"
import {motion} from "framer-motion"
import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"
import img4 from "../../assets/portfolio4.jpg"
import img5 from "../../assets/portfolio5.jpg"
import img6 from "../../assets/portfolio6.jpg"
import img7 from "../../assets/portfolio7.jpg"

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

const boxRightContentAnimation = {
    hidden: {
        y:50,
        opacity:0,
    },
    visible: custom => ( {
        y: 0,
        opacity:1,
        transition: {delay: custom * 0.1}
    })
}

function Portfolio(props) {
    return (
        <motion.section 
        initial="hidden"
        whileInView="visible"
        id='portfolio'
        >
            <motion.h5 custom={1} variants={textAnimation} className='portfolio__subtitle'>My Recent Work</motion.h5>
            <motion.h2 custom={2} variants={textAnimation}>Portfolio</motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.1}}
            className="portfolio__container container"
            >
                <ul className="portfolio__list">
                    <motion.li custom={3} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img1} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Website for movies</h3>

                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/omdbAPI" className="btn" target= "_blank">GitHub</a>
                            <a href="https://omdb-api-lemon.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={4} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img2} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Site to buy game characters</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/Game-shoping-card" className="btn" target= "_blank">GitHub</a>
                            <a href="https://game-shoping-card-wbov.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={5} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img3} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Food website</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/dishes-react" className="btn" target= "_blank">GitHub</a>
                            <a href="https://dishes-react.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={6} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img4} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Todo</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/Twiter-analog" className="btn" target= "_blank">GitHub</a>
                            <a href="https://twiter-analog-syrz.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={7} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img5} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Twitter clone</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/tweeter-clone" className="btn" target= "_blank">GitHub</a>
                            <a href="https://tweeter-clone-two.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={8} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img6} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Blog vue-app</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/vue-app" className="btn" target= "_blank">GitHub</a>
                            <a href="https://vue-app-opal.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>

                    <motion.li custom={9} variants={boxRightContentAnimation} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img7} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Todo vue-app</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/vue-todo" className="btn" target= "_blank">GitHub</a>
                            <a href="https://vue-todo-chi.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </motion.li>
                </ul>
            </motion.div>
        </motion.section>
    );
}

export default Portfolio;