import { overlay_home } from "../../assets";
import BgImg from "../shared/ui/bgImage";


export default function OrderRightNow(){
    return (
        <BgImg className="relative my-20 bg-cover py-5" url={overlay_home}>

            <div className="bg-redone/60 absolute inset-0 z-0"></div>
            <div className="text-white text-center px-3 relative z-10">
                <h2 className="text-3xl font-header">Commander !</h2>
                <p className=" text-lg my-5">Pas envie de cuisiner aujourd'hui ? Nous nous occupons de tout - commandez maintenant !</p>
                <a href="tel:+212772736458" className="btn-primary bg-orangeone mx-auto w-max block font-second">Commander</a>
            </div>
        
        </BgImg>
    )
}