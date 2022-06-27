import React from "react";
import "./Views.css";
import photo1 from "./Photos/Cap1.PNG";
import photo2 from "./Photos/EFC1.PNG";
import photo3 from "./Photos/Cap3.PNG";
import photo4 from "./Photos/Cap4.png";
import photo5 from "./Photos/Cap5.png";
import photo6 from "./Photos/Cap6.png";
import photo7 from "./Photos/Cap7.png";

const CapstoneReview = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">Introduction</h1>
          <div className="p-4 text-center fs-5">
            This project I set out to make an application for a local business
            that they could use. The business I made the app for was Nielsen
            Contracting. The focus of the application had two main focuses the
            first is to keep track of employee times each week the second main
            purpose of the application was to help keep track of the time an
            employee spent on a job site. This post I will go through briefly
            each of the following with links to more in depth description in
            different blog posts. I will go through the following in this blog
            post first, I will go through the design and Planning, overview of
            the backend, and an overview of the front end of the application.
            <br />
            <h1 className="display-3 text-center">Planning and Design</h1>
            <h1 className="display-5 text-center">Related Blog Stories:</h1>
            <a href="https://dallyn-portfolio.herokuapp.com/blog/time-clock-Planning">
              Planning and Design
            </a>
            <br />
            For the planning of the application I started by meeting with the
            Business owner and we went through what he did at the time to keep
            track of the hours. I then took some time to go through what he
            would need as far as a database and set up the interaction there and
            made a mock up that I could take back to him later on so that I
            could ensure the design was in line with what he was expectating and
            what he wanted.
            <br />
            <img src={photo1} className="img-fluid mx-auto d-block" />
            <div className="p-4 text-center fs-5">
              The Next thing after showing him the design and getting it
              approved on what he wanted, we made a prioritized list of the
              features he wanted first and their importance so we could put
              together what would be needed in the first release and things that
              could be added in after. The next step I did after meeting with
              him was to make a list of how long I thought each thing would take
              and lay out the risk of what I thought would be the hardest to
              accomplish so that I could do those first.
            </div>
            <h1 className="display-3 text-center">Backend Overview</h1>
            <h3 className="display-5 text-center">Related Blog Stories:</h3>
            <a href="https://dallyn-portfolio.herokuapp.com/blog/time-clock-Planning">
              Backend
            </a>
            <br />
            <a href="https://dallyn-portfolio.herokuapp.com/blog/time-clock-Planning">
              EFC
            </a>
            <br />
            The back end I used was built in C# using .net core. The back end I
            set up has a few different models including one for jobs, employees
            and timesheets.
            <br />
            <img src={photo2} className="img-fluid mx-auto d-block" />
            <div className="p-4 text-center fs-5">
              The controllers I built were fairly basic and had mostly just the
              crud operations with a few others that were used to get the hours
              for an employee over a certain time span as well and the same for
              a job. I used Auth0 to ensure that the user that was trying to
              perform actions was logged in. I did a few other things to ensure
              that It would be more secure from attacks as well such as rate
              limiting the api so that it would help to prevent an individual
              from ddosing the application. The other thing I did was take a
              code first approach in implementing the database. To do this I
              used EFcore which also gave me some more security measures such as
              helping to prevent SQL injection by using parameterized inputs to
              the database.
            </div>
            <img src={photo3} className="img-fluid mx-auto d-block" />
            <h1 className="display-3 text-center">Backend Overview</h1>
            <h3 className="display-5 text-center">Related Blog Stories:</h3>
            <a href="https://dallyn-portfolio.herokuapp.com/blog/time-clock-Planning">
              Testing
            </a>
            <br />
            <a href="https://dallyn-portfolio.herokuapp.com/blog/time-clock-Planning">
              Authorization
            </a>
            <br />
            The frontend of the application was built in Xamarin forms to make a
            mobile application for both android and IOS. The flow of the
            application has a user login on the home page that will redirect
            them to Auth0 to log in and it will give them a token and a session
            and saves them both in the cache for the application. then from
            there they can go to either a list of the jobs or to a list of the
            employees. If the user goes to the employees they can then view all
            the employees and choose one in specific to get things such as phone
            number if they need to contact them. There is no sensitive
            information given to the application for the employees. There was
            tests that I put in place to ensure things on the application are
            doing what they are supposed to such as the navigation is going to
            correct page.
            <br />
            <h1 className="display-3 text-center">Application ScreenShots</h1>
            <div className="row">
              <div className="col-3"><img src={photo4} className="img-fluid mx-auto d-block" style={{maxHeight: "500px"}} /></div>
              <div className="col-3">
                
                <img src={photo5} className="img-fluid mx-auto d-block" style={{maxHeight: "500px"}}/>
                
                
              </div>
              <div className="col-3"><img src={photo6} className="img-fluid mx-auto d-block" style={{maxHeight: "500px"}}/></div>
              <div className="col-3"><img src={photo7} className="img-fluid mx-auto d-block" style={{maxHeight: "500px"}}/></div>
            </div>
          </div>
          <div className="col-lg-2 col-md-1 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CapstoneReview;
