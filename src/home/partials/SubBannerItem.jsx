import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/assets/images/news-image.jpg";
import Link from "next/link";

const SubBannerItem = ({title, slug}) => {
    return (
        <Link href={slug ?? 'aaa'}  className="basis-1/2 px-2  overflow-y-scroll">
            <div className="">
                <Image
                    src={bannerImage}
                    alt="banner"
                    width={0}
                    height={0}
                    className="w-full h-auto rounded-lg"
                />
                <h1 className="text-red-600">
                    {title}
                </h1>
            </div>
        </Link>
    );
};

export default SubBannerItem;
