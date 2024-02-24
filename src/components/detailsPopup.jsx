import { useContext, useEffect, useState } from "react"
import { DataContext } from "../dataContext"
import { RouteContext } from "../routeContext";
import { services_data } from "../services_data";
import {DetailsPopup_component_styles} from '../unioned-styles'

export default function DetailsPopup({ id, handleColseDetails }) {
    const [neededObject, setNeededObject] = useState(null);
    const [location, setLocation] = useState('');

    const currentPath = useContext(RouteContext);

    useEffect(() => {
        setLocation(currentPath);
    }, [currentPath])

    const dataContext = useContext(DataContext);
    useEffect(() => {
        const objectsArray = currentPath === services_data[0].route_path ? dataContext.data : Object.values(dataContext.data.near_earth_objects)[0];
        objectsArray.forEach(element => {
            if (element.id === id || element.date === id) {
                setNeededObject(element);
            }
        }
        );
    }, [dataContext])

    useEffect(() => {
    }, [])

    useEffect(() => {
    }, [neededObject]);

    function handleClick() {
        handleColseDetails();
    }

    function handleParentClick(e) {
        if (e.target.classList.contains('detailsPopupContainer')) {
            handleColseDetails();
        }
    }
    const detailsStructure =
        location === services_data[0].route_path ?
            <div className={DetailsPopup_component_styles.popup_style}>
                <h1 className={DetailsPopup_component_styles.title_style} >{neededObject ? neededObject.title : 'loading data'}</h1>
                <p className={DetailsPopup_component_styles.caption_style}>{neededObject ? neededObject.explanation : 'loading data'}</p>
                <button onClick={handleClick} className={DetailsPopup_component_styles.button_style}><i class="fa-solid fa-x"></i></button>
            </div>
            : <div className={DetailsPopup_component_styles.popup_style}>
                <h1 className={DetailsPopup_component_styles.title_style} >The '{neededObject ? neededObject.name : 'loading data'}' Object</h1>
                {neededObject ? neededObject.is_potentially_hazardous_asteroid ?
                    <p className={DetailsPopup_component_styles.single_detail_style}>There is a small probability that it will hit us. <span><i class="fa-solid fa-skull-crossbones"></i></span></p> :
                    <p className={DetailsPopup_component_styles.single_detail_style}>This asteriod is far from hitting the earth. <span><i class="fa-solid fa-shield-heart"></i></span></p> : 'loading data'
                }
                <p className={DetailsPopup_component_styles.single_detail_style}>Distance from earth in km: {neededObject ? neededObject.close_approach_data[0].miss_distance.kilometers : 'loading data'} <span><i class="fa-solid fa-location-crosshairs"></i></span></p>
                <p className={DetailsPopup_component_styles.single_detail_style}>Estimated max diameter of asteriod in km: {neededObject ? neededObject.estimated_diameter.kilometers.estimated_diameter_max : 'loading data'} <span><i class="fa-solid fa-ruler"></i></span></p>
                <button onClick={handleClick} className={DetailsPopup_component_styles.button_style}><i class="fa-solid fa-x"></i></button>
            </div>;
    return (
        <div onClick={handleParentClick} className={DetailsPopup_component_styles.container_style}>
            {detailsStructure}
        </div>
    )
}