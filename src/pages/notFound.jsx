import { NotFound_component_styles } from '../unioned-styles'
import IMG from '../assets/error-404.png'

export default function NotFound() {
    return (
        <div className={NotFound_component_styles.notFoundPage_style}>
            <div className={NotFound_component_styles.elementsContainer_style}>
                <img style={{minWidth:"200px"}} src={IMG} alt="not_found max-md:w-full  " className="w-1/3" />
                <p style={{minWidth:"150px"}} className="w-2/3 text-7xl max-md:w-full  ">Not found 404.</p>
            </div>
        </div>
    )
}