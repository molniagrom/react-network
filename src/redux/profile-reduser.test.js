import {addPostCreator, deletePost, profileReducer} from "./profile-reduser";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', quantityLike: 19},
        {id: 2, message: 'It\'s my post!', quantityLike: 5},
        {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
        {id: 4, message: 'I want pizza', quantityLike: 212},
        {id: 5, message: 'So order it', quantityLike: 3},
        {id: 6, message: 'I\'m lazy', quantityLike: 2},
        {id: 7, message: 'I\'m hungry', quantityLike: 1000},
    ],
}

it("length of posts should be incremented", () => {
    let action = addPostCreator("Alina-pioneer")

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(8)
})
it("message of new posts should be correct", () => {
    let action = addPostCreator("Alina-pioneer")

    let newState = profileReducer(state, action);

    expect(newState.posts[0].message).toBe("Alina-pioneer")
})

it("after deleting length of messages should be decremented", () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6)
})

it("after deleting length of messages shouldn't be decremented if id is incorrect", () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(7)
})