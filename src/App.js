import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes
} from "react-router-dom";
import projectData from "./Data/ProjectData.js";
import Header from "./components/HeaderComponent/Header";
import ProjectList from "./components/ListComponents/ProjectList.js";
import BuildAWordView from "./Views/BuildAWordView";
import BinarySearchView from "./Views/BinarySearchView";
import ArtStoreView from "./Views/ArtStoreView"
import TimeClockView from "./Views/TimeClockView";
import AWSBasicsView from "./Views/AWSBasicsView";
import EFCView from "./Views/EFCView";
import Footer from "./components/HeaderComponent/Footer";
import CapstoneReview from "./Views/CapstoneReview";

function App() {
  const [projectList, setProjectList] = useState(projectData);
  const addProject = (project) => {
    setProjectList((prevProject) => {
      return [...prevProject, project];
    });
  };

  const onDelete = (selectedProject) => {
    const newList = projectList.filter((e) => e.id === selectedProject.id);
    newList.forEach((f) =>
      projectList.splice(
        projectList.findIndex((e) => e.id === f.id),
        1
      )
    );
    setProjectList(selectedProject, ...projectList);
    console.log(projectList);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectList projectList={projectList} onDelete={onDelete} />}/>
        <Route path="/blog/build-a-word" element={<BuildAWordView />}/>
        <Route path="/blog/binary-search" element={<BinarySearchView />}/>
        <Route path="/blog/art-store" element={<ArtStoreView/>}/>
        <Route path="/blog/testing-time-clock" element={<TimeClockView/>}/>
        <Route path="/blog/aws-basic" element={<AWSBasicsView/>}/>
        <Route path="/blog/EFC" element={<EFCView/>}/>
        <Route path="/blog/Capstone-Review" element={<CapstoneReview/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
