import React from "react"
import emailLogo from "../images/envelope-solid.svg"
import linkedIn from "../images/linkedin.svg"
import websiteLogo from "../images/globe-solid.svg"

export default function Main(){
    return(
<div className="main--container">
    <h3 className="main--heading main--content">
    Anahi Bravo
    </h3>
    <h4 className="main--h4--one main--content">
        Full-Stack Software Engineer
    </h4>
    <span className="main--span--two main--content">
      website
    </span>

    <button className="main--btn btn--email">
        <img src={emailLogo} className="email"/> Email
    </button> 
    <button className="main--btn btn--linkedin">
        <img src={linkedIn} className="linkedin"/> LinkedIn
    </button>    
   
   <div className="main--about--interest">
        <h3>About</h3>
        <p>Lachimolala</p>
        <h3>Interests</h3>
        <p>Crochet Crochet Chrochet</p>
   </div>
    

 </div>
    )
}