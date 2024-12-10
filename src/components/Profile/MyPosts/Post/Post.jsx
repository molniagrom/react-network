import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {



    return (
        <div className={s.item}>
            <img
                src={"https://i-viaplay-com.akamaized.net/viaplay-prod/565/648/1709562939-471f7d2be420b10f20a1142a26021d8581019584.jpg?width=1600&height=900"}/>
            {props.message}
            <div>
                <span>like {props.quantityLike}</span>
            </div>
        </div>
    )
}
