import { useContext, useEffect, useState } from "react";
import { RouteContext } from "../routeContext";
import { services_data } from "../services_data";

export default function PicturesGrid({cols,children}){
    const routeContext = useContext(RouteContext);

    const [bgColor,setBgColor] = useState("lighter_bg");
    useEffect(()=>{
        if(routeContext === services_data[2].route_path){
            setBgColor("bg-[#000]");
        }
    },[])
    const styling = `${bgColor} w-full grid grid-cols-auto-fill grid-cols-1fr gap-4 max-sm:gap-20 p-5 pb-28 pt-28`;
    const mainStyling = +cols === 2 ? styling.concat(' grid_360') : styling.concat(' grid_250');
    return (
        <div className={mainStyling }>
            {children}
        </div>
    );
}
