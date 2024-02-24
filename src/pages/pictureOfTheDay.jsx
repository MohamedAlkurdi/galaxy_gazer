import MainPicture from "../components/mainPicture";
import PicturesGrid from "../components/picturesGrid";
import { useEffect,useState,useContext } from "react";
import { DataContext } from "../dataContext";
import PictureCard from "../components/pictureCard";
import DetailsPopup from "../components/detailsPopup";
import ErrorMessage from "../components/errorMessage";
import { ErrorContext } from "../errorContext";

export default function PictureOfTheDay() {
    const context = useContext(DataContext);
    const [cardsData, setCardsData] = useState([]);
    const [details,setDetails] = useState(false);
    const [date,setDate] = useState('');

    const { error, errorUpdater } = useContext(ErrorContext);

    function detailsStateUpdater(){
        setDetails(true);
    }

    function handleColseDetails(){
        setDetails(false);
    }
    function detateSetter(d){
        setDate(d);
    }
    useEffect(() => {
        if (Array.isArray(context.data)) {
            setCardsData(context.data);
        }
    }, [context]);

    const renderCards = cardsData.length > 0 ? cardsData.map((item) => {
        return <PictureCard key={item.id} dataObject={item} detailsStateUpdater={detailsStateUpdater} detateSetter={detateSetter} />;
    }) : "No data available";

    return(
        <div className="page relative">
            <MainPicture/>
            <PicturesGrid cols={2}>
                {renderCards}
            </PicturesGrid>
            {details ? <DetailsPopup id={date} handleColseDetails={handleColseDetails}/> : ''}
            <ErrorMessage state={error.errorState} message={error.errorMessage} />
        </div>
    )
}