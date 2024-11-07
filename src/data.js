import tour1 from './images/1.jpg';
import tour2 from './images/2.jpg';
import tour3 from './images/3.png';
import tour4 from './images/4.png';

export const pageLinks = [
    {id:1, href: "#home", text: "home"},
    {id:2, href: "#about", text: "about"},
    {id:3, href: "#services", text: "services"},
    {id:4, href: "#tours", text: "tours"},
];

export const iconLinks = [
    {id:1, href: "http://www.facebook.com", icon: "fa-brands fa-facebook"},
    {id:2, href: "http://www.twitter.com", icon: "fa-brands fa-twitter"},
    {id:3, href: "http://www.instagram.com", icon: "fa-brands fa-instagram"},
    {id:4, href: "http://www.whatsapp.com", icon: "fa-brands fa-whatsapp"},
];

export const tours = [
    {id:1, image: tour1, date: "Aug 26th, 2024", title: "VIP beach", info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!", location: "Hong Kong", duration: "12 hours", cost: "from $12000"},
    {id:2, image: tour2, date: "Aug 26th, 2024", title: "Relax beach", info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae", location: "Hong Kong", duration: "3 hours", cost: "from $7500"},
    {id:3, image: tour3, date: "Aug 26th, 2024", title: "Garden beach", info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!", location: "Hong Kong", duration: "1.5 hours", cost: "from $4500"},
    {id:4, image: tour4, date: "Aug 26th, 2024", title: "Mountain beach", info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quae!", location: "Hong Kong", duration: "6 hours", cost: "from $9000"},
]

export const services = [
    {id:1, icon: 'fa-solid fa-champagne-glasses', title:"champagne party", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"},
    {id:2, icon: 'fa-solid fa-umbrella-beach', title:"sun & beach", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"},
    {id:3, icon: 'fa-solid fa-face-grin-hearts', title:"amazing comfort", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, unde!"},
]