import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {
    // debugger

    if (!props.profile) {
        return <Preloader />
    }
    // debugger
    return (
        <div>
            <div>
                <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt="Avatar" className={s.avatar} />
                <div className={s.info}>
                    <p><strong>Имя:</strong> {props.profile.fullName}</p>
                    <p><strong>Работа:</strong> {props.profile.lookingForAJobDescription}</p>
                    <p><strong>Обо мне:</strong> {props.profile.aboutMe}</p>
                    {props.profile.contacts.instagram && (
                        <p>
                            <strong>Instagram:</strong>
                            <a href={`https://instagram.com/${props.profile.contacts.instagram}`}
                               target="_blank"
                               rel="noopener noreferrer"
                               className={s.instagram}>
                                {` @${props.profile.contacts.instagram}`}
                            </a>
                        </p>
                    )}
                </div>
            </div>

        </div>
    )
}
