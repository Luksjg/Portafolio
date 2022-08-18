import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import style from "./AboutMe.module.css"

export default function AboutMe(){

    return(
        <div>
          <div>
            <NavBar/>
          </div>
          <div className={style.imgC}>
            <img src={"https://data.whicdn.com/images/349051544/original.gif"} alt="border" className={style.imgB}/>
            <img src={"https://res.cloudinary.com/dbgreenshop/image/upload/v1659281760/cvpic-removebg-preview_lj2p2p.png"} alt="selfie" className={style.img}/>
          </div>
          <div>
            <p className={style.p}>
I introduce myself, I am a full stack JavaScript developer specialized in React and passionate about rest APIs and the front-end, graduated from the SoyHenry bootcamp with more than 800 hours between studies and projects, currently I dedicate a full time to improve my skills as a programmer , you can contact me in the "cv" section if you have any questions. </p>
          </div>
          <div className={style.lc}>
              <label className={style.l}>JavaScript</label>
              <label className={style.l}>TypeScript</label>
              <label className={style.l}>ReactJS</label>
              <label className={style.l}>Redux</label>
              <label className={style.l}>NodeJS</label>
              <label className={style.l}>Express</label>
              <label className={style.l}>MySQL</label>
              <label className={style.l}>Git</label>
              <label className={style.l}>Jest</label>
          </div>
          <Footer/>
        </div>
    )
}