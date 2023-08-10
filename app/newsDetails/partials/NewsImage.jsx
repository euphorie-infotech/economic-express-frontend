import React from "react";
import newsHeader from "../../../public/assets/images/news-image.jpg";
import Image from "next/image";

const NewsImage = () => {
  return (
    <>
      <Image
        src={newsHeader}
        alt="newsHeader"
        width={0}
        height={0}
        className="rounded-lg w-full h-auto"
      />
      <p className="text-slate-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing.{" "}
        <span className="mx-2">|</span>
        <span className="text-xs italic">File photo</span>
      </p>
      <hr className="my-2" />
    </>
  );
};

export default NewsImage;
