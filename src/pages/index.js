import React, {useEffect, useState} from "react"
import BannerItem from "../home/partials/BannerItem";
import SubBannerItem from "../home/partials/SubBannerItem";
import axios from "axios";
import GuestLayout from "@/src/components/GuestLayout";
import NewsCard from "@/src/home/partials/NewsCard";

const Index = (props) => {

    return (
        <GuestLayout>
            <div className="flex py-10 flex-wrap">
                <div className="basis-1/2 px-2 overflow-x-hidden h-[50vh]">
                     {/*<MainBanner />*/}
                    <BannerItem title={props.newses[0].title} slug={props.newses[0].slug}/>
                </div>
                <div className="basis-1/2 px-2 h-[50vh] flex flex-wrap">
                        {
                            props.newses.slice(1,5).map(n=>(
                                <SubBannerItem
                                    key={n.id}
                                    title={n.title}
                                    slug={n.slug}
                                />
                            ))
                        }
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    props.newses.slice(5).map(n=>(
                        <NewsCard
                            key={n.id}
                            title={n.title}
                            slug={n.slug}
                        />
                    ))
                }
            </div>

        </GuestLayout>
    );
};

export default Index;

export const getServerSideProps = async () => {

    let newses = []

    await axios.get(process.env.NEXT_PUBLIC_API)
        .then(response => {
            newses = response.data.data
        })

    return {
        props: {newses},
    }
}


