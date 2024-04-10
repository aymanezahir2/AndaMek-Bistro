import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import { HiBars2 } from "react-icons/hi2";
import {motion} from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { link } from "../../constants";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function Page() {
    return (
        <header className=" fixed top-0 left-0 shadow-sm z-50 bg-white px-3 shadow-gray-400 right-0 font-main">


            <div className=" border-b-[1px] py-2 flexBetween border-[#cecece]">
                <a href="tel:+216277273458" className="flexStart max-sm:hidden gap-2 link"><CiPhone  size={35} />+212772736458</a>
                <Logo />
                <a href="tel:+216277273458" className="flexStart max-sm:hidden gap-2"><CiLocationOn  size={35} /> Meknes,Morocco</a>
                <div className="sm:hidden flexStart gap-2">
                <a href="tel:+216277273458" className="flexStart  gap-2"><IoLocationOutline  size={35} /></a>
                    <Link to={"/"}><FaInstagram size={35} /></Link>
                    <Sidebar />
                </div>
            </div>
            <ul className="flexCenter py-2 max-sm:hidden  gap-3">
                {link.map(link => <NavLink className={({ isActive }) => (isActive ? "text-[#777]" : "") + " capitalize hover:text-[#777] text-lg font-light"} key={link} to={"/" + link}>{link}</NavLink>)}
            </ul>

        </header>
    )
}



function Sidebar(){

    const arrayAnimation = {
        hidden : {
            opacity : 0,
            width: 0
        },
        visible : {
            opacity : 1,
            width: "100%"
        }
    }


    type animationType = ("hidden" | "visible")[]

    const [array , setArray] = useState<animationType>(["hidden" , "hidden"])

    const activeArray : animationType = ["hidden" , "visible"]
    const desactiveArray : animationType = ["visible" , "hidden"]

    return (
        <>
            <HiBars2 
                size={50} 
                className="cursor-pointer hover1 p-2 rounded-[40%]  transition-all "
                onClick={()=> setArray(activeArray)}
            />
            <motion.div 
                className="fixed inset-0 z-50 bg-white flex flex-col justify-between"
                variants={arrayAnimation}
                initial={array[0]}
                animate={array[1]}
            >
                <div>
                <div className="flexBetween p-2">
                    <div onClick={()=> setArray(desactiveArray)}  ><Logo /></div>
                    <BiX size={35} className="hover1 cursor-pointer rounded-[40%]" onClick={()=> setArray(desactiveArray)} />
                </div>
                <ul className="flexCol mt-5 py-2  gap-3">
                    {link.map(link => <NavLink onClick={()=> setArray(desactiveArray)} className={({ isActive }) => (isActive ? "text-redone font-semibo ld" : "") + " capitalize hover:text-redone hover:font-semibold text-lg font-light"} key={link} to={"/" + link}>{link}</NavLink>)}
                </ul>
                </div>

                <div className="flexCenter px-3 text-orangeone mb-5 gap-3 items-end">
                    <Link to={""}><FaInstagram size={35} /></Link>
                    <Link to={""}><FaFacebook size={35} /></Link>
                    <Link to={""}><FaTwitter size={35} /></Link>
                </div>
            </motion.div>
        </>
    )
}
