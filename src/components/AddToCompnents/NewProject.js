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
        <div style={{backgroundColor: '#2b2a11'}}>
            <NewProjectForm onSaveProjectData = {saveProjectDataHandler} />
        </div>
    )
}

export default NewProject
