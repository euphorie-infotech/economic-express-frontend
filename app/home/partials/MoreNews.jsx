import React from "react";
import NewsCard from "./NewsCard";

const MoreNews = () => {
  return (
    <div className="bg-slate-200l rounded-lg">
      {/* <div className="bg-red-700 p-5 rounded-t-lg">
        <h1 className="text-white text-xl">More News on Lorem</h1>
      </div> */}
      <div className="flex py-3">
        <div className="basis-1/2 p-5">
          <NewsCard />
        </div>
        <div className="basis-1/2 p-5">
          <NewsCard />
        </div>
        <div className="basis-1/2 p-5">
          <NewsCard />
        </div>
        <div className="basis-1/2 p-5">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default MoreNews;
