import React from 'react'
import './Banner.css'
import {animated, useSpring} from 'react-spring'

const Banner = () =>{
    
    const fadeIn = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100px)' }, delay: 2100, config: {duration: 700} })

    return(
        <section className='banner' id='home'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title-banner tracking-in-expand'>
                            Hi, I'm Pablo Giordano
                        </h1>
                        <animated.h3 className='subtitle' style={fadeIn}>
                            Front-End Developer
                        </animated.h3>
                    </div>
                <div className='row'>
                    <div className='col-xl-3 col-md-2'></div>
                    <div className='col-xl-6 col-md-8'>
                        <animated.p className='description' style={fadeIn}>
                            Ea enim laboris consequat tempor eu duis. Pariatur occaecat mollit labore irure Lorem laboris exercitation magna. Veniam nulla qui magna reprehenderit consectetur aliqua esse voluptate veniam Lorem aliquip ut sint. Aute quis ipsum ipsum anim do minim dolor aliqua nulla officia amet Lorem irure incididunt. Aute eu pariatur veniam irure id commodo.
                        </animated.p>
                    </div>
                    <div className='col-xl-3 col-md-2'></div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
