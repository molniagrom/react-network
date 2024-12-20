import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src={"https://img.freepik.com/premium-photo/flat-icon-design_1258715-207027.jpg?semt=ais_hybrid"}/>
            {props.message}
            <div>
                <span>like {props.quantityLike}</span>
            </div>
        </div>
    )
}
