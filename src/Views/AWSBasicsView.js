import React from "react";
import "./Views.css";
import photo1 from "./Photos/awsBasic1.PNG";
import photo2 from "./Photos/awsBasic2.PNG";
import photo3 from "./Photos/awsBasic3.PNG";
import photo4 from "./Photos/awsBasic4.PNG";

const AWSBasicsView = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">AWS Basics</h1>
          <div className="p-4 text-center fs-5">
            Aws is a very common cloud computing platform. There are many
            different parts about AWS such as how you can access it, things you
            can do with it, and different ways of doing things so that you can
            get the best desired result for what you need as an individual or a
            company. Throughout this blog I will go over the Different ways of
            accessing AWS, and the benefits of each and I will also talk about
            some of the compute services and how to even set up an EC2.
            <br />
            The first way to access AWS is through the Console and by console I
            mean by going to AWS’s site and logging in. The benefit of this
            method is that it is easy to do and can be good when you are trying
            out new technologies for the first time.
          </div>
          <img src={photo1} className="img-fluid mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            The second way to access AWS is through the AWS CLI. This is good
            for when you are familiar with the technology and can even be used
            to run scripts if there are things you need to do often so that they
            can be automated. The last way to access it is through the SDK and
            this can also be used to automate certain actions and this is
            compatible with various languages and even docker. This method is
            good to embed into a different application that needs to access AWS
            in some way.
            <br /> Some of AWS Compute Services are EC2, Elastic Beanstalk, and
            Lambda. Each of these have their strengths and their purposes to
            them. EC2 is similar to having a virtual machine in the cloud and
            comes in many options depending on what you are using it for it has
            many different pricing options as well so you can find one that best
            suits your needs.
          </div>
          <img src={photo2} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            Elastic beanstalk is good if you don’t need all the options you get
            with and EC2 instance. This is good for deploying and even scaling
            your Web applications. Elastic beanstalk has a few code bases you
            can use to test getting your application up and running. It is a lot
            more straightforward of a process and can even give you things like
            health checks and logs without you having to configure them like you
            would have to with an EC2 instance.
          </div>
          <img src={photo3} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            The last one I will touch on quickly is Lambda. Lambda pretty much
            lets you run code on the cloud and you only pay for the time that it
            takes to compute. AWS gives you many different options when it comes
            to cloud computing. You just need to find the one that best suits
            your needs.
          </div>
          <img src={photo4} className="img-fluid  mx-auto d-block" />
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default AWSBasicsView;
