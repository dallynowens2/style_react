import React from 'react'
import NewProjectForm from './NewProjectForm'

function NewProject({onAddProject}) {
    const saveProjectDataHandler = (enteredProjectData) => {
        const projectData ={
            id: Math.random(),
            ...enteredProjectData,
        }
        onAddProject(projectData);
    }
    
    return (
        <div>
            <NewProjectForm onSaveProjectData = {saveProjectDataHandler} />
        </div>
    )
}

export default NewProject
