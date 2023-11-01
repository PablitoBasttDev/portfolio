import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
    
    const projects = [
        {
            title: "Pokedex",
            description: "React + Hooks",
            imgUrl: 'projImg1',
            url: 'https://pokedex-pablitobasttdev.vercel.app/'
        },
        {
            title: "Ta-Te-Ti",
            description: "React + Hooks",
            imgUrl: 'projImg2',
            url: 'https://pablitobasttdev.github.io/ta-te-ti/'
        },
        {
            title: "Ramdom Quotes",
            description: "JavaScript + jQuery",
            imgUrl: 'projImg3',
            url: 'https://codepen.io/PablitoBasttDev/full/vYvjaZW'
        },
        {
            title: "Calculator",
            description: "React",
            imgUrl: 'projImg4',
            url: 'https://codepen.io/PablitoBasttDev/full/jOXpEyO'
        },
        {
            title: "Drum Machine",
            description: "React",
            imgUrl: 'projImg5',
            url: 'https://codepen.io/PablitoBasttDev/full/WNLyqvz'
        },
        {
            title: "MarkDown Previewer",
            description: "React",
            imgUrl: 'projImg6',
            url: 'https://codepen.io/PablitoBasttDev/full/ExGRwBq'
        },
        {
            title: "Pomodoro App",
            description: "React",
            imgUrl: 'projImg7',
            url: 'https://codepen.io/PablitoBasttDev/full/zYymLXX'
        }
    ]
    
    return (
        <section className='projects'>
            <div className='projects-container'  id='projects'>
                <h3>PROJECTS</h3>
                <div className='grid-projects'>
                    {projects.map((e,i) => 
                        <ProjectCard 
                            key = {i}
                            url={e.url}
                            description={e.description}
                            imgUrl={e.imgUrl}
                            title={e.title}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects