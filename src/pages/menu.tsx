import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { HandleType } from "../api";
import { menu_bg } from "../assets";
import { Recipe } from "../constants";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type dataType = { [key: string]: Recipe[] } | Recipe[]
export default function Menu() {
    const [data, setdata] = useState<dataType | null>(null);
    const [searchparams, setSearchP] = useSearchParams();
    const [datakey, setdatakey] = useState<string[]>([])

    const type = searchparams.get("type");


    useEffect(() => {


        async function start() {

            const datas = await HandleType("./data/food.json");
            if (type === null || type == "tout") {

                setSearchP({ type: "tout" })

                setdata(datas)
            } else {

                setdata(datas[type])
            }


            const arrayofkeys = Object.keys(datas || {});
            setdatakey(arrayofkeys)
        }

        start()
    }, [])



    const Element = () => {
        if (data !== null) {
            if (type === "tout") {
                return (
                    <div className="container relative grid max-lg:max-w-xl grid-cols-1 lg:grid-cols-2 gap-5 items-baseline py-5">
                        {datakey.map(e => (
                            <BoxParent key={e} name={e}>
                                {(data as { [key: string]: Recipe[] })[e]?.map(el => <Box key={el.description} {...el} />)}
                            </BoxParent>
                        ))}
                    </div>
                )
            } else {
                // Ensure data is an array before calling map
                const dataArray = Array.isArray(data) ? data : [];
                return (
                    <div className="container relative max-w-xl lg:max-w-3xl gap-5 items-baseline py-5">

                        <BoxParent key={type} name={type ?? ""}>
                            {dataArray.map(el => <Box key={el.description} {...el} />)}
                        </BoxParent>
                    </div>
                )
            }
        }
        // Handle case when data is null
        return null;
    }

    return (
        <div style={{ paddingTop: "147px", backgroundImage: `url(${menu_bg})` }} className=" bg-fixed  bg-cover relative">
            {/* overlay */}
            <div className="absolute bg-white/60 inset-0"></div>
            <Helmet>
                <title>AndalMek Bistro - Menu</title>
            </Helmet>
            <ButtonsComponent setData={(i) => setdata(i)} data={datakey} />

            {data && <Element />}

        </div>
    )
}

function BoxParent({ children, name }: { children: ReactNode, name: string }) {



    return (
        <div className="shadow-lg rounded-xl p-9 bg-white">
            <h2 className="text-center text-4xl mb-5 font-header">les {name}s</h2>
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





function ButtonsComponent({ data, setData }: { data: string[], setData: (i: dataType) => void }) {
    const [searchparams, setSearchP] = useSearchParams();

    const type = searchparams.get("type");



    function handle(i: ChangeEvent<HTMLInputElement>) {
        const name = i.target.name;
        setSearchP({ type: name })
        async function start() {


            const datas: dataType = await HandleType("./data/food.json");
            setData(name === "tout" ? datas : datas[name])
        }
        start()

    }

    return (
        <div className="join relative block mt-10 mx-auto w-max">
            {["tout", ...data].map(key => <input key={key} className="join-item btn capitalize checked:gr2 text-white" checked={type === key} onChange={handle} type="radio" name={key} aria-label={key} />)}

        </div>
    )
}

