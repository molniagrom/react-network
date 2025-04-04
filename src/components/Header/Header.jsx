import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://illustrators.ru/uploads/illustration/image/1682866/%D0%B2%D0%BD%D1%82.jpg"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.myInfo}>
                        <img className={s.myAvatar}
                             src={"https://cdnn1.img.crimea.ria.ru/img/07e5/03/07/1119333951_144:0:937:793_1920x0_80_0_0_2b7952c893a7b908f36822c4f7b27013.png"}
                             alt={"Андрей Миронов"}/>
                        <p>{props.login}</p>
                        <button onClick={() => props.logout()}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}
