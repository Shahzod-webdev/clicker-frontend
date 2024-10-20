import React from "react";
import s from './avatar.module.css'



const Avatar = () =>{
    let balance = 0
    return(
        <div>

        <h1>${balance}</h1>
        <div className={s.avatar} onClick={balance++}>

        </div>
        </div>
    )
}


export default Avatar