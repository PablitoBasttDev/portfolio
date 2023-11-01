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
                            Hola, soy Pablo Giordano
                        </h1>
                        <animated.h3 className='subtitle' style={fadeIn}>
                            Desarrollador Front-End
                        </animated.h3>
                    </div>
                <div className='row'>
                    <div className='col-xl-3 col-md-2'></div>
                    <div className='col-xl-6 col-md-8'>
                        <animated.p className='description' style={fadeIn}>
                        Soy un estudiante en busca de empleo y con ánimos de dar sus primeros pasos en el mundo laboral. 
                        Poseeo habilidades en programación, diseño de interfaces de usuario y sólidos conocimientos de lógica.  
                        Soy una persona positiva, comprometida y responsable. 
                        Este es mi portfolio personal desarrollado con React.js.
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
