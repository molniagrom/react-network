// Импортируем configureStore из @reduxjs/toolkit вместо createStore
import {configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import { profileReducer } from "./profile-reduser";
import { dialogReducer } from "./dialogs-reduser";
import { sidebarReducer } from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reducer";
import {thunk} from "redux-thunk";
import {loginReducer} from "../components/Login/login-reducer";

const thunkMiddleware = thunk;

// Объединяем редьюсеры
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    login: loginReducer,
});

// Создаём store с использованием configureStore
export let store = configureStore({
    reducer: reducers, // Передаём объединённый редьюсер
    applyMiddleware: applyMiddleware(thunkMiddleware),
});

// Экспортируем store как default для удобства
export default store;
