import s from "./Friends.module.css";
import React from "react";
import {Friend} from "./Friend/Friend";

export const Friends = (props) => {
// debugger
    let friendsElements = props.state.map( f =>
        <Friend id={f.id} key={f.id} avatar={f.avatar} name={f.nickname}/>
    );

    return (
        <div className={s.friends}>
            <p>Friends</p>
            <div className={s.containerToFriends}>
                {friendsElements}
            </div>
        </div>
    )
}