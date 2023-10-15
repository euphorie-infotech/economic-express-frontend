import Image from "next/image";
import React from "react";
import newsHeader from "../../../public/assets/images/news-image.jpg";
import Link from "next/link";

const NewsCard = ({title, slug}) => {
    return (
        <Link href={slug}>
            <div>
                <Image
                    src={newsHeader}
                    alt="newsHeader"
                    width={0}
                    height={0}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <div className="col-span-2">
                <h1 className="mt-3 text-justify px-2 text-red-700">
                    {title}
                </h1>
            </div>
        </Link>
    );
};

export default NewsCard;
