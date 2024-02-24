import { useContext, useState, useEffect } from "react";
import { DataContext } from "../dataContext";
import { RouteContext } from "../routeContext";
import { services_data } from "../services_data";
import key from '../API_key.json';
import TypewriterEffect from "./typewriterEffect";

export default function MainPicture() {
    const [URL, setURL] = useState("");
    const [dataSource, setDataSource] = useState({});
    const [currentRoute, setCurrentRoute] = useState("");
    const [mainPictureData, setMainPictureData] = useState({});
    const [bgColor, setBgColor] = useState('');

    const context = useContext(DataContext);
    const routeContext = useContext(RouteContext);

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    function makeUrl() {
        if (!isEmpty(mainPictureData)) {
            const rawDate = mainPictureData.date;
            const shortDate = rawDate.substring(0, 10);
            const pictureDate = shortDate.replace(/-/g, "/");
            const image = mainPictureData.image;
            return `https://api.nasa.gov/EPIC/archive/natural/${pictureDate}/png/${image}.png?api_key=${key.API_key}`;
        }
        return "";
    }

    useEffect(() => {
        if (Array.isArray(context.data) && context.data.length > 0) {
            const dataSourceUpdater = context.data[context.data.length - 1];
            setDataSource(dataSourceUpdater);
        }
    }, [context]);

    useEffect(() => {
        if (routeContext === services_data[0].route_path) {
            setBgColor('lighter_bg');
        } else {
            setBgColor('bg-[#000]');
        }
    }, [routeContext]);

    useEffect(() => {
        if (!isEmpty(mainPictureData)) {
            if (currentRoute === services_data[2].route_path) {
                setURL(makeUrl());
            } else {
                setURL(mainPictureData.url);
            }
        }
    }, [mainPictureData, currentRoute]);

    useEffect(() => {
        if (routeContext.length > 2) {
            setCurrentRoute(routeContext);
        }
    }, [routeContext]);

    useEffect(() => {
        if (!isEmpty(dataSource)) {
            const parametersObject = {};
            getParameters().forEach(element => {
                parametersObject[element] = dataSource[element];
            });

            if (areParametersDefined(parametersObject)) {
                setMainPictureData(parametersObject);
            }
        }
    }, [dataSource]);

    function getParameters() {
        switch (routeContext) {
            case services_data[0].route_path: return services_data[0].mainPictureParameters;
            case services_data[2].route_path: return services_data[2].mainPictureParameters;
            default: console.warn("Error occurred!");
        }
    }

    function areParametersDefined(myObject) {
        const entries = Object.entries(myObject);
        if (entries.length > 1) {
            const secondValue = entries[1][1];
            return secondValue !== undefined;
        }
        return false;
    }

    function render_structure() {
        const bool = currentRoute === services_data[0].route_path ? true : false;
        const caption = bool ? mainPictureData.explanation : mainPictureData.caption;
        const title = bool ? mainPictureData.title : mainPictureData.date;
        const color = bool ? 'darker_color' : 'lighter_color';
        const width = bool ? 'w-4/5 max-sm:w-[90vw]':'w-[45%] max-md:w-[90vh] max-md:h-[450px]';
        return (
            <div className={`p-5 w-full h-[calc(100vh - 76px)] flex flex-col items-center gap-5 ${bgColor}`}>
                <h1 className={`title ${color} text-4xl uppercase pt-5 pb-5`}>{title}</h1>
                <img className={`image h-[80vh]  relative object-cover object-center ${width} `} src={URL} alt="pic" />
                <TypewriterEffect fullTextProp={caption} textColor={color}/>
            </div>
        );
    }

    if (!context.data || context.data.length === 0) {
        return (
            <div className="w-full h-[calc(100vh - 76px)] darker_bg flex flex-col items-center gap-5">
                <div className="error-message">Data is not ready yet.</div>
            </div>
        );
    }

    return render_structure();
}
