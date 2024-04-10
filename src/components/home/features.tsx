import { Link } from "react-router-dom";
import { features } from "../../assets";
import { BiDrink } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Feature(){
    return (
        <div className="lg:flexBetween max-lg:flexCol max-lg:flex-col-reverse container mt-5 gap-5"> 
            <div className="lg:w-1/2">
                <h1 className="capitalize font-second">delecious</h1>
                <h3 className="text-4xl my-3 font-black font-header text-redone">Découvrez les saveurs authentiques du Meknes</h3>
                <p className="text-[#777]">Offrez-vous un voyage culinaire à travers notre menu, composé de plats traditionnels marocains et de boissons rafraîchissantes.</p>
                <div className="mt-3 flexStart flex-col md:flex-row lg:flex-col xl:flex-row  gap-3">
                    <Link to={"/boufffe"} className="flexCenter hover1 p-3 rounded-3xl cursor-pointer ">
                        <div className="flex flex-col gap-3 ">
                        <IoFastFoodOutline className="rounded-[40%] p-3 gr2" color="white" size={50} />
                            <div>
                            <h2 className="font-header text-2xl">Plats en vedette</h2>
                            <p className="mt-2 font-light">Découvrez notre sélection de plats marocains alléchants, préparés avec amour et soin.</p>
                            </div>
                        </div>
                            <MdKeyboardArrowRight size={35} />
                    </Link>
                    <Link to={"/boissons"} className="flexCenter hover1 p-3 rounded-3xl cursor-pointer ">
                        <div className="flex flex-col gap-3 ">
                        <BiDrink className="rounded-[40%] p-3 gr1" color="white" size={50} />
                            <div>
                            <h2 className="font-header text-2xl">Boissons rafraîchissantes</h2>
                            <p className="mt-2 font-light">Étanchez votre soif avec notre large gamme de boissons marocaines authentiques.</p>
                            </div>
                        </div>
                            <MdKeyboardArrowRight size={35} />
                    </Link>
                </div>
            </div>
            <img src={features} alt="photo" className="w-1/2 max-lg:hidden rounded-3xl" />
        </div>
    )
}