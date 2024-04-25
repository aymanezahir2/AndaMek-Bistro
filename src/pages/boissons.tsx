import {  ReactNode, useEffect, useState } from "react";
import { HandleTypeDrink } from "../api";
import { boissons_bg} from "../assets";
import { Recipe } from "../constants";
import { Helmet } from "react-helmet-async";
import { SkeletonRecipe } from "../components/shared/ui/skeletons";

type dataType = { [key: string]: Recipe[] }
export default function Menu() {
    const [data, setdata] = useState<dataType | null>(null);
    const [datakey, setdatakey] = useState<string[]>([])
    const [load , setLoad] = useState<boolean>(false)

    useEffect(() => {

        async function start() {

            const datas = await HandleTypeDrink("./data/drinks.json");

            setdata(datas)
            const arrayofkeys = Object.keys(datas || {});
            setdatakey(arrayofkeys)
            setLoad(true)
        }

        start()
    }, [])



    const Element = () => {
        if (load) {
          
                return (
                    <div className="container relative grid max-w-xl grid-cols-1 gap-5 items-baseline py-5">
                        {datakey.map(e => (
                            <BoxParent key={e} name={e}>
                                {data && data[e]?.map((el : Recipe) => <Box key={el.description} {...el} />)}
                            </BoxParent>
                        ))}
                    </div>
                )
            
        }
        // Handle case when data is null
        return (
            <div className="container relative max-w-xl lg:max-w-3xl gap-5 items-baseline py-5">
                <BoxParent name={null}>
                    <SkeletonRecipe />
                </BoxParent>
                <div className="divider"></div>
                <BoxParent name={null}>
                    <SkeletonRecipe />
                </BoxParent>
                <div className="divider"></div>
                <BoxParent name={null}>
                    <SkeletonRecipe />
                </BoxParent>
                <div className="divider"></div>
                <BoxParent name={null}>
                    <SkeletonRecipe />
                </BoxParent>
                <div className="divider"></div>
                <BoxParent name={null}>
                    <SkeletonRecipe />
                </BoxParent>
            </div>
        )
    }

    return (
        <div style={{ paddingTop: "147px", backgroundImage: `url(${boissons_bg})` }} className=" bg-fixed  bg-cover relative">
            <Helmet>
                <title>AndalMek Bistro - Boissons</title>
            </Helmet>
            {/* overlay */}
            <div className="absolute bg-white/60 inset-0"></div>

            <Element />

        </div>
    )
}

function BoxParent({ children, name }: { children: ReactNode, name: string | null }) {



    return (
        <div className="shadow-lg rounded-xl p-9 bg-white">
            {name === null ? <div className=" skeleton h bg-slate-400 mx-auto mb-10" style={{height : 40, width : 200}} /> : <h2 className="text-center text-4xl mb-5 font-header">les {name}s</h2>}
            {children}
        </div>
    )
}

function Box({ name, description, prix, image_url }: Recipe) {
    const [imageLoaded, setImageLoaded] = useState(true); // Initially assuming image is loaded

    return (
        <div>
            <div className="flexBetween">
                <h2 className="font-second text-2xl">{name}</h2>
                <h3 className="text-[#777] font-light">{prix}</h3>
            </div>

            <p className="text-slate-700 mt-3 text-lg">{description}</p>
            {imageLoaded && (
                <img
                    src={image_url}
                    onError={() => setImageLoaded(false)}
                    alt="img"
                    className="rounded-lg w-full mt-10"
                />
            )}
            <div className="divider divider-primary"></div>
        </div>
    )
}




