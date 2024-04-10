
import Header from "./header"
import Footer from "./footer"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
export default function RootLayout(){
    const path = useLocation().pathname
    // for reset the scroll to top of page
    useEffect(()=> {
        window.scrollTo({behavior : "smooth" , top : 0});
    } , [path]);
    return (
        <>
        <Header />
        <Outlet />
        <Footer /> 
        </>
    )
}