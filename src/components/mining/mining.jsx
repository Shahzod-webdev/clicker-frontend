import React from "react";
import Avatar from "./Avatar/Avatar";
const tg = window.Telegram.WebApp;

const Mining =()=>{
    return(
        <div>
            <h1>Mining6</h1>
            <h1>{tg.initDataUnsafe?.user?.username}</h1>
            <Avatar />
        </div>
    )
}


export default Mining