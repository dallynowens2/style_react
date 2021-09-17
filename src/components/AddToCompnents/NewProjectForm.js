import React, {useState} from 'react'
import styles from './NewProjectForm.module.css'

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
            <div style={{color:"white"}}>
                <div>
                    <label className={styles.Labeles}>Project Name</label ><br/>
                    <input type='text' value={enteredProjectName} onChange={projectNameHandler} className={styles.textArea}/>
                </div>
                <div>
                    <label className={styles.Labeles} >Project Language</label><br/>
                    <input type='text' value={enteredProjectLanguage} onChange={projectLanguageHandler} style={{width: "20em"}}/>
                </div>
                <div>
                    <label className={styles.Labeles}>Project Description</label><br/>
                    <input type='text' value={enteredProjectDescription} onChange={projectDescriptionHandler} className={styles.textArea} style={{marginBottom: '15px', width: "30em"}}/>
                </div>
                <button type='submit' className="btn btn-success" style={{marginBottom: "25px"}}> Add New Project</button>
            </div>
        </form>
    )
}

export default NewProjectForm
