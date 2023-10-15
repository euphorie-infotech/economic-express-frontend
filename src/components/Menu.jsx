import React from "react";
import Skeleton from "./Skeleton";

const Menu = () => {
  return (
    <div className="border-y border-red-700 my-2">
      <Skeleton>
        <div className="flex w-full justify-between items-center py-4 px-2">
          <h1 className="text-red-700 uppercase">News</h1>
          <h1 className="text-red-700 uppercase">Opinion</h1>
          <h1 className="text-red-700 uppercase">Sports</h1>
          <h1 className="text-red-700 uppercase">Business</h1>
          <h1 className="text-red-700 uppercase">Entertainment</h1>
          <h1 className="text-red-700 uppercase">Life & Living</h1>
          <h1 className="text-red-700 uppercase">Youth</h1>
          <h1 className="text-red-700 uppercase">Tech & Startup</h1>
          <h1 className="text-red-700 uppercase">Multimedia</h1>
        </div>
      </Skeleton>
    </div>
  );
};

export default Menu;
