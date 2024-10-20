import React from "react";
import Avatar from "./Avatar/Avatar";
const tg = window.Telegram.WebApp;

const Mining =()=>{
    return(
        <div>
            <h1>Mining</h1>
            <span>{tg.username}</span>

            <Avatar />
        </div>
    )
}


export default Mining