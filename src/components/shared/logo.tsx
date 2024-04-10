
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import useScrollPosition from "../../hook/useScrollPosition"
import {motion} from "framer-motion"
export default function Logo({withP = true} : {withP? : boolean}){

    const {y} = useScrollPosition()
    


    return (
        <Link to={"/"} className="flexCol gap-3">
            <motion.img animate={{width: y > 15 ? 35 : 50}} src={logo} alt="logo" />
            <p className={"font-header "+ (withP ? "" : "hidden")}>AndalMek Bistro</p>
        </Link>
    )
}