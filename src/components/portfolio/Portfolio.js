/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./portfolio.css"

import img1 from "../../assets/portfolio1.jpg"
import img2 from "../../assets/portfolio2.jpg"
import img3 from "../../assets/portfolio3.jpg"
import img4 from "../../assets/portfolio4.jpg"
import img5 from "../../assets/portfolio5.jpg"
function Portfolio(props) {
    return (
        <section id='portfolio'>
            <h5 className='portfolio__subtitle'>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container container">
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img1} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Website for movies</h3>

                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/omdbAPI" className="btn" target= "_blank">GitHub</a>
                            <a href="https://omdb-api-lemon.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </li>

                    <li className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img2} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Site to buy game characters</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/Game-shoping-card" className="btn" target= "_blank">GitHub</a>
                            <a href="https://game-shoping-card-wbov.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </li>

                    <li className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img3} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Food website</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/dishes-react" className="btn" target= "_blank">GitHub</a>
                            <a href="https://dishes-react.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </li>

                    <li className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img4} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Todo</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/Twiter-analog" className="btn" target= "_blank">GitHub</a>
                            <a href="https://twiter-analog-syrz.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </li>

                    <li className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img className="portfolio__img" src= {img5} alt="portfolio img"  />
                        </div>
                        
                        <h3 className="portfolio__item-title">Twitter clone</h3>
                        
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/gnurullayev/tweeter-clone" className="btn" target= "_blank">GitHub</a>
                            <a href="https://tweeter-clone-two.vercel.app/" className="btn btn-primary" target= "_blank">Live Demo</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;