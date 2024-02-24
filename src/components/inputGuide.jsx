import { useEffect } from "react";
import {InputGuide_component_styles} from '../unioned-styles'

export default function InputGuide({visibility, data }) {
    //data is an array
    const renderData = data.map(element => {
        return <li className="text-white text-left">{element}</li>
    }
    );

    return (
        <div className={`${visibility ? `block` : `hidden`} ${InputGuide_component_styles.guideContainer_style}`}>
            <div className={InputGuide_component_styles.guidePointer_style}></div>
            <ol className={InputGuide_component_styles.instructions_style}>
                {renderData}
            </ol>
        </div>
    )
}