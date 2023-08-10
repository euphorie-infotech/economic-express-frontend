import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/assets/images/news-image.jpg";

const SubBannerItem = () => {
  return (
    <div className="">
      <Image
        src={bannerImage}
        alt="banner"
        width={0}
        height={0}
        className="w-full h-auto rounded-lg"
      />
      <h1 className="text-red-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nulla!
      </h1>
    </div>
  );
};

export default SubBannerItem;
