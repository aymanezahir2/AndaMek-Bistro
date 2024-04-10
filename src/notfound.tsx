import { Link } from "react-router-dom";

export default function Notfond(){
    return (
        <div style={{ paddingTop: "147px"}} className=" bg-fixed h-96  bg-cover relative">
        {/* overlay */}
        <div className="container">
            <h1 className="px-2 text-header">ce page n'est pas exist | 404</h1>
            <div className="mx-auto w-max"><Link to={"/"} className="btn btn-outline mx-auto w-max  text-black hover:gr1 hover:text-white">Retourne </Link></div>
        </div>
    </div>
    )
}