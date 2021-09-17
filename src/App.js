import './App.css';
import React, { useState } from 'react';
import projectData from './Data/ProjectData.js';
import Header from './components/HeaderComponent/Header';
import ProjectList from './components/ListComponents/ProjectList.js';
import NewProject from './components/AddToCompnents/NewProject';

function App() {
  const [projectList, setProjectList] = useState(projectData);
  const addProject = (project) => {
    setProjectList(prevProject => {
      return [...prevProject, project];
    });
  }

  const onDelete = (selectedProject) => {
    const newList = projectList.filter(e => e.id === selectedProject.id);
    newList.forEach(f => projectList.splice(projectList.findIndex(e => e.id === f.id), 1));
    setProjectList(selectedProject, ...projectList);
    console.log(projectList);
  }


  return (
    <div className="App">
      <Header />
      <ProjectList projectList={projectList} onDelete={onDelete}/>
      <NewProject onAddProject={addProject} />
    </div>
  );
}

export default App;
