import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/assets/images/news-image.jpg";
import Link from "next/link";

const BannerItem = ({title, slug}) => {

    return (
        <Link href={slug ?? 'aaa'}>
            <div className="relative rounded-lg overflow-hidden h-full">
                <Image
                    src={bannerImage}
                    alt="banner image"
                    width={919}
                    height={402}
                    className="rounded-lg h-full"
                />
                <div className="absolute bottom-0 bg-red-600 bg-opacity-60 w-full px-8 text-center py-10">
                    <h1 className="text-2xl text-white">
                        {title}
                    </h1>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 bg-opacity-60 w-1/4 px-5 py-2 rounded-xl text-center">
                    <h1 className="text-lg text-white">Featured</h1>
                </div>
            </div>
        </Link>
    );
};

export default BannerItem;
