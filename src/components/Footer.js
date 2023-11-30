import React from "react"
import twitterLogo from "../images/twitter.svg"
import githubLogo from "../images/github.svg"


export default function Footer(){
    return(
    <div className="footer--container">
        <img src={twitterLogo} className="footer--image" />
        <img src={githubLogo} className="footer--image" />
    </div>
    )
}