import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
  // debugger
  return (
    <header className={s.header}>
      <img src="https://illustrators.ru/uploads/illustration/image/1682866/%D0%B2%D0%BD%D1%82.jpg"/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.email : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
  )
}
