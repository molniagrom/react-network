import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import {usersAPi} from "../../api/api";
import {follow, unFollow} from "../../redux/users-reduser";

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pagination}>
                {pages.map((page, i) => (
                    <span
                        onClick={() => props.onPageChanged(page)}
                        className={props.currentPage === page ? s.selectedPage : ""}
                        key={i}
                    >
                        {page}
                    </span>
                ))}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt="user"
                                    className={s.userPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                           {u.followed ? (
                               <button
                                   disabled={props.followingInProgress.some(id => id === u.id)}
                                   onClick={() => {
                                       props.unfollow(u.id)
                                   }}
                               >
                                   Unfollow
                               </button>
                           ) : (
                               <button
                                   disabled={props.followingInProgress.some(id => id === u.id)}
                                   onClick={() => {
                                       props.follow(u.id)
                                   }}
                               >
                                   Follow
                               </button>
                           )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
