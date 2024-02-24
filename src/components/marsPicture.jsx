import { useState } from "react";
import { marsPicture_component_styels } from "../unioned-styles.js"


export default function MarsPicture({ dataObject }) {
    const [showOverlay, setOverLay] = useState(false);
    const url = dataObject.img_src;
    const camera = dataObject.camera.full_name;
    function handleMouseIn() {
        setOverLay(true);
    }
    function handleMouseOut() {
        setOverLay(false);
    }

    return (
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className={`${marsPicture_component_styels.card_general_style}`}>
            <img className={`${marsPicture_component_styels.card_image_style}`} src={url} alt="pic" />
            <div className={`${marsPicture_component_styels.overlay_style} ${showOverlay ? 'show' : ''} `}>
            <h1 className={`${marsPicture_component_styels.h1_style}`}>taken by {camera}</h1>
            </div>
        </div>
    )
}