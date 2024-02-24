import { useContext, useEffect, useState } from "react"
import { DataContext } from "../dataContext";
import { RouteContext } from "../routeContext";
import { services_data } from "../services_data";
import { ErrorContext } from "../errorContext";
import SearchResults from "./searchResults";
import {Search_component_style} from '../unioned-styles'

export default function Search() {
    
    const [searchInput, setSearchInput] = useState('');
    const [expand,setExpand] = useState(false);
    const [inputIsValid,setInputIsValid] = useState(false);
    const {showDetails,setShowDetails} = useState(false);

    const { error, errorUpdater } = useContext(ErrorContext);

    const dataContext = useContext(DataContext);
    const routeContext = useContext(RouteContext);
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const execludedClasses = [
        "searchBarInput", "fa-magnifying-glass", "searchBar",
    ]
    useEffect(()=>{
        const acceptedInput = dateRegex.test(searchInput);
        if(acceptedInput){
            if(checkDateValidaty(searchInput,defaultDate())){
                setInputIsValid(true);
            }else{
                errorUpdater(true,'The entered date is invalid.');
            }
        }
        else{
            errorUpdater(false,"");
        }
    },[searchInput])

    useEffect(()=>{
        if(inputIsValid){
        services_data.forEach((el)=>{
            if(el.route_path === routeContext){
            }
        })
        }
    },[inputIsValid])

    useEffect(()=>{
        services_data.forEach((el)=>{
            if(el.route_path === routeContext){
            }
        })
    },[])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            e.stopPropagation()
            const clickedElement = e.target;
            const isExcludedElement = execludedClasses.some(className =>
                clickedElement.classList.contains(className)
            );
            if (!isExcludedElement) {
                setSearchInput("");
            }
        })
    }, [])

    function defaultDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate() - 1).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function handleSearchInput(e) {
        setSearchInput(e.target.value);
    }
    function handleFocus(){
        setExpand(true);
    }
    function handleBlur(){
        setExpand(false);
    }
    
    function checkDateValidaty(inputDate,defaultDate){
        const inputDateDelays = inputDate.split('-');
        const defaultDateDelays = defaultDate.split('-');
        if(defaultDateDelays[0]>inputDateDelays[0] || !isNaN(inputDate) ){
            return true;
        }else if(defaultDateDelays[0]===inputDateDelays[0] && defaultDateDelays[0]>inputDateDelays[0]){
            return true;
        }else if(defaultDateDelays[0]===inputDateDelays[0] && defaultDateDelays[1]===inputDateDelays[1]&&defaultDateDelays[2]>inputDateDelays[2]){
            return true
        }
        else{
            return false;
        }
    }
    return (
        <div className={Search_component_style.search_style}>
            <div className={`${expand? 'max-sm:w-2/3 w-1/3' : 'max-sm:w-2/5 w-1/5'} ${Search_component_style.searchBar_style}`} >
                <input 
                value={searchInput}
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                className={Search_component_style.searchBarInput_style} 
                onChange={handleSearchInput} type="text" placeholder="yyyy-mm-dd" />
                <i class="fa-solid fa-magnifying-glass absolute right-5"></i>
                {expand ? <SearchResults inputChange={searchInput}/>:''}
            </div>
        </div>
    )

}
