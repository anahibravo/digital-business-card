import React from "react"
import profilePicture from "../images/profilePicture.png"

export default function Header(){
    return(
        <div className="header--container">
            <img src={profilePicture} alt="" width="160px" height="200px"/>
         </div>   
    )
}