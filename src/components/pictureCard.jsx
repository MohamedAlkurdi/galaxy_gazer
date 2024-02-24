import { useContext, useEffect, useState } from 'react';
import key from '../API_key.json'
import { RouteContext } from '../routeContext';
import { services_data } from '../services_data';
import {PictureCard_component_styles} from '../unioned-styles'

export default function PictureCard({ dataObject,detailsStateUpdater,detateSetter }) {
    const [imageURL, setImageURL] = useState('');
    const [showOverlay, setOverLay] = useState(false);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('')

    const routeContext = useContext(RouteContext);

    function pictureDate(dateParameter) {
        const shortDate = dateParameter.substring(0, 10);
        const pictureDate = shortDate.replace(/-/g, "/");
        return pictureDate;
    }

    useEffect(() => {
        setLocation(routeContext);
    }, [routeContext])


    useEffect(() => {
        setDate(dataObject.date);
        if (typeof (dataObject) == "object") {
            if (services_data[2].route_path === routeContext) {
                const url = `https://api.nasa.gov/EPIC/archive/natural/${pictureDate(dataObject.date)}/png/${dataObject.image}.png?api_key=${key.API_key}`;
                setImageURL(url);
            } else {
                const url = dataObject.url;
                setImageURL(url);
            }
        }
    }, [dataObject])


    function handleMouseIn() {
        setOverLay(true);
    }
    function handleMouseOut() {
        setOverLay(false);
    }
    function handleClick() {
        detailsStateUpdater();
        detateSetter(date);
    }
    const picture_of_the_day_overlay =
        <>
            <h1 className={PictureCard_component_styles.cardTitle_style}>Picture of {date}</h1>
            <button onClick={handleClick} className={PictureCard_component_styles.button_style}>details</button>
        </>;
    const earth_pictures_overlay =
        <>
            <h1 className={PictureCard_component_styles.cardTitle_style}>{date}</h1>
        </>

    return (
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className={PictureCard_component_styles.pictureCard_style}>
            <img className={PictureCard_component_styles.cardImage_style} src={imageURL} alt="pic"></img>
            <div className={` ${PictureCard_component_styles.overlay_style} ${showOverlay ? 'show' : ''}`}>
                {location === services_data[0].route_path ? picture_of_the_day_overlay : earth_pictures_overlay}
            </div>
        </div>
    )
}