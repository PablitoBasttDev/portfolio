import React from 'react'
import './Footer.css'


const Footer = () => {


    return(
        <div className='container-footer'>
            <p className="navbar-brand">PablitoBastt<span>Dev</span></p>
            <div>
                <div className='social-icon'>
                    <a href='https://twitter.com/PablitoBastt'><i className="fa-brands fa-x-twitter"></i></a>
                    <a href='https://github.com/PablitoBasttDev'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/giordano-pablo/'><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className='develop'>
                    <p>Develop by PablitoBasttDev - CopyRight 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer