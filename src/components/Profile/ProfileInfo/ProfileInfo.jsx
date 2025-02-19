import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>*/}
            {/*</div>*/}
            <ProfileStatus status={props.status} upDateStatus={props.upDateStatus} />
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Avatar" className={s.avatar} />
                <div className={s.info}>
                    <p><strong>Имя:</strong> {props.profile.fullName}</p>
                    <p><strong>Работа:</strong> {props.profile.lookingForAJobDescription}</p>
                    <p><strong>Обо мне:</strong> {props.profile.aboutMe}</p>d
                    <p><strong>userID:</strong> {props.profile.userId}</p>
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
