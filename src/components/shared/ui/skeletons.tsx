export  function SkeletonRecipeButton() {
    return (
        <div className="skeleton h-[48px] w-[284.217px] h bg-slate-100 "></div>
    )
}


export  function SkeletonRecipe() {
    type wh = {w: number , h: number};
    
    
    const title : wh = {w: 156,h:32}
    const prixs: wh = {w: 58 ,h:24}
    const img : wh = {w: 600,h:500}
    return (
        <div>
            <div className="flexBetween">
                <h2 style={{width : title.w , height : title.h}} className="skeleton bg-slate-400 h "  />
                <h3 style={{height: prixs.h, width : prixs.w}} className="skeleton bg-slate-400 h "  />
            </div>

            <div style={{height :28}} className="skeleton w-full mt-3 bg-slate-400 h" />
            <div style={{height : img.h , width : img.w}} className="mt-5 bg-slate-400 h  skeleton" />
        </div>
    )
}