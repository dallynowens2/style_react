import React from "react";
import "./Views.css";
import photo1 from "./Photos/ArtStore1.PNG";
import photo2 from "./Photos/ArtStore2.PNG";
import photo3 from "./Photos/ArtStore3.PNG";
import photo4 from "./Photos/ArtStore4.PNG";
import photo5 from "./Photos/ArtStore5.PNG";

const ArtStoreView = () => {
  return (
    <div className="backgroundImg">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
        <div className="col-lg-8 cold-md-10 col-sm-10 bg-white">
          <h1 className="display-3 text-center">Art Store Mobile Responsive</h1>
          <div className="p-4 text-center fs-5">
            This is a picture of an old project I had that I did a long while
            back. Most of the project is just in HTML and CSS but it was built
            to resemble a page for an art store. As you can see the items are
            vertical, don't take up much of the page and just are not very clean
            in the way they are.
          </div>
          <img src={photo1} className="img-fluid mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            I set out to fix this. I started by adding in bootstrap so I could
            take advantage of the cards that they use to make a cleaner looking
            product for each. Note I did add a few more in for example sake and
            took out some of the other pictures for size sake as well.
          </div>
          <img src={photo2} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            After changing to cards I put the project in a grid to help with
            alignment, it lined up okay on the first row but the second row
            tried to fill in the remaining space and made the alignment not look
            good. To Fix this I gave each card a specified amount of the screen
            It could take up.
          </div>
          <img src={photo3} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            This helped with the spacing and made things more even overall, but
            the problem was when I would resize the page, all the listings would
            be squished together. To fix this issue in the gird I gave each
            column a specific amount of the screen it could take up depending on
            the size of the viewing window. It would start out being four wide
            with large screens then decrease down to a single row for smaller
            viewing windows.
          </div>
          <img src={photo4} className="img-fluid  mx-auto d-block" />
          <div className="p-4 text-center fs-5">
            To fix this issue in the gird I gave each column a specific amount
            of the screen it could take up depending on the size of the viewing
            window. It would start out being four wide with large screens then
            decrease down to a single row for smaller viewing windows.
          </div>
          <img src={photo5} className="img-fluid  mx-auto d-block" />
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default ArtStoreView;
