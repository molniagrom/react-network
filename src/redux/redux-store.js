// Импортируем configureStore из @reduxjs/toolkit вместо createStore
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "./profile-reduser";
import { dialogReducer } from "./dialogs-reduser";
import { sidebarReducer } from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";

// Объединяем редьюсеры
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

// Создаём store с использованием configureStore
export let store = configureStore({
    reducer: reducers, // Передаём объединённый редьюсер
});

// Экспортируем store как default для удобства
export default store;
