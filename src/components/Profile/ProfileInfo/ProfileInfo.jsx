import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
import {ProfileDataForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

export const ProfileInfo = ({error, profile, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const [localError, setLocalError] = useState(null); // Добавляем локальный state для ошибки

    if (!profile) {
        return <Preloader/>;
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = async () => {
        const response = await saveProfile();

        if (response?.message?.length) {
            setLocalError(response.message); // Запоминаем ошибку
            return; // Не выключаем режим редактирования
        }
        setLocalError(null); // Очищаем ошибку, если всё прошло успешно
        setEditMode(false); // Только если ошибок нет
    };


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    src={profile.photos.large || userPhoto}
                    alt="Avatar"
                    className={s.avatar}
                />
                {isOwner && (
                    <form method="post" encType="multipart/form-data">
                        <div className={s.inputFileRow}>
                            <label className={s.inputFile}>
                                <input
                                    onChange={mainPhotoSelected}
                                    type="file"
                                    name="file[]"
                                    multiple
                                    accept="image/*"
                                />
                                <span>Выберите файл</span>
                            </label>
                            <div className={s.inputFileList}></div>
                        </div>
                    </form>
                )}
                {editMode ? (
                    <ProfileDataForm error={localError} profile={profile} onSubmit={onSubmit}/>
                ) : (
                    <ProfileData
                        goToEditeMode={() => setEditMode(true)}
                        profile={profile}
                        isOwner={isOwner}
                    />
                )}
            </div>
        </div>
    );
};

export const Contact = ({contactTitle, contactValue}) => (
    <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue || "—"}
    </div>
);