import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "30db831e-a1bb-4972-92d9-f204c02ccc87", 
                                                },
                                            })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            })
                                            .catch((error) => {
                                                console.error("Ошибка при отписке:", error);
                                            });
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => {
                                        axios.post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "30db831e-a1bb-4972-92d9-f204c02ccc87",
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            })
                                            .catch((error) => {
                                                console.error("Ошибка при подписке:", error);
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
