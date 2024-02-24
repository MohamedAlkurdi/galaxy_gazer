import key from './API_key.json'
const API_key = key.API_key;
function defaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate() - 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getSetOfDates() {
    const dates = [];
    for (let i = 0; i < 13; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
    }
    return dates;
}

console.log('get last 11 days: ', getSetOfDates()[10]);
const _10DaysBefore = getSetOfDates()[10];
const firstElement = getSetOfDates().slice(1, 2)[0];
const lastElement = getSetOfDates().slice(-1)[0];
console.log("last 11 days from the source of the truth: ", getSetOfDates().slice(0, 1))
console.log("first element from the source of the truth: ", firstElement)
console.log("last element from the source of the truth: ", lastElement)


export const services_data = [
    {
        nav_title: "universe today",
        route_path: "/astronomy_picture_of_the_day",
        image: "bg-[url('./assets/1.jpg')]",
        caption: "Marvel at the Astronomy Picture of the Day",
        mainPictureParameters: ['copyright', 'explanation', 'date', 'url', 'title'],
        API_end_point: `https://api.nasa.gov/planetary/apod?api_key=${API_key}`,
        projectInroduce: ``,
        projectsOfficialTitle: ``,
        API: (startDate = lastElement, endDate = firstElement) => {
            return `${services_data[0].API_end_point}&start_date=${startDate}&end_date=${endDate}`;
        },
    },
    {
        nav_title: "near objects",
        route_path: "/objects_near_earth",
        image: "bg-[url('./assets/8.jpg')]",
        caption: "track Near Earth Objects for a cosmic perspective",
        API_end_point: `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_key}`,
        projectInroduce: ``,
        projectsOfficialTitle: ``,
        API: (startDate = defaultDate(), endDate = defaultDate()) => {
            return `${services_data[1].API_end_point}&start_date=${startDate}&end_date=${endDate}`;
        },
    },
    {
        nav_title: "earth now",
        route_path: "/up_to_data_earth_pictures",
        image: "bg-[url('./assets/7.png')]",
        caption: "witness Earth's beauty through the Polychromatic Imaging Camera",
        API_end_point: `https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_key}`,
        mainPictureParameters: ['image', 'caption', 'date'],
        projectInroduce: ``,
        projectsOfficialTitle: ``,
        API: (date = defaultDate()) => {
            return `${services_data[2].API_end_point}&data=${date}`
        }
    },
    {
        nav_title: "explore mars",
        route_path: "/mars_rover_pictures",
        image: "bg-[url('./assets/mars.jpg')]",
        caption: "traverse the Martian landscape via Mars Rover Photos",
        API_end_point: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_key}`,
        project_introduction: `
        The Mars Rover Photos project is a captivating exploration initiative that unveils the Martian landscape
        through the lens of advanced rovers. Offering a unique perspective on the Red Planet, this project delves
        into the mysteries of Mars, presenting breathtaking snapshots that provide an up-close look at its terrain.
        Join us on an intriguing journey through the Mars Rover Photos project, where robotic emissaries share
        stunning visuals, unlocking the wonders of the Martian frontier.
        `,
        projects_official_title: `Mars Rover Photos`,
        API: (date = `2018-01-01`) => {
            return `${services_data[3].API_end_point}&earth_date=${date}`;
        }
    },
]

//`${_10DaysBefore}`