import React from "react"
import './Navbar.css'
import { useState } from "react"

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home')
     
    const handleClick = (link) => {
        setActiveLink(link)
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PablitoBastt<span>Dev</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} id='home-link' aria-current="page" href="#" onClick={() => handleClick('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} id='skills-link' href="#skills" onClick={() => handleClick('skills')}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} id='projects-link' href="#projects" onClick={() => handleClick('projects')}>Projects</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <div className='social-icon'>
                        <a href='https://twitter.com/PablitoBastt'><i className="fa-brands fa-x-twitter"></i></a>
                        <a href='https://github.com/PablitoBasttDev'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/giordano-pablo/'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </span>
                <button className='button-contact' href='#'>Contact Me!</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar