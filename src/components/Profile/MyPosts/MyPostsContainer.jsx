import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostCreator(text)
                    store.dispatch(action);
                }

                return <MyPosts
                    upDatePostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}
