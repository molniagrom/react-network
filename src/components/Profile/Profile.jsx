import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div>
    <div>
      <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>
    </div>

    <div>
      ava + description
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZGW2MjMvckMP-lGvROqZ6IEa_mL1soMWDQ&s"></img> */}
    </div>
      <MyPosts hey={"уо"}/>
  </div>
  )
}
