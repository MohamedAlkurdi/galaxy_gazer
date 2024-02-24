import { useContext, useEffect, useState } from "react"
import { DataContext } from "../dataContext"
import { services_data } from "../services_data";
import PicturesGrid from "../components/picturesGrid";
import MarsPicture from "../components/marsPicture";
import { ErrorContext } from "../errorContext";
import ErrorMessage from "../components/errorMessage";

export default function MarsPictures() {
    const [photos, setPhotos] = useState([]);
    const context = useContext(DataContext);
    const {error,errorUpdater} = useContext(ErrorContext);

    function randomInt() {
        return Math.floor(Math.random() * 196);
    }
    useEffect(() => {
        if (context.data && context.data.photos) {
            const dataUpdater = context.data.photos;
            const array = Array.from(uniqueIntegers());
            const photosUpdater = array.map((int) => {
                return dataUpdater[int];
            }, [])
            setPhotos(photosUpdater);
        }
    }, [context])
    function uniqueIntegers() {
        const uniqueGroup = new Set();
        while (uniqueGroup.size < 12) {
            uniqueGroup.add(randomInt());
        }
        return uniqueGroup;
    }
    const renderMarsPictures = photos.map(photo => {
        return <MarsPicture dataObject={photo} />
    })
    return (
        <div className="marsPicturesPage page relative flex flex-col lighter_bg">
            <div className="projectIntro flex flex-col gap-5 p-5 darker_color mt-10 mb-10">
                <h1 className="sectionTitle uppercase custom_text_shadow text-7xl darker_color w-full flex items-center justify-center tracking-widest max-md:text-4xl max-md:py-16 py-32">{services_data[3].projects_official_title}</h1>
                <p className="sectionCaption text-2xl darker_color">{services_data[3].project_introduction}</p>
            </div>
            <PicturesGrid cols={2}>
                {renderMarsPictures}
            </PicturesGrid>
            <ErrorMessage state={error.errorState} message={error.errorMessage}/>
        </div>
    )
}