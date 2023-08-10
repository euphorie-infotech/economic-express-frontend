import React from "react";
import Heading from "./partials/Heading";
import NewsImage from "./partials/NewsImage";
import NewsDescription from "./partials/NewsDescription";
import NewsSideList from "./partials/NewsSideList";
import MoreNews from "./partials/MoreNews";

const NewsDetails = () => {
  return (
    <>
      <div className="flex py-10">
        <div className="basis-3/4 px-2">
          <NewsImage />
          <Heading />
          <NewsDescription />
        </div>
        <div className="basis-1/4 px-2">
          <NewsSideList category="Latest" />
          <NewsSideList category="Featured" />
        </div>
      </div>

      <div className="basis-full">
        <MoreNews />
      </div>
    </>
  );
};

export default NewsDetails;
