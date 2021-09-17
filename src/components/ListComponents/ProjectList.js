import React, { useState } from 'react'
import Project from './Project.js'
import ProjectFilter from './ProjectFilter.js'
import styles from './ProjectList.module.css'

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

    const projectListItem = filterProjectList.map((project) => (<div className="col-lg-4 col-md-6 col-sm-12" style={{ paddingTop: "20px" }}><Project onDeleteClick={onDeleteClick} project={project} /></div>))

    return (
        <div className={styles.backgroundImg}>
            <div className={styles.FilterArea}>
                <ProjectFilter filterProject={onFilterChanged} />
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
