import {useContext} from 'react';
import "./header.css"
import CV from "../../assets/Profile.pdf"
import ME from "../../assets/IMG_20210325_101154_362.jpg"
import HeaderSocials from './HeaderSocials';
import { ActiveCreateContext } from '../../context/ActiveContekst';

function Header(props) {
    const {setActive} = useContext(ActiveCreateContext)

    const activeHandler = (value) => {
        setActive(value)
    }
    return (
        <header className='header'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>G'ayrat Nurullayev</h1>
                <h5 className='text-light'>Frontend developer</h5>

                <div className='cta'>
                    <a className='btn' href={CV} download>Download CV</a>
                    <a className='btn btn-primary' href="#contact" onClick={() => activeHandler("contact")}>Contact</a>
                </div>

                <HeaderSocials/>

                <div className="me">
                    <img className='my-img' src= {ME} alt="Me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;