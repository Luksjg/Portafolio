import React from "react"
import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

export default function NavBar(){
    return(
        <div>
                <p className={style.separator}></p>
            <div className={style.container}>
                <Link to={"/"}>
                    <label className={style.l}>
                        Home
                    </label>
                </Link>
                <Link to={"/aboutme"}>
                    <label className={style.l}>
                        About me
                    </label>
                </Link>
                <Link to={"/projects"}>
                    <label className={style.l}>
                        Projects
                    </label>
                </Link>
                <Link to={"/cv"}>
                    <label className={style.l}>
                        Contact me
                    </label>
                </Link>
            </div>
        </div>
    )
}