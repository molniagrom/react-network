import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <ProfileStatusWithHooks status={props.status} upDateStatus={props.upDateStatus}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt="Avatar" className={s.avatar}/>
                {props.isOwner &&
                    <>
                        <input className={s.fileUpload} onChange={mainPhotoSelected} type={"file"}/>
                        <span>Выберите файл</span>
                    </>
                }
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
