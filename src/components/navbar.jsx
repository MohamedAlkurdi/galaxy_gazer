import { NavLink } from "react-router-dom";
import { navbar_styles } from "../unioned-styles.js";
import { services_data } from "../services_data.js";
import { useEffect, useState } from "react";
export default function Navbar() {
    const [showColumnNavigation, setShowColumnNavigation] = useState(false);
    const renderLinks = services_data.map(link => {
        return <NavLink to={`${link.route_path}`} className={`${navbar_styles.Navlink_style}`} >{link.nav_title}</NavLink>
    })
    function showSmallNavigation() {
        setShowColumnNavigation(prevState => !prevState);
    }
    function closeSmallNavigation() {
        setShowColumnNavigation(false);
    }
    // the code between this line and the next return statement is a try to detect the clicks out of specific elements
    const execludedClasses = [
        "smallScreenNavigationBtn", "fa-bars", "smallScreenNavigation", "closeMobileNavBtn", "columnNavigation", "navlink", "navbar"
    ]
    useEffect(() => {
        document.addEventListener('click', (e) => {
            e.stopPropagation()
            const clickedElement = e.target;
            const isExcludedElement = execludedClasses.some(className =>
                clickedElement.classList.contains(className)
            );
            if (!isExcludedElement) {
                setShowColumnNavigation(false);
            }
        })
    }, [])
    return (
        <div className={`${navbar_styles.container_style}`}>
            <NavLink to={'/'} className={`${navbar_styles.logo.section_style}`}>
                <span className={`${navbar_styles.logo.logo_design_style}`}>GG</span>
                <div className={`${navbar_styles.logo.logo_text_style}`}>
                    <p>galaxy</p>
                    <p>gazer</p>
                </div>
            </NavLink>
            <ul className={`${navbar_styles.Navlink_container_style}`}>
                {renderLinks}
            </ul>
            <div className={`${navbar_styles.signup_btn_container_style}`}>
                <NavLink to={'/account'} className={`${navbar_styles.signup_btn_style}`}>sign up</NavLink>
            </div>
            <button onClick={showSmallNavigation} className={navbar_styles.smallScreenNavigationBtn_style}><i class="fa-solid fa-bars"></i></button>
            <div className={`${showColumnNavigation ? 'block' : 'hidden'} ${navbar_styles.smallScreenNavigation_style}`}>
                <button onClick={closeSmallNavigation} className={navbar_styles.closeMobileNavBtn_style}><i class="fa-solid fa-x"></i></button>
                <ul className={navbar_styles.columnNavigation_style}>
                    {renderLinks}
                <NavLink to={'/account'} className={`${navbar_styles.signup_btn_style}`}>sign up</NavLink>
                </ul>
            </div>
        </div>
    )
}