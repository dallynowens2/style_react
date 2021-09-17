import React, {useState} from 'react'

function NewProjectForm({onSaveProjectData}) {
    const [enteredProjectName, setEnteredProjectName] = useState('');
    const [enteredProjectLanguage, setEnteredProjectLanguage] = useState('');
    const [enteredProjectDescription, setEnteredProjectDescription] = useState('');

    const projectNameHandler = (event) => {
        setEnteredProjectName(event.target.value);
    }

    const projectLanguageHandler = (event) => {
        setEnteredProjectLanguage(event.target.value);
    }

    const projectDescriptionHandler = (event) => {
        setEnteredProjectDescription(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const projectData ={
            projectName: enteredProjectName,
            projectLanguage: enteredProjectLanguage,
            projectDescription: enteredProjectDescription,
        }
        onSaveProjectData(projectData);
        setEnteredProjectName('');
        setEnteredProjectLanguage('');
        setEnteredProjectDescription('');
    }

    return (
        <form onSubmit= {submitHandler}>
            <div>
                <div>
                    <label>Project Name</label>
                    <input type='text' value={enteredProjectName} onChange={projectNameHandler}/>
                </div>
                <div>
                    <label>Project Language</label>
                    <input type='text' value={enteredProjectLanguage} onChange={projectLanguageHandler}/>
                </div>
                <div>
                    <label>Project Description</label>
                    <input type='text' value={enteredProjectDescription} onChange={projectDescriptionHandler}/>
                </div>
                <button type='submit'> Add New Project</button>
            </div>
        </form>
    )
}

export default NewProjectForm
