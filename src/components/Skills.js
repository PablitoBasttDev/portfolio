import './Skills.css'
import React from 'react'
import SkillPercent from './SkillPercent'
import { useInView } from 'react-intersection-observer'

const Skills = () => {

    const percents = {
        HTML: 85,
        CSS: 95,
        JAVASCRIPT: 80,
        REACTJS: 80,
        ALGORITHMS: 90,
        DESIGN: 75
    }

    const SKILLS = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'ALGORITHMS', 'DESIGN']

    return(
        <section id='skills' className='container-fluid'>
            <div className='row'>
                <div className='col-xl-12'>
                    <h3>SKILLS</h3>
                </div>
            </div>
            <div className='row'>
                {
                    SKILLS.slice(0,3).map( e => {  return (<SkillPercent skill={e} percent={percents[e]}/>) })
                }             
            </div>
            <div className='row'>
                {
                    SKILLS.slice(3).map( e => {  return (<SkillPercent skill={e} percent={percents[e]}/>) })
                } 
            </div>
        </section>
    )
}

export default Skills