
import { Recipe, foodsHome } from "../../constants"
import BgImg from "../shared/ui/bgImage"
import { overlay_home } from "../../assets"

export default function Gallery(){
    return (
        <section className="container">
            <h1 className="text-7xl my-10 text-header">Popular</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {foodsHome.map(food => <Box key={food.description} {...food} />)}
         </div>
        </section>
    )
}

function Box({image_url , name , prix , description , genre} : Recipe & {genre  : string}){
    return (
       <div className="shadow-lg card overflow-hidden glass">
       <div className="h-48">
       <BgImg url={overlay_home}   className="relative bg-cover h-[60%]">
        <div className=" absolute inset-0 bg-black/50"></div>
        <h2 className="font-header relative text-center text-3xl top-5 text-white">{genre}</h2>
        <img src={image_url} className="h-[200px]  p-6 absolute top-10 left-[50%] -translate-x-[50%]" alt="image" />
       </BgImg>
        
 
       </div>
    
        <div className="card-body">
            <h2 className="capitalize text-orangeone  card-title">{name}<div className="badge badge-primary  bg-yellow-500 border-none">Popular</div></h2>
            <p className="text-[#777]">{description}</p>
            
            <div className="text-slate-800 font-light">{prix}</div>
        </div>
       </div>
    )
}