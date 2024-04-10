import { ReactNode } from "react";

interface bgImgProps {
    children? : ReactNode,
    url : string;
    className? : string;

}

export default function BgImg({children , url , className} : bgImgProps){
    return (
        <div style={{backgroundImage : `url(${url})`}} className={className ?? ""}>
            {children}
        </div>
    )
}

