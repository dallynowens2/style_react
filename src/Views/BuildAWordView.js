import React from "react";
import "./Views.css";
import photo1 from "./Photos/BuildAWord1.PNG";
import photo2 from "./Photos/BuildAWord2.PNG";
import photo3 from "./Photos/BuildAWord3.PNG";
import photo4 from "./Photos/BuildAWord4.PNG";

const BuildAWordView = () => {
  return (
    <div className="backgroundImg">
      <div className='row'>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
            <h1 className='display-3 text-center'>Build A Word</h1>
          <div className="p-4 text-center fs-5">
            I started this project as an experiment after trying to learn how to
            get into building applications for mobile devices. This application
            was good because it showed me how to start building applications in
            android studios and the different approaches to making an
            application you can use. Starting with the UI When I first started I
            had all of my application on one page then I would just render the
            pieces that I needed at the time depending on what I wanted done. I
            have since changed that to have different pages.
          </div>
          <img src={photo1} className='img-fluid mx-auto d-block' />
          <div className="p-4 text-center fs-5">
            With those refactorings I made the first page went from over 350
            lines to about 35 which makes a big difference.
          </div>
          <img src={photo2} className='img-fluid  mx-auto d-block' />
          <div className="p-4 text-center fs-5">
            The other things I learned about using android studio and making
            mobile apps is the design portion of the page. For apps made in
            Kotlin the page layout and how you can design it. There are two ways
            to add things to a page the first is through code in an XML file.
          </div>
          <img src={photo3} className='img-fluid  mx-auto d-block' />
          <div className="p-4 text-center fs-5">
            This can be hard to understand and hard to see what you are doing as
            well as remember all the things needed for each item but the second
            way is a visual one that helps as well.
          </div>
          <img src={photo4} className='img-fluid  mx-auto d-block'/>
          <div className="p-4 text-center fs-5">
            The visual is nice for making quick changes as well as adding things
            to a page I found out, but neither is better to use than the other.
            The best way to design is using a mix of both in my opinion where
            you do things such as add in new elements and big spacing using the
            visual and finer changes with the code.
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default BuildAWordView;
