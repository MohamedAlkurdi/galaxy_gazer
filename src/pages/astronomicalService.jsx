import React, { useEffect, useState } from 'react';
import { services_data } from "../services_data";
import axios from 'axios';
import Search from '../components/search';
import PictureOfTheDay from './pictureOfTheDay'
import NearObjects from './nearObjects';
import EarthPictures from './earthPictures';
import MarsPictures from '../pages/marsPictures';
import Loading from './loading';
import { DataContext } from '../dataContext';
import { RouteContext } from '../routeContext';
import { ErrorContext } from '../errorContext';
export default function AstronomicalService({ currentLocation }) {
    const [serviceObject, setServiceObject] = useState({});
    const [fetchedData, setFetchedData] = useState({});
    const [loading, setLoading] = useState(true);
    const validServices = services_data.map((item) => {
        return item.route_path;
    })
    const [error,setError] = useState({
        errorState:false,
        errorMessage:"",
    })

    function errorUpdater(state,message){
        setError(prevState=>({...prevState,errorState:state,errorMessage:message}));
    }

    useEffect(() => {
        if (validServices.includes(currentLocation)) {
            const object = services_data.find(element => element.route_path === currentLocation);
            setServiceObject(object);
        }
    }, [currentLocation]);

    useEffect(() => {
        fetchData();
        setLoading(true);
    }, [serviceObject])

    async function fetchData() {
        try {
            const res = await axios.get(serviceObject.API());
            setFetchedData(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        setLoading(false);
    }, [fetchedData])

    function detectCurrentPage() {
        switch (currentLocation) {
            case services_data[0].route_path: return <PictureOfTheDay data={fetchedData} />;
            case services_data[1].route_path: return <NearObjects />;
            case services_data[2].route_path: return <EarthPictures />;
            case services_data[3].route_path: return <MarsPictures />;
            default: console.error("unexpected route path.");
        }
    }

    const currentPage = detectCurrentPage();
    return (
        <>
            <DataContext.Provider value={fetchedData}>
                <RouteContext.Provider value={currentLocation}>
                <ErrorContext.Provider value={{error,errorUpdater}}>
                <Search />
                {loading ? <Loading /> : currentPage}
                </ErrorContext.Provider>
                </RouteContext.Provider>
            </DataContext.Provider>
        </>
    );
}