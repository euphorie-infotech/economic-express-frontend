import Image from "next/image";
import React from "react";
import newsHeader from "../../../public/assets/images/news-image.jpg";

const NewsCard = () => {
  return (
    <div>
      <Image
        src={newsHeader}
        alt="newsHeader"
        width={0}
        height={0}
        className="w-full h-auto rounded-lg"
      />
      <h1 className="mt-3 text-justify px-2 text-red-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
        culpa!
      </h1>
    </div>
  );
};

export default NewsCard;
