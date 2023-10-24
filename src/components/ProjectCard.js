import React from 'react'
import './ProjectCard.css'

const projectImg = require.context('../assets/img', true)

const ProjectCard = (props) => {
    const title = props.title
    const imgUrl = props.imgUrl
    const description = props.description
    const url = props.url

    console.log(url)

    return (
        <div className="card" style={{width: '100%'}}>
            <img src={projectImg(`./${imgUrl}.png`)} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className='btn btn-primary' target='_blank'>Go to the App</a>
            </div>
        </div>
    )
}

export default ProjectCard