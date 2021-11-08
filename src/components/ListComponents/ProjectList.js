import React, { useState } from 'react'
import Project from './Project.js'
import ProjectFilter from './ProjectFilter.js'
import styles from './ProjectList.module.css'
import AboutComponent from '../AboutComponent/AboutComponent.js'

function ProjectList({ projectList, onDelete }) {
    const [filteredProject, setFilteredProject] = useState('')
    const [newProjectList, setNewProjectList] = useState(projectList)
    const onFilterChanged = (input) => {
        setFilteredProject(input)
    };

    const onDeleteClick = (project) => {
        onDelete(project);
    }

    const filterProjectList = projectList.filter(project => {
        return project.projectName.includes(filteredProject);
    });

    const projectListItem = filterProjectList.map((project) => (<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" style={{ paddingTop: "20px" }}><Project onDeleteClick={onDeleteClick} project={project} /></div>))

    return (
        <div className={styles.backgroundImg}>
            
            <div className={styles.FilterArea}>
                <AboutComponent/>
            </div>
            <div className="justify-content-center container-fluid">
                <h1 className="text-light display-2">Projects</h1>
            </div>
            <div className="container">
                
                <div className="row">
                    {projectListItem}
                </div>
            </div>
        </div>

    )
}

export default ProjectList
