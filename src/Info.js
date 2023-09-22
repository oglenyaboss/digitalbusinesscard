import React from "react";
import "./info.css";

export default function Info(){
    return(
        <div className="info">
            <img className={"ProfilePic"} src="/assets/ProfilePhoto.png" alt="ProfilePic" />
            <h1 className={"Name"}>Lenya Lozhkin</h1>
            <h3 className={"Job"}>Frontend Developer</h3>
            <p className={"Website"}>oglenya.website</p>
            <div className={"social-icons"}>
                <a className={"Mail-link"} href="mailto:oglenyaboss@icloud.com">
                    <img className={"social-icons-img"} src="/assets/Mail.svg" alt="EmailIcon" />
                    Mail
                </a>
                <a className={"Linked-link"} href="https://www.linkedin.com/in/lenya-lozhkin-370426292/">
                    <img className={"social-icons-img"} src="/assets/linkedin.svg" alt="LinkedInIcon" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}