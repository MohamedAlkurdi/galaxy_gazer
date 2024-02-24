import { planets } from "../loadingImages"
import { Loading_component_styles } from "../unioned-styles";
export default function Loading() {

    const randomINT = () => {
        return Math.floor(Math.random() * 4);
    }

    return <div className={Loading_component_styles.page_style}>
        <div className={Loading_component_styles.loadingPlaceholder_style}>
            <img src={planets[randomINT()]} alt="loading_image" className={Loading_component_styles.loadingImage_style}/>
            <p className={Loading_component_styles.loadingWord_style}>Loading...</p>
        </div>
    </div>
}