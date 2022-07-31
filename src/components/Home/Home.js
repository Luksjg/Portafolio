import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Home(){

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Header/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}