import React from "react";
import "./Views.css";
import photo1 from "./Photos/BinarySearch1.PNG";
import photo2 from "./Photos/BinarySearch2.PNG";


const BinarySearchView = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">Binary Search</h1>
          <div className="p-4 text-center fs-5">
            This project relies heavily on making matches to words, the project
            is a game where you have 28 random letters and you try to make as
            many words as you can from them in a time limit.
           
            It has a dictionary of over 10,000 words to match to and I want
            people to have the best experience possible when playing and I know
            on some slower devices that the search I had previously would not be
            the most optimized
          </div>
          <img src={photo1} className="img-fluid mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            In this it is filtering through the entire dictionary which in the
            best case if the word is at the start it is really quick but as we
            go forward it can get very long filtering through all the entries in
            linear time. 
           
            I wanted to make a change. I knew that there were
            different searches out there that could speed this up, I wanted to
            use one that did not have much overhead(why I didn't use recursion)
            and faster than the current way I was checking the words. So that is
            why I choose binary search. For those who do not know binary search
            works by going to the middle of a sorted array and checking if the
            element you are looking for is there, if it is not it then it sees
            if it is bigger or smaller than that index. Depending if it is
            bigger or smaller it either goes halfway backwards or halfway
            forwards to end and repeats till it finds the index or finds out it
            is not there. The binary search takes the speed to a O(logN) which
            is an improvement to the linear of the previous search.
          </div>
          <img src={photo2} className="img-fluid  mx-auto d-block" />
          
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default BinarySearchView;
