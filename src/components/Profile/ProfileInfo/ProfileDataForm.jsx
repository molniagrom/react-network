import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import s from "./ProfileInfo.module.css";

export const ProfileDataForm = ({ profile, onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: profile,
    });

    // Используем опциональную цепочку для безопасного доступа
    const serverErrors = useSelector((state) => state.profile?.serverErrors || []); // если serverErrors не существует, передаем пустой массив

    useEffect(() => {
        reset(profile);
    }, [profile, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.info}>
                <label className={s.label}>
                    <strong>Name:</strong>
                    <input className={`${s.input} ${errors.fullName ? s.inputError : ""}`} {...register("fullName")} />
                </label>

                <label className={s.label}>
                    <strong>Looking for a job:</strong>
                    <input className={s.checkbox} type="checkbox" {...register("lookingForAJob")} />
                </label>

                <label className={s.label}>
                    <strong>My professional skills:</strong>
                    <input className={`${s.input} ${errors.lookingForAJobDescription ? s.inputError : ""}`} {...register("lookingForAJobDescription")} />
                </label>

                <label className={s.label}>
                    <strong>About me:</strong>
                    <input className={`${s.input} ${errors.aboutMe ? s.inputError : ""}`} {...register("aboutMe")} />
                </label>

                <div className={s.contactsBlock}>
                    <b className={s.contactsTitle}>Contacts:</b>
                    {profile.contacts &&
                        Object.keys(profile.contacts).map((key) => (
                            <div key={key} className={s.contactItem}>
                                <strong>{key}:</strong>
                                <input className={s.input} {...register(`contacts.${key}`)} />
                            </div>
                        ))}
                </div>

                {/* Блок для отображения ошибок */}
                {serverErrors.length > 0 && (
                    <div className={s.errorContainer}>
                        <b>Ошибки:</b>
                        <ul className={s.errorList}>
                            {serverErrors.map((error, index) => (
                                <li key={index} className={s.errorItem}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <button type="submit" className={s.button}>Save</button>
            </div>
        </form>
    );
};
