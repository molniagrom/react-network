import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import {usersAPi} from "../../api/api";

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // debugger

    // Проблема: При нажатии подписаться отписаться, показывается Preloader А так быть не должно. Плюс Я не вижу disabled

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
                                       props.toggleFollowingProgress(true, u.id);
                                       usersAPi.getUnFollow(u.id)
                                           .then((resultCode) => {
                                               if (resultCode === 0) {
                                                   props.unfollow(u.id);
                                               }
                                               props.toggleFollowingProgress(false, u.id);
                                           })
                                           .catch(() => {
                                               props.toggleFollowingProgress(false, u.id);
                                           });
                                   }}
                               >
                                   Unfollow
                               </button>
                           ) : (
                               <button
                                   disabled={props.followingInProgress.some(id => id === u.id)}
                                   onClick={() => {
                                       props.toggleFollowingProgress(true, u.id);
                                       usersAPi.getFollow(u.id)
                                           .then((resultCode) => {
                                               if (resultCode === 0) {
                                                   props.follow(u.id);
                                               }
                                               props.toggleFollowingProgress(false, u.id);
                                           })
                                           .catch(() => {
                                               props.toggleFollowingProgress(false, u.id);
                                           });
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
