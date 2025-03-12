import React from "react";
import s from "./Paginator.module.css";

export let Paginator = (props) => {
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
        </div>
    );
};
