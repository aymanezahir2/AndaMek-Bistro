import { Helmet } from "react-helmet-async";
import { boissons_bg, gallery_couscouse, gallery_hrira } from "../assets";

export default function Menu() {
   
    return (
        <div style={{ paddingTop: "147px", backgroundImage: `url(${boissons_bg})` }} className=" bg-fixed  bg-cover relative">
            {/* overlay */}
            <div className="absolute bg-black/60 inset-0"></div>
            <Helmet>
                <title>AndalMek Bistro - Specials</title>
            </Helmet>
            <div className="container relative text-white py-5">
                <h1 className="font-header  text-center text-4xl">Notre Specials</h1>
                <div className="divider divider-primary"></div>

                <div className="mt-10 flexBetween max-md:flexCol max-md:text-center">
                   <div className="flexCol md:flex-row md:flexStart">
                    <div className="mask w-24 mask-squircle">
                        <img src={gallery_couscouse} alt="" />
                    </div>
                   <div className="flex flex-col">
                        <h2 className="font-second text-3xl">
                            chaque vendredi
                        </h2>
                        <p>nous préparons du couscous tous les vendredis</p>
                    </div>
                   </div>
                    <p>10AM &rarr; 11PM</p>
                </div>
                <div className="mt-10 flexBetween max-md:flexCol max-md:text-center">
                   <div className="flexCol md:flex-row md:flexStart">
                    <div className="mask w-24 mask-squircle">
                        <img src={gallery_hrira} alt="" />
                    </div>
                   <div className="flex flex-col">
                        <h2 className="font-second text-3xl">
                            Mardi et Jeudi
                        </h2>
                        <p>Chaque mardi et jeudi, nous cuisinons de la hrira. 🍲</p>
                    </div>
                   </div>
                    <p>10AM &rarr; 11PM</p>
                </div>
                
            </div>

        </div>
    )
}
