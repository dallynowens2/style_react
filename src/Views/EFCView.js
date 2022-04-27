import React from "react";
import "./Views.css";
import photo1 from "./Photos/EFC1.PNG";
import photo2 from "./Photos/EFC2.PNG";
import photo3 from "./Photos/EFC3.PNG";
import photo4 from "./Photos/EFC4.PNG";

const EFCView = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">Introduction</h1>
          <div className="p-4 text-center fs-5">
          One of the things I learned was the ease of making a .Net Api and a database with entity framework.
           I used to think making an API was a very painstaking and time consuming thing that had to be done 
           and it felt like the old way I was doing them made for a lot of repetitive work. In this blog post 
           I will go over some of the changes I made to make an API easier as well as the tools I used.
           <br/>
           <h1 className="display-3 text-center">The Application</h1>
           The application I will be demonstrating on is for a project I made for Nielsen Contracting, But if 
           you would like a closer look at my code here is a link to my code. dallynowens2/secureAPI (github.com)
            This is for a different project but it still follows the same principles in it.
            <br/>
            <h1 className="display-3 text-center">The Data</h1>
            To start with this the first thing to know about entity framework is that fact that is a code
             first approach to the database. Here is a little of the design I made for this project.
          </div>
          <img src={photo1} className="img-fluid mx-auto d-block" />
          <div className="p-4 text-center fs-5">
          As you will see I have three different models of data that I want to have. I have an
           employee(or user), a Job, and a timesheet. The time sheet is acting as a link and
            will be used to help keep track of time of an employee on a Job. The next thing
             I did was to make the models in my code. Here is an example of the time sheet model
              I made.
          </div>
          <img src={photo2} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
          <h1 className="display-3 text-center">Tools</h1>
          The first tool I want to show is what is called the dot net asp-code generator NuGet Gallery
           | dotnet-aspnet-codegenerator 6.0.3 Once you have your models made you can use this to
            actually make your controllers for you. You can run this command in you CLI and it will
             make the controller with the crud operations for you for the models you have made. Here
              is the command I used for the time sheet controller. As well as the output(the output
               is from a different project just to show the basics.)
          </div>
          <img src={photo3} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
          The code shown is from a different project but shows what the output would be like for the
           specific model except I have added in the authorize to these endpoints. This is not the 
           whole controller as there is some that could not fit on the page.
          </div>
          <img src={photo4} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
          <h1 className="display-3 text-center">Migrations</h1>
          Like I mentioned before Entity framework core is a code 
          first approach to making your database. Since that is 
          the case the last thing you have to do is run an add 
          migration and an update database(assuming you have made and 
          connected to your database.) you do this in the package manager 
          console the commands are as follow if you are using visual studio.
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default EFCView;
