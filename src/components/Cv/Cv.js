import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import style from "./Cv.module.css"

export default function Cv(){
    return(
        <div>
            <NavBar/>
            <div className={style.imgC}>
                <a href="https://drive.google.com/file/d/1N3aW1u7jw-t5pSqvAFEm-GKnMoVl_SPJ/view?usp=sharing" rel="noreferrer" target="_blank">
                    <img src={"https://res.cloudinary.com/dbgreenshop/image/upload/v1660602394/CV_1.0_zfscw7.png"} alt="cv" className={style.img}/>
                </a>
            </div>
            <div className={style.container}>
                <div className={style.logoC}>
                    <a href="https://github.com/Luksjg" rel="noreferrer" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" className={style.logo}/>
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-j-gomez/" rel="noreferrer" target="_blank">
                        <img src="https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-Isolated-Image.png" alt="logo" className={style.logo}/>
                    </a>
                    <a href="https://wa.me/541144405959" rel="noreferrer" target="_blank">
                        <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-4.png" alt="logo" className={style.logo}/>
                    </a>
                    <a href="mailto:lucasjg696@gmail.com" rel="noreferrer" target="_blank">
                        <img src="https://icones.pro/wp-content/uploads/2021/03/icone-gmail-logo-png-noire.png" alt="logo" className={style.logo}/>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
