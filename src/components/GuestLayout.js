import Head from 'next/head'
// import Footer from "@/components/Layouts/FooterSection"
import React, {useEffect} from "react"
import Navbar from "@/src/components/Navbar";
import Menu from "@/src/components/Menu";


const GuestLayout = ({children,info}) => {

    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <Navbar/>
            <Menu/>
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default GuestLayout



