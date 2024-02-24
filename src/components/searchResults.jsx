import { useContext, useEffect, useState } from "react";
import { DataContext } from "../dataContext";
import { RouteContext } from "../routeContext";
import { services_data } from "../services_data";
import IMG from '../assets/asteroid1.png';

export default function SearchResults({inputChange}){

    // const [renderResults,setRenderResults] = useState(null);

    // const DATA = useContext(DataContext);
    // const ROUTE = useContext(RouteContext);

    // useEffect(()=>{
    //     console.log('ROUTE from the lowest level: ',ROUTE);
    // },[])

    // useEffect(()=>{
    //     if(ROUTE===services_data[0].route_path){
    //         console.log(DATA.data)
    //         const resultItems = DATA.data;
    //         setRenderResults(
    //             resultItems.map(item=>
    //                 <li className="searchResult flex items-center justify-between p-2 min-h-[90px] hover:bg-gray-400 cursor-pointer">
    //                         <img src={`${item.url}`} alt='img' className="searchResultImg object-cover max-h-[100%] w-1/3 object-center"/>
    //                         <p className="searchResultTitle">{item.title}</p>
    //                 </li>
    //         )
    //         )
    //     }
    // },[ROUTE])

    // useEffect(()=>{
    //     console.log('DATA from the lowest level: ',DATA);
    // },[DATA])

    return(
        <ul className="searchResults w-[calc(100%-16px)] top-10 pt-3 pb-3 z-50 bg-gray-200 absolute flex flex-col">
                <li className="searchResult flex items-center justify-between p-2 min-h-[70px] hover:bg-gray-400 cursor-pointer">
                    <img src={`${IMG}`} alt='img' className="searchResultImg object-cover max-h-[100%] w-1/3 object-center"/>
                    <p className="searchResultTitle">This feature is coming soon (maybe).</p>
                </li>
        </ul>
    )
}