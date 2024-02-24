export const navbar_styles = {
    Navlink_style: "navlink darker_color text-xl lighter_color capitalize h-full flex flex-1 items-center justify-center hover:bg-[#00ADB5] hover:text-[#222831]",
    container_style: "navbar darker_bg flex items-stretch bg-[url('./assets/stars.png')] bg-cover bg-center darker_lower_shadow relative z-10  max-sm:justify-between",
    logo: {
        section_style: "logoSecion flex flex-2 items-center gap-2 pb-2 pt-2 pl-4 pr-4  max-sm:flex-[0]",
        logo_design_style: "logo text-6xl light_text custom_letter_spacing lighter_color ",
        logo_text_style: "logoText capitalize flex-col justify-between lighter_color",
    },
    Navlink_container_style: "links flex justify-around flex-8  max-sm:hidden",
    signup_btn_container_style: "signup flex justify-end items-center flex-2 pb-2 pt-2 pr-4  max-sm:hidden",
    signup_btn_style: "border-[1px] border-[#EEEEEE] lighter_color text-xl  rounded-md pt-1 pb-1 pl-2 pr-3 capitalize",
    smallScreenNavigationBtn_style: "smallScreenNavigationBtn text-2xl sm:hidden max-sm:block mr-6 lighter_color cursor-pointer",
    smallScreenNavigation_style: "smallScreenNavigation darker_bg absolute top-[75px] z-20 p-4 right-0",
    closeMobileNavBtn_style: "closeMobileNavBtn absolute right-3 top-3 lighter_color",
    columnNavigation_style: "columnNavigation flex p-3 flex-col gap-4 pt-6",
}
export const main_page_styles = {
    landing_section_style: "landing w-full h-[calc(100vh-76px)] flex items-center justify-center bg-black bg-[url(./assets/5.jpg)] bg-cover bg-center bg-no-repeat",
    landing_title_style: "landingTitle font-semibold text-7xl lighter_color capitalize custom_text_shadow  pl-4 pr-4 landing-[70px]",
}
export const services_component_styles = {
    service_cards_container: "services flex flex-col gap-12 w-full",
    service_card_style: "srvice width-full h-96 flex hover:bg-[url('./assets/stars_largeBG.png')]  rounded-lg darker_bg overflow-hidden gap-3",
    service_card_image_style: "serviceImage flex-1 h-full bg-cover bg-center",
    caption_styles: {
        caption_container_style: "serviceCaption flex-1 p-4 flex h-full flex-col justify-center items-center gap-16 bg-cover bg-center",
        title_style: "custom_text_shadow text-5xl lighter_color font-bold",
        navlink_style: "flex items-center gap-2 text-lg capitalize lighter_color pt-2 pb-2 pl-3 pr-3 border-[1px] border-[#EEEEEE] rounded-md",
    }
}
export const common_styles = {
    default_page_style: "page min-h-screen flex flex-col lighter_bg",
    default_section_style: "flex lighter_bg flex-col items-center pr-4 pl-4 pb-24",
    section_title_style: "section_title uppercase custom_text_shadow  tracking-widest text-7xl darker_color w-full flex items-center justify-center py-40 ",
}

export const marsPicture_component_styels = {
    card_general_style: "marsPictureContaienr relative",
    card_image_style: "w-full h-72 object-cover object-center",
    overlay_style: "overlay absolute w-full h-full transition  bg-black bg-opacity-50 flex flex-col justify-center gap-7 items-center top-0 left-0 ${showOverlay ? 'show' : '' ",
    h1_style: "capitalize text-4xl lighter_color",
}

export const AsteriodDetailsPopup_component_styles = {
    container_style: "detailsPopupContainer top-0 left-0 h-screen w-screen flex items-center fixed justify-center",
    popup_style: "detailsPopup custom_gray_box_shadow box show relative flex flex-col gap-10 min-h-60vh w-2/3 bg-slate-600 p-8 rounded-xl justify-evenly",
    popup_title_style: "detailsTitle text-4xl lighter_color custom_text_shadow",
    popup_caption: "detailsCaption text-[20px] lighter_color",
    button_style: "closeDetailsPopup absolute top-3 left-4 lighter_color cursor-pointer"
}

export const DetailsPopup_component_styles = {
    container_style: "detailsPopupContainer top-0 left-0 h-screen w-screen flex items-center fixed justify-center z-50",
    popup_style: "detailsPopup custom_gray_box_shadow box show relative flex flex-col gap-10 min-h-60vh w-2/3 bg-slate-600 p-8 rounded-xl justify-evenly max-sm:w-[90%]",
    title_style: "detailsTitle text-4xl lighter_color custom_text_shadow",
    caption_style: "detailsCaption text-[20px] lighter_color",
    single_detail_style: "detail lighter_color text-xl text-left flex justify-between",
    button_style: "closeDetailsPopup absolute top-3 left-4 lighter_color cursor-pointer",
}

export const ErrorMessage_component_styles = {
    errorMessage_style: "errorMessage fixed bottom-2 right-2 p-4 rounded-xl bg-[#6495ed]",
    errorMessageContent_style: "errorMessageContent w-full h-full lighter_color",
}
export const footer_component_styles = {
    footerContainer_style: "footerContainer flex flex-col items-center p-5 darker_bg gap-10",
    footerLinks_style: "footerLinks flex w-full justify-around flex-wrap",
    logos_style: "logos flex items-center justify-center flex-wrap",
    mailSub_style: "mailSub flex flex-row max-lg:flex-wrap justify-around items-center w-2/3 gap-4",
    mailSubQuestion_style: "mailSubQuestion w-1/2 text-2xl lighter_color min-w-[300px] max-lg:w-full ",
    mailInputContainer_style: "mailInputContainer flex flex-row rounded-lg overflow-hidden w-1/2 max-lg:w-full",
    mailSubEmailInput_style: "mailSubEmailInput p-2 w-full focus:outline-none placeholder:text-black",
    mailSubSubmitBtn_style: "mailSubSubmitBtn rounded-lg light_bg relative left-[-10px] lighter_color text-xl capitalize p-2",
    footerMedia_style: "footerMedia flex flex-col items-center w-1/3 lighter_color gap-6",
    links_style: "links flex justify-around items-center w-full  text-xl",
}

export const InputGuide_component_styles = {
    guideContainer_style: "guideContainer max-md:right-[-25%] max-md:w-44 inputGuideBox bg-[#6495ed] absolute w-48 right-[-55%] top-0 z-50 p-4 rounded-lg rounded-tl-none",
    guidePointer_style: "guidePointer absolute border-x-8 border-y-8 border-x-[#6495ed] border-y-[#6495ed] border- border-t-transparent border-b-transparent border-l-transparent top-0 left-[-16px]",
    instructions_style: "instructions flex flex-col w-full list-inside",
}

export const login_component_styles = {
    login_style: "login flex flex-col items-center justify-center h-[100vh] gap-4",
    login_panel_style: "login_panel max-md:justify-center max-md:w-[90%] h-4/5 w-2/3 dark_bg flex items-center rounded-xl dark_box_shadow",
    loginImage_style: "loginImage max-md:hidden w-1/2 object-cover object-center h-full rounded-tl-xl rounded-bl-xl",
    loginForm_style: "loginForm max-md:w-full w-1/2 p-4 pt-12 pb-12 flex flex-col items-center justify-between h-full ",
    loginPanelTitle_style: "loginPanelTitle text-4xl lighter_color tracking-wider mb-8",
    loginBtn_style: "loginBtn capitalize pt-1 pb-1 pl-2 pr-2 lighter_bg rounded-lg text-lg mt-8",
    accountLinks_style: "accountLinks flex w-1/4 justify-around",
    homeLink_style: "homeLink dark_bg lighter_color homeLink rounded-[50%] w-12 h-12  flex items-center justify-center",
    signupLink_style: "signupLink dark_bg lighter_color rounded-[50%] w-12 h-12 flex items-center justify-center"
}

export const NearObject_component_styles = {
    nearObject_style: "nearObject rounded-lg flex flex-col w-full gap-5 p-3 darker_bg lighter_color uppercase",
    imageAndTitle_style: "imageAndTitle flex flex-row items-center justify-between",
    dangerStatus_style: "dangerStatus flex flex-col gap-2",
    moreInfor_style: "moreInfor flex items-center justify-center",
}

export const PictureCard_component_styles = {
    pictureCard_style: ",pictureCard relative w-full h-72 max-md:h-96 ",
    cardImage_style: "cardImage w-full h-72 max-md:h-96 object-cover object-center z-10",
    overlay_style: "overlay absolute w-full h-full transition  bg-black bg-opacity-50 flex flex-col justify-center items-center gap-12 top-0 left-0",
    cardTitle_style: "cardTitle text-4xl lighter_color",
    button_style: "uppercase p-3 lighter_bg darker_color text-2xl rounded-lg",
}

export const Search_component_style = {
    search_style: "search lighter_lower_shadow relative light_bg h-16 flex items-center pl-4 pr-4 pt-7 pb-7 w-full ",
    searchBar_style: "flex items-center justify-between p-2 duration-300 relative",
    searchBarInput_style: "searchBarInput p-2 w-full rounded-lg focus:outline-none",
}

export const SearchResults_component_styles = {
    searchResults_style: "searchResults w-[calc(100%-16px)] top-10 pt-3 pb-3 z-50 bg-gray-200 absolute flex flex-col",
    searchResult_style: "searchResult flex items-center justify-between p-2 min-h-[70px] hover:bg-gray-400 cursor-pointer",
    searchResultImg_style: "searchResultImg object-cover max-h-[100%] w-1/3 object-center",
}

export const Signup_component_styles = {
    signup_style: "signup flex flex-col items-center justify-center h-[100vh] gap-4 ",
    signupPanel_style: "signupPanel max-md:justify-center max-md:w-[90%] h-4/5 w-2/3 dark_bg flex items-center rounded-xl dark_box_shadow",
    signupImage_style:"signupImage max-md:hidden max-md:w-1/3 w-1/2 object-cover object-center h-full rounded-tl-xl rounded-bl-xl",
    signupForm_style:"signupForm max-md:w-full w-1/2 p-4 pt-12 pb-12 flex flex-col items-center max-md:gap-2 md:justify-between md:h-full",
    formTitle_style:"formTitle text-4xl lighter_color tracking-wider mb-8",
    signupBtn_style:"signupBtn capitalize pt-1 pb-1 pl-2 pr-2 lighter_bg rounded-lg text-lg mt-8",
    accountLinks_style:"accountLinks flex w-1/4 justify-around",
    homeLink_style:"homeLink dark_bg lighter_color rounded-[50%] w-12 h-12  flex items-center justify-center",
    loginLink_style:"loginLink dark_bg lighter_color rounded-[50%] w-12 h-12 flex items-center justify-center",
}

export const Loading_component_styles = {
    page_style:"page page_default_height w-full flex items-center justify-center",
    loadingPlaceholder_style:"loadingPlaceholder flex flex-col items-center gap-5",
    loadingImage_style:"loadingImage w-44 h-44 rotateAnimation",
    loadingWord_style:"loadingWord text-3xl darker_color",
}

export const MarsPictures_component_styles = {
    marsPicturesPage_style:"marsPicturesPage page relative flex flex-col lighter_bg",
    projectIntro_style:"projectIntro flex flex-col gap-5 p-5 darker_color mt-10 mb-10",
    sectionTitle_style:"sectionTitle uppercase custom_text_shadow text-7xl darker_color w-full flex items-center justify-center tracking-widest max-md:text-4xl max-md:py-16 py-32",
    sectionCaption_style:"sectionCaption text-2xl darker_color",
}

export const NotFound_component_styles = {
    notFoundPage_style:"notFoundPage h-screen w-full flex flex-col justify-center items-center lighter_bg",
    elementsContainer_style:"elementsContainer flex w-2/3 items-center justify-center flex-wrap max-md:gap-4 max-md:w-[90%]",
}