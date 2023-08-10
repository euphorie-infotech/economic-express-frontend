import React from "react";
import MainBanner from "./partials/MainBanner";
import SubBanner from "./partials/SubBanner";
import MoreNews from "./partials/MoreNews";
import BannerItem from "./partials/BannerItem";
import SubBannerItem from "./partials/SubBannerItem";

const HomePage = () => {
  return (
    <>
      <div className="flex py-10 flex-wrap">
        <div className="basis-1/2 px-2 overflow-x-hidden h-[50vh]">
          {/* <MainBanner /> */}
          <BannerItem />
        </div>
        <div className="basis-1/2 px-2 h-[50vh] flex flex-wrap">
          <div className="basis-1/2 px-2  overflow-y-scroll">
            <SubBannerItem />
          </div>
          <div className="basis-1/2 px-2  overflow-y-scroll">
            <SubBannerItem />
          </div>
          <div className="basis-1/2 px-2  overflow-y-scroll">
            <SubBannerItem />
          </div>
          <div className="basis-1/2 px-2  overflow-y-scroll">
            <SubBannerItem />
          </div>
        </div>
      </div>
      <div className="">
        <MoreNews />
      </div>
      <div className="">
        <MoreNews />
      </div>
      <div className="">
        <MoreNews />
      </div>
      <div className="">
        <MoreNews />
      </div>
    </>
  );
};

export default HomePage;
