import { common_styles, main_page_styles } from "../unioned-styles.js"
export default function Landing() {
    return (
        <div className={`${common_styles.default_page_style}`}>
            <div className={` ${main_page_styles.landing_section_style}`}>
                <h1 className={`${main_page_styles.landing_title_style} `}>dive into our beautifull universe!</h1>
            </div>
        </div>
    )
}