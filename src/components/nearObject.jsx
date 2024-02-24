import { useEffect, useState } from 'react';
import {NearObject_component_styles} from "../unioned-styles"
export default function NearObject({ nearObjectData,URL,idUpdater,detailsStateUpdater }) {
    const [nearObjectsState, setNearObjectState] = useState({
        bool: false,
        objectsName: 'default name',
        objectId:0
    })
    useEffect(() => {
        if(nearObjectData){
        const updaterObject = {
            bool: nearObjectData.is_potentially_hazardous_asteroid,
            objectsName: nearObjectData.name,
            objectId:nearObjectData.id,
        }
        setNearObjectState(updaterObject);
    }
    }, [nearObjectData])
    const danger = nearObjectsState.bool ? 'maybe.' : 'nope.'

    function handleDetailsClick(){
        detailsStateUpdater();
        idUpdater(nearObjectData.id);
    }
    return (
        <div className={NearObject_component_styles.nearObject_style}>
            <div className={NearObject_component_styles.imageAndTitle_style}>
                <div className="nearObjectName text-2xl">{nearObjectsState.objectsName}</div>
                <img src={URL} alt="vector" className="asteriodVector w-[40%]"></img>
            </div>
            <div className={NearObject_component_styles.dangerStatus_style}>
                gonna hit us?
                <div className={`status ${nearObjectsState.bool ?'text-red-400': 'text-green-400' } `}>{danger}</div>
            </div>
            <div className={NearObject_component_styles.moreInfor_style}>
                <button onClick={handleDetailsClick} className='nearObjectDetailsBtn p-2 light_bg rounded-lg text-center font-bold uppercase'>more details</button>
            </div>
        </div>
    )
}