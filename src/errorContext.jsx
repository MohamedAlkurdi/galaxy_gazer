import { createContext } from "react";

export const ErrorContext = createContext({
    error : {
        errorState:false,
        errorMessage:"",
    },
    
});