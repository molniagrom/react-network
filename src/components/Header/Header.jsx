import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    // debugger
    console.log(props.profile);
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://illustrators.ru/uploads/illustration/image/1682866/%D0%B2%D0%BD%D1%82.jpg"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.myInfo}>
                        <img className={s.myAvatar}
                             src={props.profile?.photos?.large || "https://via.placeholder.com/100"}
                             alt={"Андрей Миронов"}/>
                        <p>{props.login}</p>
                        <button onClick={() => props.logout()}>Log out</button>
                    </div>
                    : <NavLink className={s.link} to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
