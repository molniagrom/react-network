import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export let Users = (props) => {

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            <div>
                {props.users.map((u) => (
                    <User key={u.id} {...props} user={u}/>
                ))}
            </div>
        </div>
    );
};
