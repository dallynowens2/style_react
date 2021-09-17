import React from 'react'
import imageComingSoon from './image-coming-soon-placeholder.png'

function Project({ project, onDeleteClick }) {
    const onDeleteClickHandler = (event) => {
        onDeleteClick(event);
    }

    return (
        <div className="card" style={{ width: '330px', paddingLeft: "5px" }}>
            <img src={imageComingSoon} className="card-img-top" alt="img" style={{ width: '100%', height: "60%" }} />
            <div className="card-body">
                <div className="card-title">
                    {project.projectName}
                </div>
                <div className="card-text">
                    {project.projectDescription}
                </div>
                <button class="btn btn-danger" style={{ width: '50%', alignContent: "center" }} onClick={() => onDeleteClickHandler(project)}>Delete Project</button>
            </div>
            
        </div>
    )
}

export default Project
