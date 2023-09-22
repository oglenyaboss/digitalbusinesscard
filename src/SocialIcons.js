import React from "react";
import "./SocialIcons.css";
export default function SocialIcons(){
    return(
        <footer>
            <div className={"social-footer-icons"}>
                <a className={"social-icon-link"} href={"https://github.com/oglenyaboss"}>
                    <img className={"social-icons"} src="/assets/GitHubicon.svg" alt="GitHubIcon" />
                </a>
                <a className={"social-icon-link"} href={"https://t.me/oglenya"}>
                    <img className={"social-icons"} src="/assets/TelegramIcon.svg" alt="TelegramIcon" />
                </a>
            </div>
        </footer>
    )
}