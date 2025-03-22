import s from "./ProfileInfo.module.css";
import React from "react";
import {Contact} from "./ProfileInfo";

export const ProfileData = (props) => {
    // console.log(props.profile)
    return (
        <div>
            {props.isOwner &&
                <div>
                    <button className={s.buttonEdite} onClick={props.goToEditeMode}>Edite</button>
                </div>
            }
            <div className={s.info}>
                <p><strong>Name:</strong> {props.profile.fullName}</p>
                <p><strong>Looking for a job:</strong> {props.profile.lookingForAJob ? "yes" : "no"}</p>
                {props.profile.lookingForAJob &&
                    <p><strong>My professional skills:</strong> {props.profile.lookingForAJobDescription}</p>
                }
                <p><strong>About me:</strong> {props.profile.aboutMe}</p>
                <p><strong>userID:</strong> {props.profile.userId}</p>

                <div>
                    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => <Contact key={key}
                                                                                              contactTitle={key}
                                                                                              contactValue={props.profile.contacts[key]}/>)}
                </div>

                {/*{props.profile.contacts.instagram && (*/}
                {/*    <p>*/}
                {/*        <strong>Instagram:</strong>*/}
                {/*        <a href={`https://instagram.com/${props.profile.contacts.instagram}`}*/}
                {/*           target="_blank"*/}
                {/*           rel="noopener noreferrer"*/}
                {/*           className={s.instagram}>*/}
                {/*            {` @${props.profile.contacts.instagram}`}*/}
                {/*        </a>*/}
                {/*    </p>*/}
                {/*)}*/}
            </div>
        </div>
    )
}
