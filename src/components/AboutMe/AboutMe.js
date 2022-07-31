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
            <img src={"https://img.lovepik.com/free_png/33/55/63/27f58PICA64xAAh27p58PIC6T_PIC2018.png_860.png"} alt="selfie" className={style.img}/>
          </div>
          <div>
            <p className={style.p}>I am a full stack JavaScript developer specialized in React and passionate about fronted and rest APIs, graduated from the SoyHenry bootcamp, currently looking for my first job in the IT world and with a lot of potential to show</p>
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