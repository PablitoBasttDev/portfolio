import React from 'react'
import './Banner.css'
import {animated, useSpring} from 'react-spring'

const Banner = () =>{
    
    const fadeIn = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100px)' }, delay: 1200, config: {duration: 700} })

    return(

        <section className='banner' id='home'>
            <animated.div style={fadeIn} className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title-banner'>
                            Hi, I'm Pablo Giordano
                        </h1>
                        <h3 className='subtitle'>
                            Front-End Developer
                        </h3>
                    </div>
                <div className='row'>
                    <div className='col-xl-3 col-md-2'></div>
                    <div className='col-xl-6 col-md-8'>
                        <p className='description'>
                            Ea enim laboris consequat tempor eu duis. Pariatur occaecat mollit labore irure Lorem laboris exercitation magna. Veniam nulla qui magna reprehenderit consectetur aliqua esse voluptate veniam Lorem aliquip ut sint. Aute quis ipsum ipsum anim do minim dolor aliqua nulla officia amet Lorem irure incididunt. Aute eu pariatur veniam irure id commodo.
                        </p>
                    </div>
                    <div className='col-xl-3 col-md-2'></div>
                </div>
                </div>
            </animated.div>
        </section>
    )
}

export default Banner
