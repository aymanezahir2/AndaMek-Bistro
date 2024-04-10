import { motion } from "framer-motion"
import { landing_home, landing_underline } from "../../assets"
import React from "react"
import { Link } from "react-router-dom"
import { LuMenuSquare } from "react-icons/lu"
import { BiPhone } from "react-icons/bi"
import BgImg from "../shared/ui/bgImage"

export default function Page() {
    return (
        <BgImg url={landing_home} className="bg-cover bg-right text-white relative h-dvh">
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container h-full relative">

            <div className="flexBetween absolute top-[50%] -translate-y-[50%] mt-10 max-lg:flex-col max-lg:gap-5 max-lg:text-center">
                <motion.div initial={{ x: -90, opacity: .6 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .7 }}>
                    <h3 className="font-header text-xl">Découvrez la Magie Andalouse à Meknès</h3>
                    <p className="text-3xl font-main font-light my-3">Plongez dans les saveurs du <Underline>Maroc</Underline>, au cœur de <Underline>Meknès</Underline>.</p>
                    <div className="flexStart max-sm:flexCol max-sm:mt-10 gap-4">
                        <Link to={"/menu"} className="btn-primary flexStart gap-2"><LuMenuSquare size={20} />Découvrir Notre Menu</Link>
                        <a href="tel:+212772736458" className="btn-regular flexStart gap-2"><BiPhone size={20} />Réserver une Table</a>
                    </div>
                </motion.div>
                <div></div>           
            </div>
            </div>
        </BgImg>
    )
}

function Underline({ children }: { children: React.ReactNode }) {
    return <span className=" bg-cover" style={{ backgroundImage: `url(${landing_underline})`, backgroundPosition: "center center" }}>{children}</span>
}