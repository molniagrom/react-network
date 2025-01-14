import React from "react";
import s from "./users.module.css"

export let Users = (props) => {

   if (props.users.length === 0) {
       props.setUsers([
           {
               id: 1,
               followed: false,
               fullName: "Dmitry K.",
               status: "I am looking for a Job right now...",
               location: {country: "Belarus", city: "Minsk"},
               photoUrl: "https://i.pinimg.com/736x/6e/82/ff/6e82ffb0579d9d726e4cabf6303f0f71.jpg",
           },
           {
               id: 2,
               followed: true,
               fullName: "Svetlana D.",
               status: "I am so pretty",
               location: {country: "Belarus", city: "Minsk"},
               photoUrl: "https://i.pinimg.com/736x/6e/82/ff/6e82ffb0579d9d726e4cabf6303f0f71.jpg",
           },
           {
               id: 3,
               followed: false,
               fullName: "Sergei S.",
               status: "I am like football!!!",
               location: {country: "Ukraine", city: "Kiev"},
               photoUrl: "https://i.pinimg.com/736x/6e/82/ff/6e82ffb0579d9d726e4cabf6303f0f71.jpg",
           },
           {
               id: 4,
               followed: true,
               fullName: "Andrew T.",
               status: "I am free to help you good Video Product",
               location: {country: "United States", city: "Philadelphia"},
               photoUrl: "https://i.pinimg.com/736x/6e/82/ff/6e82ffb0579d9d726e4cabf6303f0f71.jpg",
           },
       ]);
   }

    return <div>
        {
            props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="user" className={s.userPhoto}/>
                        </div>
                        <div>
                           {
                               u.followed
                                   ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                   : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                           }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))
        }
    </div>
}