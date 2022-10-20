import React from "react"
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import style from "./Projects.module.css";

export default function Projects(){

    const mockImagenes = [
        {
            link:"https://api-weather-two.vercel.app/",
            url:'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png',
            name:"APP Weather",
            description:"Application that uses an external API to search weather information for all cities"
        },
        {
            link:"https://portafolio-umber-eta.vercel.app/",
            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png',
            name:"APP Countries",
            description:"application with a rest api with country information, filters by territorial information and relational database with activity proposals by country"
        },
        {
            link:"https://pf-eccomerce.vercel.app/",
            url:'https://res.cloudinary.com/dbgreenshop/image/upload/v1659245320/wwwww-removebg-preview_v51ufv.png',
            name:"Grow shop Eccomerce",
            description:"Functional ecommerce with a cannabis theme, it has a shopping cart, Mercado pago, register and login with firebase, a relational database that saves user purchases and an administrator panel."
        },
        {
            link:"https://portafolio-umber-eta.vercel.app/",
            url:'https://images.fineartamerica.com/images/artworkimages/medium/2/retro-80s-90s-vaporwave-palm-trees-gift-pink-blue-design-design-dc-designs-suamaceir-transparent.png',
            name:"This portafolio",
            description:"It is a small project that has just started but I hope to be able to expand with my skills over time"
        },
        {
            link:"https://ig-post-component.vercel.app/",
            url:'https://www.pngmart.com/files/21/Instagram-Logo-PNG-Image.png',
            name:"IG post card",
            description:"Instagram post component created for an interview test, using HTML, JS, CSS and swiperJS. done in one day"
        },
        {
            link:"https://portafolio-umber-eta.vercel.app/",
            url:'https://www.pngmart.com/files/21/Instagram-Logo-PNG-Image.png',
            name:"Telegram clone",
            description:"Telegram clone with login, real-time chat, groups and more details"
        }
        ,
        {
            link:"https://portafolio-umber-eta.vercel.app/",
            url:'https://www.pngmart.com/files/21/Instagram-Logo-PNG-Image.png',
            name:"Task app",
            description:"native application for android and ios, storing and modifying tasks in database"
        }
    ];


    return(
        <div>
            <NavBar/>
            <div className={style.container}>
    	        <Slider imagenes={mockImagenes}/>
            </div>
            <div className={style.space}></div>
            <Footer/>
        </div>
    )
}