import React from "react";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
    <div>
      <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>
    </div>

    <div>
      ava + description
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZGW2MjMvckMP-lGvROqZ6IEa_mL1soMWDQ&s"></img> */}
    </div>

    <div>
      My post
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  </div>
  )
}
