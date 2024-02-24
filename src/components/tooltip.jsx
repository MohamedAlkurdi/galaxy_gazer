import {useStaet} from 'react'
export default function Tooltip({children}){
const [hovering,setHonering] = useStaet(false);
return(
    <div onMouseEnter={()=>{setHonering(true)}} onMouseLeave={()=>{setHonering(false)}}>
        {children}
    </div>
)
}