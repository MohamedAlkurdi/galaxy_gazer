import { useEffect } from "react"
import { common_styles,services_component_styles } from "../unioned-styles.js"
import Aos from "aos"
import { NavLink } from "react-router-dom"
import { services_data } from "../services_data.js"
export default function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const renderSrvices = services_data.map((service, index) => {
        const flow = (index + 2) % 2 === 0;
        return (
            <div className={`${services_component_styles.service_card_style} flex max-md:flex-col`}>
                {flow ? (
                    <>
                        <div className={`${services_component_styles.caption_styles.caption_container_style} max-md:order-2`}>
                            <h3 className={`${services_component_styles.caption_styles.title_style} max-md:text-3xl`}>{service.caption}</h3>
                            <NavLink to={`${service.route_path}`} className={`${services_component_styles.caption_styles.navlink_style}`}>explore <i className="export_arrow_animation relative fa-solid fa-arrow-right-long"></i></NavLink>
                        </div>
                        <div className={`${service.image} ${services_component_styles.service_card_image_style} max-md:order-1`}></div>
                    </>
                ) : (
                    <>
                        <div className={`${service.image} ${services_component_styles.service_card_image_style}`}></div>
                        <div className={`${services_component_styles.caption_styles.caption_container_style}`}>
                            <h3 className={`${services_component_styles.caption_styles.title_style} max-md:text-3xl`}>{service.caption}</h3>
                            <NavLink to={`${service.route_path}`} className={`${services_component_styles.caption_styles.navlink_style}`}>explore <i className="export_arrow_animation relative fa-solid fa-arrow-right-long"></i></NavLink>
                        </div>
                    </>
                )}
            </div>
        );
    });
    return (
        <div className={`${common_styles.default_section_style}`}>
            <h1 className={`${common_styles.section_title_style} max-sm:text-5xl `}>services</h1>
            <div className={services_component_styles.service_cards_container}>
                {renderSrvices}
            </div>
        </div>
    )
}