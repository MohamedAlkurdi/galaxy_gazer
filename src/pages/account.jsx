import { useContext, useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";

export default function Account(){
    const [activeSession,setActiveSession] = useState(false); //activeSession === true =>render login component, else render signup component.

    function updateSession(bool){
        setActiveSession(bool);
    }

    return(
        activeSession ? <Login updateSession={updateSession}/> : <Signup updateSession={updateSession}/>
    )
}