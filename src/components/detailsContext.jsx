import { createContext } from "react";

export const DetailsContext = createContext({
    detailsShowState:false,
    detailsTitle:"",
    detailsBody:"",
})