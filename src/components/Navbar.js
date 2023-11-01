import React from "react"
import './Navbar.css'
import { useState, useEffect } from "react"
import {animated, useSpring} from 'react-spring'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [isFixed, setIsFixed] = useState(false);
    
    const handleClick = (link) => {
        setActiveLink(link)
    }

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 25){
                setIsFixed(true)
            } else{
                setIsFixed(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const fadeIn = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-50px)' }, config: {duration: 800} })
    const navbarClass = isFixed ? 'navbar-fixed' : '';
 
    return(
        <animated.nav style={fadeIn} className={`navbar navbar-expand-lg bg-body-tertiary ${navbarClass}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"  onClick={() => handleClick('home')}>PablitoBastt<span>Dev</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} id='home-link' aria-current="page" href="#" onClick={() => handleClick('home')}>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} id='skills-link' href="#skills" onClick={() => handleClick('skills')}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} id='projects-link' href="#projects" onClick={() => handleClick('projects')}>Proyectos</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <div className='social-icon'>
                        <a href='https://twitter.com/PablitoBastt'><i className="fa-brands fa-x-twitter"></i></a>
                        <a href='https://github.com/PablitoBasttDev'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/giordano-pablo/'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </span>
                <a className='button-contact' href='#contact'>Contact Me!</a>
                </div>
            </div>
        </animated.nav>
    )
}

export default Navbar