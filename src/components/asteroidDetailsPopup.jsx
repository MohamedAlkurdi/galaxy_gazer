import { useContext, useEffect, useState } from "react"
import { DataContext } from "../dataContext"
import {AsteriodDetailsPopup_component_styles} from '../unioned-styles'

export default function AsteriodDetailsPopup({ id, handleColseDetails }) {
    const [neededObject, setNeededObject] = useState({});

    const dataContext = useContext(DataContext);
    useEffect(() => {
        dataContext.data.forEach(element => {
            if (element.date === id) {
                setNeededObject(element);
            }
        });
    }, [dataContext])


    function handleClick() {
        handleColseDetails();
    }

    function handleParentClick(e) {
        if (e.target.classList.contains('detailsPopupContainer')) {
            handleColseDetails();
        }
    }
    return (
        <div onClick={handleParentClick} className={AsteriodDetailsPopup_component_styles.container_style}>
            <div className={AsteriodDetailsPopup_component_styles.popup_style}>
                <h1 className={AsteriodDetailsPopup_component_styles.popup_title_style} >{neededObject.title}</h1>
                <p className={AsteriodDetailsPopup_component_styles.popup_caption}>{neededObject.explanation}</p>
                <button onClick={handleClick} className={AsteriodDetailsPopup_component_styles.button_style}><i class="fa-solid fa-x"></i></button>
            </div>
        </div>
    )
}