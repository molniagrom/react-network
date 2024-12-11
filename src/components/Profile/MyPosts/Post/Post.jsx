import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src={"https://promptsideas.b-cdn.net/prompts/279/wvJSVQrN1s5FBHDKfRnc.png"}/>
            {props.message}
            <div>
                <span>like {props.quantityLike}</span>
            </div>
        </div>
    )
}
