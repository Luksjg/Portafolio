import React from "react"
import style from "./Header.module.css"


export default function Header(){

    return(
        <div>
            <div>
            <article>
                <h1 className={style.name}>Lucas J. Gomez</h1>
                <p>Full stack developer</p>
            </article>
            </div>
        </div>
    )
}