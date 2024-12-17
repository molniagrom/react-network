import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "./friends/Friends";

console.log(s);

export const Navbar = (props) => {
    // debugger
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : s.item}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : s.item}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : s.item}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : s.item}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? `${s.item} ${s.activeLink}` : s.item}>
                    Settings
                </NavLink>
            </div>

            <Friends state={props.state} />
        </nav>
    )
}

