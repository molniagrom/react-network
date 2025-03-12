import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export let Users = (props) => {

    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />

            {props.users.map((u) => (
              <User key={u.id} {...props} user={u} />
            ))}
        </div>
    );
};
