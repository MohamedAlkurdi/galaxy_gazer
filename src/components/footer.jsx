import { NavLink } from "react-router-dom";
import { services_data } from "../services_data.js";
import logo1 from '../assets/flactionLogo.png'
import logo2 from '../assets/nasaLogo.png'
import {footer_component_styles} from '../unioned-styles.js'

export default function Footer() {

    const renderLinks = services_data.map(link => {
        return <NavLink to={`${link.route_path}`} className={`lighter_color flex-1 min-w-[120px] pt-4 pb-4`} >{link.nav_title}</NavLink>
    })

    return (
        <div className={footer_component_styles.footerContainer_style}>
            <ul className={footer_component_styles.footerLinks_style}>
                {renderLinks}
                <NavLink to={`/account`} className={`lighter_color flex-1 min-w-[120px] pt-4 pb-4`} >join us</NavLink>
            </ul>
            <div className="logosCotainer w-3/4">
                <div className={footer_component_styles.logos_style}>
                    <img src={logo1} alt="flaction" className="footerLogo h-20" />
                    <div className="flex items-center">
                        <img src={logo2} alt="nasa" className="footerLogo h-20" />
                        <span className="text-xl lighter_color relative left-[-50px]">Nasa APIs</span>
                    </div>
                    <NavLink to={'/'} className={'footerLogo lighter_color text-4xl h-20 flex items-center justify-center'}>Glaxay Gazer</NavLink>
                </div>
            </div>
            <div className={footer_component_styles.mailSub_style}>
                <p className={footer_component_styles.mailSubQuestion_style}>Wanna allways get updated?</p>
                <div className={footer_component_styles.mailInputContainer_style}>
                <input className={footer_component_styles.mailSubEmailInput_style} type="text" name="email" placeholder="Enter your email..."/>
                <button className={footer_component_styles.mailSubSubmitBtn_style}>Subsecribe</button>
                </div>
            </div>
            <div className={footer_component_styles.footerMedia_style}>
                <hr className="w-1/2 seperator"/>
                <div className={footer_component_styles.links_style}>
                <a target='blank' href="https://www.facebook.com/profile.php?id=100012475842352"><i class="fa-brands fa-square-facebook"></i></a>
                <a target='blank' href="https://twitter.com/muhammed_he"><i class="fa-brands fa-square-twitter"></i></a>
                <a target='blank' href="https://www.instagram.com/muhammed.alkurdi.he/"><i class="fa-brands fa-instagram"></i></a>
                <a target='blank' href="https://www.linkedin.com/in/mohamed-alkurdi-5b97b3243/"><i class="fa-brands fa-linkedin"></i></a>
                <a target='blank' href="https://github.com/MohamedAlkurdi?tab=repositories"><i class="fa-brands fa-square-github"></i></a>
                </div>
            </div>
        </div>
    )
}