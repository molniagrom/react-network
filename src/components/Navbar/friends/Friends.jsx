import React from "react";
import s from "./Friends.module.css";
import { Friend } from "./Friend/Friend";

export const Friends = (props) => {

    let friendsElements = props.state.map(f => (
        <Friend id={f.id} key={f.id} avatar={f.avatar} nickname={f.nickname} />
    ));

    return (
        <div className={s.friends}>
            <p>Friends</p>
            <div className={s.containerToFriends}>
                {friendsElements}
            </div>
        </div>
    );
};
