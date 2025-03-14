import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "./profile-reduser";
import { dialogReducer } from "./dialogs-reduser";
import { sidebarReducer } from "./sidebar-reduser";
import { usersReducer } from "./users-reduser";
import { authReducer } from "./auth-reducer";
import { thunk } from "redux-thunk";
import { appReducer } from "./app-reducer";

// Объединяем редьюсеры
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

// Настраиваем DevTools, если доступны
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || undefined;

// Создаём store
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: composeEnhancers !== undefined, // Активируем DevTools, если доступны
});

export default store;
