import React from "react";
import "./Views.css";
import photo1 from "./Photos/timeClock1.PNG";
import photo2 from "./Photos/timeClock2.PNG";
import photo3 from "./Photos/timeClock3.PNG";
import photo4 from "./Photos/timeClock4.PNG";

const TimeClockView = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">Time Clock Testing</h1>
          <div className="p-4 text-center fs-5">
            This application is intended to be a way for Nielsen contracting to
            keep track of employee hours as well as the hours that are spent on
            a job to help with billing. I made this app when I had less
            experience in making tests and really a knowledge of why tests are
            important in an application. When I returned to the application I
            noticed I had a lot what could be called legacy code as well
            dependencies that were hard to get around to mock out objects for
            testing. Most of my view models are calling services I made and a
            good portion of those did not have an interface. That was the first
            step I did in breaking dependencies was to extract an interface for
            those services.
          </div>
          <img src={photo1} className="img-fluid mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            The next step I had in making this app have less dependencies was to
            go to the view models for the pages and anywhere I was calling the
            services I would change it to the interface.
          </div>
          <img src={photo2} className="img-fluid  mx-auto d-block" />
          <img src={photo3} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            The next step I took was to start making tests for the view models
            and to mock out the services so that they could be called from the
            tests and I could check to make sure what I was getting back was
            correct.
          </div>
          <img src={photo4} className="img-fluid  mx-auto d-block" />
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default TimeClockView;
