import React, { useState, useReducer } from "react";
import {Link} from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";

const ProjectDescriptionModal = ({ project }) => {
  const [lgShow, setLgShow] = useState(false);

  const path = project.photoPath;
  const pic = require(`${path}`);

  
  const blogItem=project.blogPosts.map((post)=> (<div><Link to={'/blog/'+post} >{post}</Link></div>
  )
  )

  return (
    <div>
      <Button
        className="btn btn-secondary"
        style={{ width: "50%", alignContent: "center" }}
        onClick={() => setLgShow(true)}
      >
        Show Details
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className="container-fluid">{project.projectName}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={pic.default}
            className="card-img-top"
            alt="img"
            style={{
              width: "30%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
          <h3 className=" container-fluid text-center p-2">Project Language</h3>
          <div className="display-6 container-fluid text-center border-bottom">
            {project.projectLanguage}
          </div>
          <h3 className=" container-fluid text-center p-2">Project Description</h3>
          <div className="container-fluid text-center border-bottom fs-6">
            {project.projectDescriptionFull}
          </div>
          <div>
          <h3 className=" container-fluid text-center p-2">Related Blog Posts</h3>
          {blogItem}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectDescriptionModal;
