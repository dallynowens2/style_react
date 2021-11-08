import React from "react";
import ProjectDescriptionModal from "./ProjectDescriptionModal";

function Project({ project, onDeleteClick }) {
  const onDeleteClickHandler = (event) => {
    onDeleteClick(event);
  };

  const path = project.photoPath;
  const pic = require(`${path}`);

  return (
    <div>
      <div className="card" style={{ width: "330px", paddingLeft: "5px" }}>
        <img
          src={pic.default}
          className="card-img-top"
          alt="img"
          height="350"
        />
        <div className="card-body">
          <div className="card-title">{project.projectName}</div>
          <div className="card-text p-2 m-2">{project.projectDescription}</div>
          <ProjectDescriptionModal project={project}/>
        </div>
      </div>
    </div>
  );
}

export default Project;
