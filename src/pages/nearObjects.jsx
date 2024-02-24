import { useContext, useEffect, useState } from "react";
import { DataContext } from "../dataContext";
import NearObject from "../components/nearObject";
import PicturesGrid from "../components/picturesGrid";
import { vectors } from "../nearObjectsVectors";
import DetailsPopup from "../components/detailsPopup";
import ErrorMessage from "../components/errorMessage";
import { ErrorContext } from "../errorContext";

export default function NearObjects() {
    const [nearObjectsData, setNearObjectsData] = useState([]);
    const [details,setDetails] = useState(false);
    const [id,setId] = useState('');
    const context = useContext(DataContext);

    const {error,errorUpdater} = useContext(ErrorContext);
    function detailsStateUpdater(){
        setDetails(true);
    }

    function handleColseDetails(){
        setDetails(false);
    }
    function idUpdater(id){
        setId(id);
    }
    useEffect(() => {
        if (context && context.data && context.data.near_earth_objects) {
            const todaysUpdate = context.data.near_earth_objects;
            const keys = Object.keys(todaysUpdate);
            const value = todaysUpdate[keys[0]];
            setNearObjectsData(value);  
        }
    }, [context]);

    const renderNearObjects = nearObjectsData.map((item, index) => (
        <NearObject key={index} nearObjectData={item} URL={vectors[index]} idUpdater={idUpdater} detailsStateUpdater={detailsStateUpdater} />
    ));

    return (
        <div className="nearObjects">
            <PicturesGrid cols={3}>
                {renderNearObjects}
            </PicturesGrid>
            {details ? <DetailsPopup id={id} handleColseDetails={handleColseDetails}/> : ''}
            <ErrorMessage state={error.errorState} message={error.errorMessage}/>
        </div>
    );
}
