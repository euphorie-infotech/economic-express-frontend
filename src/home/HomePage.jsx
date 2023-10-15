import React, {useEffect, useState} from "react"
import MainBanner from "./partials/MainBanner";
import SubBanner from "./partials/SubBanner";
import MoreNews from "./partials/MoreNews";
import BannerItem from "./partials/BannerItem";
import SubBannerItem from "./partials/SubBannerItem";
import axios from "axios";

const HomePage = (props) => {

    const [newses, setNewses]=useState([])

    useEffect( () => {
        axios.get(process.env.NEXT_PUBLIC_API)
            .then(response => {
                setNewses(response.data.data)
            })
        console.log(props.newses)
    }, []);

    return (
        <>
            <div className="flex py-10 flex-wrap">
                <div className="basis-1/2 px-2 overflow-x-hidden h-[50vh]">
                    {/* <MainBanner /> */}
                    <BannerItem/>
                </div>
                <div className="basis-1/2 px-2 h-[50vh] flex flex-wrap">
                    <div className="basis-1/2 px-2  overflow-y-scroll">
                        <SubBannerItem/>
                    </div>
                    <div className="basis-1/2 px-2  overflow-y-scroll">
                        <SubBannerItem/>
                    </div>
                    <div className="basis-1/2 px-2  overflow-y-scroll">
                        <SubBannerItem/>
                    </div>
                    <div className="basis-1/2 px-2  overflow-y-scroll">
                        <SubBannerItem/>
                    </div>
                </div>
            </div>
            {
                newses.map(n=>(
                    <MoreNews
                        key={n.id}
                        title={n.title}
                    />
                ))
            }
        </>
    );
};

export default HomePage;

export const getServerSideProps = async () => {

    let newses = []

    await axios.get("//apis.economicexpressbd.com/public/api")
        .then(response => {
            newses = response.data.data
        })

    return {
        props: {newses},
    }
}


