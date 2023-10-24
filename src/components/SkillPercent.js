import React from 'react'
import './SkillPercent.css'
import {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'


const SkillPercent = (props) => {

    const percent = props.percent;
    const skill = props.skill;

    const [currentPercent, setCurrentPercent] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true
    })
    
    let interval;

    useEffect(()=>{
        if (currentPercent < percent && inView) {
            interval = setInterval(() => {
                setCurrentPercent((prevPercent) => prevPercent + 1);
            }, 30);
        }

        return () => {
            clearInterval(interval);
        };

    },[percent,currentPercent, inView])

    return (
        <div className='col-4' ref={ref}>
            <div className='container-progress'>
                <div className='progress-bar' style={{background: `conic-gradient(var(--main-color) ${currentPercent*3.6}deg, #333 0deg)`}}>
                    <h3 className='progress-value'>{`${currentPercent}%`}</h3>
                    <h4>{skill}</h4>
                </div>
            </div>
        </div>
    )
}

export default SkillPercent