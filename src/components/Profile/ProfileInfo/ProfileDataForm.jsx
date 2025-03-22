import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import s from "./ProfileInfo.module.css";

export const ProfileDataForm = ({ profile, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, // Получаем ошибки валидации
    } = useForm({
        defaultValues: profile, // Загружаем данные профиля
        mode: "onBlur", // Проверка при потере фокуса
    });

    // Обновляем форму при изменении profile
    useEffect(() => {
        reset(profile);
    }, [profile, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.info}>
                <label className={s.label}>
                    <strong>Name:</strong>
                    <input
                        className={`${s.input} ${errors.fullName ? s.inputError : ""}`}
                        {...register("fullName", { required: "Name is required" })}
                    />
                    {errors.fullName && <p className={s.errorText}>{errors.fullName.message}</p>}
                </label>

                <label className={s.label}>
                    <strong>Looking for a job:</strong>
                    <input
                        className={s.checkbox}
                        type="checkbox"
                        {...register("lookingForAJob")}
                    />
                </label>

                <label className={s.label}>
                    <strong>My professional skills:</strong>
                    <input
                        className={`${s.input} ${errors.lookingForAJobDescription ? s.inputError : ""}`}
                        {...register("lookingForAJobDescription", { required: "This field is required" })}
                    />
                    {errors.lookingForAJobDescription && (
                        <p className={s.errorText}>{errors.lookingForAJobDescription.message}</p>
                    )}
                </label>

                <label className={s.label}>
                    <strong>About me:</strong>
                    <input
                        className={`${s.input} ${errors.aboutMe ? s.inputError : ""}`}
                        {...register("aboutMe", { required: "About me is required" })}
                    />
                    {errors.aboutMe && <p className={s.errorText}>{errors.aboutMe.message}</p>}
                </label>

                {/* Блок с контактами */}
                <div className={s.contactsBlock}>
                    <b className={s.contactsTitle}>Contacts:</b>
                    {profile.contacts &&
                        Object.keys(profile.contacts).map((key) => (
                            <div key={key} className={s.contactItem}>
                                <strong>{key}:</strong>
                                <input
                                    className={`${s.input} ${errors.contacts?.[key] ? s.inputError : ""}`}
                                    {...register(`contacts.${key}`, {
                                        pattern: {
                                            value: /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w-._~:/?#[\]@!$&'()*+,;=]+$/,
                                            message: "Enter a valid URL",
                                        },
                                    })}
                                />
                                {errors.contacts?.[key] && (
                                    <p className={s.errorText}>{errors.contacts[key].message}</p>
                                )}
                            </div>
                        ))}
                </div>

                <button type="submit" className={s.button}>Save</button>
            </div>
        </form>
    );
};
