import MainPicture from "../components/mainPicture";
import PicturesGrid from "../components/picturesGrid";
import { useEffect,useState,useContext } from "react";
import { DataContext } from "../dataContext";
import PictureCard from "../components/pictureCard";
import { ErrorContext } from "../errorContext";
import ErrorMessage from "../components/errorMessage";

export default function EarthPictures(){
    const context = useContext(DataContext);
    const [cardsData, setCardsData] = useState([]);
    const {error,errorUpdater} = useContext(ErrorContext);

    function pictureDate(object){
        const rawDate = object.date;
        const shortDate = rawDate.substring(0, 10);
        const pictureDate = shortDate.replace(/-/g, "/");
        return pictureDate;
    } 

    useEffect(() => {
        if (Array.isArray(context.data)) {
            setCardsData(context.data);
        }
    }, [context]);

    const renderCards = cardsData.length > 0 ? cardsData.map((item) => {
        return <PictureCard key={item.id} dataObject={item} date={item.date} />;
    }) : "No data available";
    return(
        <div className="page relative">
            <MainPicture/>
            <PicturesGrid cols={3}>
                {renderCards}
            </PicturesGrid>
            <ErrorMessage state={error.errorState} message={error.errorMessage} />
        </div>
    )
}