import React from 'react'
import './SkillPercent.css'
import {useState, useEffect} from 'react'

const SkillPercent = (props) => {

    const percent = props.percent;
    const skill = props.skill;

    const [currentPercent, setCurrentPercent] = useState(0);
    
    let interval;

    useEffect(()=>{
        if (currentPercent < percent) {
            interval = setInterval(() => {
                setCurrentPercent((prevPercent) => prevPercent + 1);
            }, 20);
        }

        return () => {
            clearInterval(interval);
        };

    },[percent,currentPercent])

    return (
        <div className='col-4'>
            <div className='container-progress'>
                <div className='progress-bar' style={{background: `conic-gradient(var(--main-color) ${currentPercent*3.6}deg, #444 0deg)`}}>
                    <h3 className='progress-value'>{`${percent}%`}</h3>
                    <h4>{skill}</h4>
                </div>
            </div>
        </div>
    )
}

export default SkillPercent